import React, { useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";

function AccountButton({ isOpen, setIsOpen }) {
  return (
    <>
      <div
        className="flex  md:w-24 xs:w-20 h-[30px] rounded-lg  md:px-2  md:mt-3 xs:mt-3 bg-white"
       
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className=" text-black sm:text-lg">Account</button>
        <div className="md:mt-1 xs:mt-1 bg-white ">
          <FaCaretDown className="bg-white"/>
        </div>
      </div>
    </>
  );
}

export default AccountButton;
