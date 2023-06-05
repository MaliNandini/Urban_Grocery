import React from "react";
import { FaBell, FaHome, FaRegAddressBook, FaWallet } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Aside = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="h-full w-1/4 px-12 py-44 mt-10">
          <ul className="font-medium">
            <li className="border border-light_gray mb-2  shadow-lg">
              <NavLink to={"/address"}>
                <a
                  to="/address"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaHome className="text-darkgray text-lg" />
                  <span className="ml-3 text-light_gray font-light">
                    My Address
                  </span>
                </a>
              </NavLink>
            </li>
            <li className="border border-light_gray mb-2 shadow-lg ">
              <NavLink to={"/myorder"}>
                <a
                  to="/myorder"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaRegAddressBook className="text-darkgray text-lg" />
                  <span className="flex-1 ml-3 text-lightgray font-thin">
                    My Order
                  </span>
                </a>
              </NavLink>
            </li>
            <li className="border border-light_gray mb-2 shadow-lg">
              <NavLink to={"/wallet"}>
              <a
                to="/wallet"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaWallet className="text-darkgray text-lg" />
                <span className="flex-1 ml-3  text-lightgray font-normal">
                  My Wallet
                </span>
              </a>
              </NavLink>
              
            </li>
            <li className="border border-light_gray mb-2 shadow-lg">
              <NavLink to={"/"}>
              <a
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaBell className="text-darkgray text-lg" />
                <span className="flex-1 ml-3  text-lightgray font-normal">
                  Logout
                </span>
              </a>
              </NavLink>
             
            </li>
          </ul>
        </div> 
      </div>
    </>
  );
};
