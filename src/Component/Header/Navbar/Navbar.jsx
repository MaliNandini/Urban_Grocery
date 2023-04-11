import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import MyCart from "../../MyCart/MyCart";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import AccountButton from "../../AccountDropdown/AccountButton";

export const Navbar = ({
  setData,
  addItem,
  setAddItem,
  formData,
  setFormdata,
  setShowSearchBar,
  name,
  setName,
  isOpen,
  setIsOpen
}) => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(true);
  

  useEffect(() => {
    const handleScroll = () => {
      const isScrollingDown = window.scrollY > 0;
      setShowSearch(!isScrollingDown);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowSearchBar = () => {
    setShowSearchBar(true);
    navigate("/search");
  };
  return (
    <div className="">
      <nav className=" px-2 sm:px-4 fixed w-full z-20 top-0 left-0 border-b border-light_gray shadow-sm bg-white">
        <div className="bg-white flex flex-wrap items-center justify-between mx-auto ">
          <NavLink to="/" className="flex items-center bg-white">
            <img
              src="http://grocery.intelliatech.com/dist/img/logo.png"
              className="h-6 mr-3 mt-2 sm:h-9 bg-white"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white bg-white">
              Hi,There!
            </span>
          </NavLink>

          <div class="flex md:order-2 z-10 xs:gap-3 bg-white">
            {showSearch ? null : (
              <div className="md:hidden xs:visible rounded-lg bg-lime w-10 h-10 xs:mt-2">
                <FaSistrix
                  className=" text-white m-2 text-2xl bg-lime"
                  onClick={handleShowSearchBar}
                />
              </div>
            )}
            <AccountButton isOpen={isOpen} setIsOpen={setIsOpen}/>
            <MyCart
              addItem={addItem}
              setAddItem={setAddItem}
              formData={formData}
              setFormdata={setFormdata}
            />
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 z-0 bg-white">
            <Search setData={setData} name={name} setName={setName} />
          </div>
        </div>
      </nav>
    </div>
  );
};
