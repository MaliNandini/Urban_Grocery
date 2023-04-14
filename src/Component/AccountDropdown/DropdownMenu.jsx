import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

function DropdownMenu({isOpen,setIsOpen}) {
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current) {
        if ( !menuRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      }
      
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
    {isOpen && (
        <div  ref={menuRef} className="rounded-lg  bg-white md:mt-20 sm:mt-20 xs:mt-20 md:ml-[980px] sm:ml-[400px] xs:ml-[100px] z-10 fixed w-60 px-4">
          <p className="bg-white mt-4 sm:text-2xl md:text-lg ">My Account</p>
          <p className="text-xs font-thin text-secondary bg-white sm:text-lg md:text-sm">
            6262771508
          </p>
          <div className="text-xs font-thin my-3 text-secondary bg-white ">
            <NavLink to={'/payment'}><p className="bg-white sm:text-lg md:text-sm mt-4">My Orders</p></NavLink>
            <NavLink to={'/payment'}><p className="bg-white sm:text-lg md:text-sm mt-4">Saved Address</p></NavLink>

            <div className="flex justify-between mt-4 bg-white ">
              <NavLink to={'/payment'}><p className="bg-white sm:text-lg md:text-sm">My Wallet</p></NavLink>
              <p className="bg-white sm:text-lg md:text-sm">₹ 0</p>
            </div>

            <NavLink to={'/payment'}><p className="bg-white sm:text-lg  md:text-sm mt-4">Log Out</p></NavLink>
          </div>
        </div>
      )}
    </>
  )
}

export default DropdownMenu