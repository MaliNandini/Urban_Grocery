import React, { useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";

function AccountButton({ isOpen, setIsOpen }) {
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div
        className="flex gap-2 w-24 h-[30px] rounded-lg  md:px-2  md:mt-3 xs:mt-3"
        ref={menuRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className=" text-black sm:text-lg">Account</button>
        <div className="md:mt-1 xs:mt-1">
          <FaCaretDown />
        </div>
      </div>
    </>
  );
}

export default AccountButton;
