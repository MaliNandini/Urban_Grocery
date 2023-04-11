import React from 'react'

function DropdownMenu({isOpen}) {
  return (
    <>
    {isOpen && (
        <div className="rounded-lg  bg-white md:mt-20 sm:mt-20 xs:mt-20 md:ml-[980px] sm:ml-[400px] xs:ml-[100px] z-10 fixed w-60 px-4">
          <p className="bg-white mt-4 sm:text-2xl md:text-lg ">My Account</p>
          <p className="text-xs font-thin text-secondary bg-white sm:text-lg md:text-sm">
            6262771508
          </p>
          <div className="text-xs font-thin my-3 text-secondary bg-white ">
            <p className="bg-white sm:text-lg md:text-sm mt-4">My Orders</p>
            <p className="bg-white sm:text-lg md:text-sm mt-4">Saved Address</p>

            <div className="flex justify-between mt-4 bg-white ">
              <p className="bg-white sm:text-lg md:text-sm">My Wallet</p>
              <p className="bg-white sm:text-lg md:text-sm">₹ 0</p>
            </div>

            <p className="bg-white sm:text-lg  md:text-sm mt-4">Log Out</p>
          </div>
        </div>
      )}
    </>
  )
}

export default DropdownMenu