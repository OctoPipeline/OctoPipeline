
import { useSession, signIn, signOut } from "next-auth/client";
import { useRouter } from 'next/router'

import Link from "next/link";
import React from "react";

import Navbar from "components/Navbars/UserNavbar";
import CardTable from "components/Cards/CardTable";
import Footer from "components/Footers/FooterSmall";
import Signin from "components/others/signin";

export default function Profile() {

  const [session, loading] = useSession();
  const router = useRouter()

  if (session) {
    return (
      <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div className="absolute top-0 w-full h-full bg-center bg-cover bg-blueGray-600"></div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-end">
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Link href="/print">
                      <button
                        className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button" 
                      >
                        Print
                      </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Requests
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Approved
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {session.user?.name}
                  </h3>

                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
                    {session.user?.email}
                  </div>
                </div>

                <div className="flex flex-wrap mt-4">
                  <div className="w-full mb-12 px-4">
                    <CardTable color="dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
    );
  }
  
 
  return (
    <>
      <Signin/>
    </> 
  );
}
