import ldap from "ldapjs";
import NextAuth, { Session, User } from "next-auth";
import { Awaitable } from "next-auth/internals/utils";
import { JWT } from "next-auth/jwt";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "LDAP",
      credentials: {
        username: { label: "DN", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You might want to pull this call out so we're not making a new LDAP client on every login attemp
        const client = ldap.createClient({
          url: process.env.LDAP_URI as string,
        });

        // Essentially promisify the LDAPJS client.bind function
        return new Promise((resolve, reject) => {
          client.bind(credentials.username, credentials.password, (error) => {
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
          });
        });
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.username = user.username;
        token.password = user.password;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      return { ...session, user: { name: token.username as string } };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true, // Very important to encrypt the JWT, otherwise you're leaking username+password into the browser
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/auth/signIn",
  },
});
