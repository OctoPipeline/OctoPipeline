import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown";

export default function Navbar(props: any) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [session, loading] = useSession();
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-makerspace shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-white text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
              href="https://utdmaker.space/"
            >
              <span>
                <img
                  src="../img/logo.jpeg"
                  alt="MakerSpace"
                  width={48}
                  height={48}
                />
              </span>
            </a>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1  rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center bg-makerspace lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>

              <li className="flex items-center">
                {!session && (
                  <>
                    <Link href="/auth/login">
                      <button
                        className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                        type="button"
                        onClick={signIn}
                      >
                        <i className="fas fa-user"></i> Log in/ Sign Up
                      </button>
                    </Link>
                  </>
                )}
                {session && (
                  <>
                    <button
                      className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                      onClick={signOut}
                    >
                      Log Out
                    </button>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
