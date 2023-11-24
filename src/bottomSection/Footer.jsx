import React from "react";
import BottomSectionText from "../Data/BottomSection";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-400 bg-white body-font">
        <div className="bg-white shadow-bo ring-1 ring-slate-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-black">
              <span className="ml-3 text-3xl">Bandage</span>
            </a>

            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="/" className="text-gray-400">
                <svg
                  fill="blue"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-11 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="/" className="ml-3 text-gray-400">
                <svg
                  fill="blue"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-11 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="/" className="ml-3 text-gray-400">
                <svg
                  fill="blue"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-11 h-7"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>

        <div className="container px-5 py-6 mx-auto flex flex-col sm:flex-row">
          {BottomSectionText.map((item, index) => (
            <div
              key={index}
              className="sm:w-1/2 lg:w-1/4 w-full px-4 mb-8 sm:mb-0"
            >
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                {item.heading}
              </h2>
              <nav className="list-none mb-10 grid gap-4">
                <li>
                  <a href="/" className="text-black hover:text-gray-800 font-bold">
                    {item.text1}
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-gray-600 font-bold ">
                    {item.text2}
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-gray-600 font-bold">
                    {item.text3}
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-gray-600 font-bold">
                    {item.text4}
                  </a>
                </li>
              </nav>
            </div>
          ))}

          <div className="lg:w-1/4 md:w-1/2 w-full py-4">
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-black font-bold w-20"
                >
                  Get In Touch
                </label>
                <input
                  type="text"
                  placeholder="Your Email"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900
                  focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-5 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                className="lg:mt-2 xl:mt-0  inline-flex text-white bg-indigo-500 border-0 py-2 px-2
                focus:outline-none hover:bg-indigo-600 rounded"
              >
                SUBSCRIBE
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2 md:text-left font-bold text-center">
              Lore imp sum dolor Amit
              <br className="lg:block hidden" />
            </p>
          </div>
        </div>

        <p className="px-28">Made With Love By Finland All Right Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
