import React from "react";
import { signIn } from "next-auth/client";

// layout for page

import Auth from "layouts/Auth";

export default function Login() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-screen">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 align-middle align-middle break-words w-full mb-3 shadow-lg rounded-lg bg-makerspace border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-white text-center mb-3 mt-3 font-bold">
                  <small> You are not signed in Log In</small>
                </div>
                <form>
                  <div className="text-center mt-3">
                    <button
                      className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        signIn();
                      }}
                    >
                      <i className="fas fa-user"></i> Log in/ Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
