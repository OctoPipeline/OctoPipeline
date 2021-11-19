import { NextApiRequest, NextApiResponse } from "next";
import ldap from "ldapjs";
import NextAuth, { Session, User } from "next-auth";
import Providers from "next-auth/providers";
import { JWT } from "next-auth/jwt";

const options: any = {
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "johndoe" },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        // TODO: update hardcode to lookup mongo db for user
        if (
          credentials.username === "john" &&
          credentials.password === "test"
        ) {
          return {
            id: 2,
            name: "John",
            email: "john@exmaple.com",
          };
        }
        return null;
      },
    }),
    // NOT SURE IF LDAP WORKS, BUT IT CONNECTS TO URI
    Providers.Credentials({
      name: "LDAP",
      credentials: {
        username: { label: "DN", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const client = ldap.createClient({
          url: process.env.LDAP_URI as string,
        });

        // Essentially promisify the LDAPJS client.bind function
        return new Promise((resolve, reject) => {
          client.bind(
            credentials.username,
            credentials.password,
            (error: any) => {
              if (error) {
                console.error("Failed");
                reject();
              } else {
                console.log("Logged in");
                resolve({
                  username: credentials.username,
                  password: credentials.password,
                });
              }
            }
          );
        });
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.username = user.username;
        token.password = user.password;
      }
      return token;
    },
    async session({ session, user }: { session: Session; user: User }) {
      return { ...session, sub: user.sub };
    },
  },
  // TODO: Add mongodb adapter instead of sqlite for email sso
  database: {
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
