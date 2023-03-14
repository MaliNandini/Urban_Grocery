import React from "react";

import Search from "../Search/Search";
import MyCart from '../MyCart/MyCart';

export const Navbar = ({setData,addItem,setAddItem}) => {
 
  return (
    <div>
      <nav class="bg-white px-2 sm:px-4  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              src="http://grocery.intelliatech.com/dist/img/logo.png"
              class="h-6 mr-3 mt-2 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Hi, There!
            </span>
          </a>
          
          <div class="flex md:order-2">
           
          <MyCart addItem={addItem} setAddItem={setAddItem}/>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <Search setData={setData}/>
          </div>
        </div>
      </nav>
    </div>
  );
};
