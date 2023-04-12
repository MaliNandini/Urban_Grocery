import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { mockProduct } from "../../../Models/MockProduct";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CartQuantity from "../../Button/CartQuantity";

export const ProductCarousel = ({ name, setAddItem, addItem }) => {
  const navigate = useNavigate();
  const [allproduct, setShowAllProducts] = useState(mockProduct.data);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const addItemHandler = (item) => {
    console.log(item);

    if (addItem.some((cartItem) => cartItem.id === item.id)) {
      setAddItem((cart) =>
        cart.map((data) =>
          data.id === item.id
            ? {
                ...data,
                amount: data.amount + 1,
              }
            : data
        )
      );
      return;
    }

    setAddItem((cart) => [...cart, { ...item, amount: 1 }]);
  };

  const viewAllProducts = () => {
    navigate("/allproducts");
  };

  return (
    <div className="mt-14 pb-5">
      <div className="xs:my-5 mt-20 flex justify-between">
        <div className="text-lime text-base font-semibold">
          <h1>All Proudcts</h1>
        </div>
        <div className=" text-orange  text-base	font-semibold">
          <h1 className="cursor-pointer" onClick={viewAllProducts}>
            View All
          </h1>
        </div>
      </div>

      <div className="md:mt-5 ">
        <Carousel responsive={responsive}>
          {allproduct &&
            allproduct.map((item) => {
              return (
                <>
                  <div className="w-72 xs:w-40 md:w-48 rounded-lg md:mt-4 container border border-light_gray hover:border-light_green shadow-lg bg-white">
                    <NavLink
                      to={`/subcategory-details/${item.category_name}/product-details/${item.id}`}
                    >
                      <img
                        className="w-full h-56 xs:w-32 xs:h-32 xs:m-3 md:h-32 md:ml-4 md:w-36 md:mt-4 rounded-lg bg-white"
                        src={item.image}
                        alt={name}
                      />
                    </NavLink>
                    <div className="py-4 xs:mb-[-10px] md:mx-4 xs:mx-4 sm:mx-4 bg-white">
                      <p className="md:text-sm xs:text-sm sm:text-2xl font-normal bg-white truncate ...">
                        {item.name}
                      </p>
                    </div>
                    {item &&
                      item.variants.map((data) => {
                        return (
                          <div className="md:flex sm:flex ">
                            <div className=" xs:text-left sm:mt-2 md:mt-[15px] md:mx-4 xs:mx-4 sm:mx-4 md:text-left ">
                              <p className="2xs:text-base xs:text-sm sm:text-xl md:text-sm text-black font-light bg-white">
                                ₹{data.price}{" "}
                              </p>
                            </div>
                            {data.stock > 0 ? <button
                                className="md:w-[80px] md:h-[40px] mb-3 xs:w-18 xs:ml-20 sm:ml-2 text-lime border border-lightgreen bg-transparent hover:bg-opacity-75 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={() => addItemHandler(item)}
                              >
                                Add
                              </button> : (
                                <p className=" bg-white text-orange text-sm font-medium mt-4 pb-4 md:mx-4 xs:mx-4 sm:mx-4 mr-[43px]">
                                  Out of stock
                                </p>
                              )}                           
                          </div>
                        );
                      })}
                  </div>
                </>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};
