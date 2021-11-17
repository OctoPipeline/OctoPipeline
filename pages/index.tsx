/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";

import { signIn, signOut, useSession } from "next-auth/client";

import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/FooterSmall";
const Home: NextPage = () => {
  const [session, loading] = useSession();
  console.log(session);
  return (
    <>
      {!session && (
        <>
          <IndexNavbar fixed />
        </>
      )}
      {session && (
        <>
          <IndexNavbar fixed />
        </>
      )}
      <section className="header relative">
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">
                  UTDesign MakerSpace 3D Printing
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  UTD MakerSpace provides <strong>free 3D printing</strong> to
                  all UTD students. MakerSpace is located in SPN 2.210. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="mt-12">
                  <a
                    href=""
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/3dprinter.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 pb-32 pt-20 ">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="Benchy"
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(11deg) rotateX(3deg) rotate(2deg)",
                }}
                src="/img/3DBenchy.png"
              />
            </div>

            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">Getting Started</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500"></p>

                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div>
                      <h3 className="text-lg  text-blueGray-500">
                        <strong className="text-bluegray-700">1.</strong> Attend
                        MakerSpace 3D Printing training
                      </h3>
                      <h3 className="text-lg  text-blueGray-500">
                        <strong className="text-bluegray-700">3.</strong> Sign
                        up to make an MakerSpace Account
                      </h3>

                      <h3 className="text-lg  text-blueGray-500">
                        <strong className="text-bluegray-700">4.</strong>{" "}
                        Convert STL file to G-code
                      </h3>

                      <h3 className="text-lg text-blueGray-500">
                        <strong className="text-bluegray-700">5.</strong> Submit
                        a printing request
                      </h3>
                    </div>
                  </li>
                </ul>
                <div className="mt-12">
                  <Link href="/auth/register">
                    <a className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                      Sign Up
                    </a>
                  </Link>
                </div>

                <div className="mt-12">
                  <Link href="/print">
                    <a className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                      Submit requests
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creative"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  MakerSoace 3D Print Management
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code! If you also have a 3d Printer and
                want to manage it using this service, you can customize this
                service as per your needs under the MIT license.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star! If you want to contritube to this project, checkout our
                GitHub issues.
              </p>
              <a
                href="https://github.com/OctoPipeline/OctoPipeline"
                target="_blank"
                className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                <i className="fab fa-github text-lg mr-1"></i>
                <span>GitHub</span>
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love"></span>
              </p>
              <h3 className="font-semibold text-3xl">Have Questions?</h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Reach out to us via UTDesgin MakerSpace Discord server
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-discord text-lg mr-1"></i>
                  <span>Join Discord Sever</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
