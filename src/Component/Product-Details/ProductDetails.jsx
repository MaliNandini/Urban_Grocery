import React, { useState } from "react";
import { FaRegHeart, FaAlignLeft, FaArrowsAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { mockProduct } from "../../Models/MockProduct";

export const ProductDetails = ({ setAddItem, addItem }) => {
  const [productPageData, setProductPage] = useState(mockProduct.data);
  const { id } = useParams();

  const addItemHandler = (item) => {
    // Update cart item quantity if already in cart
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
    // Add to cart
    setAddItem((cart) => [
      ...cart,
      { ...item, amount: 1 }, // <-- initial amount 1
    ]);
  };

  const filterData = productPageData.filter((data) => {
    return data.id === id;
  });

  return (
    <div className="2xs:mt-10 xs:mt-10 md:mt-20 p-10">
      {filterData &&
        filterData.map((item) => {
          return (
            <>
              <div className="md:flex">
                <div className="img">
                  <img
                    className="xs:w-80 xs:max-h-96 sm:w-screen sm:h-auto md:w-[500px] md:h-[400px] object-cover rounded-lg shadow-lg"
                    src={item.image}
                    alt=""
                  />
                </div>

                <div className="xs:flex-col md:ml-20 md:p-6 ">
                  <div className="2xs:flex 2xs:mt-4 xs:flex xs:mt-4 sm:mt-8 md:flex gap-4">
                    <div className="2xs:flex xs:flex 2xs:gap-1 xs:gap-1 sm:gap-1 md:flex md:gap-1">
                      <FaRegHeart className="2xs:text-xs xs:text-lg sm:text-3xl sm:gap-2 md:text-xl  " />
                      <p className="2xs:text-xs xs:text-sm sm:text-3xl md:text-xl">
                        Wish_List
                      </p>
                    </div>
                    <div className="2xs:flex xs:flex xs:gap-1 sm:gap-1 md:flex md:gap-1">
                      <FaArrowsAlt className="2xs:text-xs xs:text-lg sm:text-3xl md:text-xl " />
                      <p className="2xs:text-xs xs:text-sm sm:text-3xl md:text-xl">
                        Share
                      </p>
                    </div>
                    <div className="2xs:flex xs:flex xs:gap-1 md:flex sm:gap-1 md:gap-1">
                      <FaAlignLeft className="2xs:text-xs xs:text-lg xs:gap-1 sm:text-3xl md:text-xl " />
                      <p className="2xs:text-xs xs:text-sm sm:text-3xl md:text-xl">
                        Similar_Products
                      </p>
                    </div>
                  </div>

                  <div className="data 2xs:mt-3 xs:mb-3 ">
                    <h3 className="2xs:text-base 2xs:font-semibold xs:mt-2 mr-50 xs:text-sm xs:font-bold sm:mt-4 sm:text-3xl md:mt-4 md:text-2xl text-green-700 md:font-medium dark:text-neutral-50">
                      {item.name}
                    </h3>
                    {item &&
                      item.variants.map((data) => {
                        return (
                          <>
                            <div className="xs:text-sm xs:text-left sm:mt-2 md:text-md md:text-left ">
                              <p className="2xs:text-base 2xs:font-normal xs:font-normal sm:text-xl">
                                Price : ₹{data.price}{" "}
                              </p>
                              <h1 className="2xs:text-base 2xs:font-normal xs:font-normal sm:text-xl">
                                Measurement : {data.measurement}
                                {data.measurement_unit_name}
                              </h1>
                              <h1 className="2xs:text-base 2xs:font-normal xs:font-normal sm:text-xl">
                                discount : ₹{data.discounted_price}{" "}
                              </h1>
                            </div>
                          </>
                        );
                      })}
                    <button
                      className="bg-lime 2xs:px-2 2xs:mt-2 2xs:rounded xs:mt-3 xs:w-24 xs:rounded-lg xs:py-1 sm:w-40 sm:h-12 md:mt-5 md:w-[118px] text-white md:font-bold md:py-2 md:px-4 md:rounded-lg md:hover:opacity-90"
                      onClick={() => addItemHandler(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h1 className="2xs:mt-2 font-bold md:mt-3 xs:text-xl sm:text-2xl">
                  Product Details
                </h1>
                <p className="2xs:text-sm text-gray-600 xs:text-sm sm:text-2xl sm:mt-2 md:text-lg">
                  {item.description}
                </p>
                <p className="font-bold 2xs:mt-2 xs:mt-2 xs:text-xl sm:text-3xl md:mt- md:text-2xl md:mb-0">
                  Manufacturer
                </p>
                <p className="2xs:text-sm xs:text-sm sm:mt-2 sm:text-2xl">
                  {item.manufacturer}
                </p>
                <p className="font-bold 2xs:mt-2 xs:mt-2 xs:text-xl sm:text-2xl ">
                  Made In
                </p>
                <p className="2xs:text-sm 2xs:mb-2 xs:text-sm sm:mt-2 sm:text-2xl">
                  {item.made_in}
                </p>
              </div>
            </>
          );
        })}
    </div>
  );
};
