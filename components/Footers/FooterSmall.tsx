import React from "react";

export default function FooterSmall(props: any) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-200"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="lg:mb-0 mb-6">
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="https://discord.gg/Zy8GeCx">
                  <i className="fab fa-discord"></i>
                </a>
              </button>
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="https://twitter.com/utdmakerspace">
                  <i className="fab fa-twitter"></i>
                </a>
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="https://facebook.com/utdmakerspace">
                  {" "}
                  <i className="fab fa-facebook-square"></i>
                </a>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="https://www.instagram.com/utdmakerspace/">
                  <i className="fab fa-instagram"></i>
                </a>
              </button>

              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <a href="https://www.linkedin.com/company/40749650">
                  <i className="fab fa-linkedin"></i>
                </a>
              </button>
            </div>
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer-small"
                  className="text-white text-blueGray-300 text-sm font-semibold py-1"
                >
                  UTDesgin MakerSpace
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.freepik.com/"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Freepik
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.creative-tim.com/"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Desgin by Creative Tim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
