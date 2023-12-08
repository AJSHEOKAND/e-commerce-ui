import React from "react";

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl">Bandage</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" class="mr-5 hover:text-gray-900">Home</a>
          <a href="/" class="mr-5 hover:text-gray-900">Shop</a>
          <a href="/" class="mr-5 hover:text-gray-900">Blog</a>
          <a href="/" class="mr-5 hover:text-gray-900">Contact</a>
          <a href="/" class="mr-5 hover:text-gray-900">Pages</a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 space-x-11 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login/
        </button>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
