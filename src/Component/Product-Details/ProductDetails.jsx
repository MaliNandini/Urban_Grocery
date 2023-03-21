import React, { useEffect, useState } from "react";
import { FaRegHeart, FaAlignLeft, FaArrowsAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { mockProduct } from "../../Models/MockProduct";

export const ProductDetails = ({ setAddItem, addItem }) => {
  const [productPageData, setProductPage] = useState(mockProduct.data);
  const { id } = useParams();

  
  
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
                  <div className="2xs:flex 2xs:mt-4 xs:flex xs:mt-4 sm:mt-8 md:flex md:gap-4 sm:gap-7 xs:gap-6 2xs:gap-3">
                    <div className="2xs:flex xs:flex 2xs:gap-1 xs:gap-1  md:flex md:gap-1 ">
                      <FaRegHeart className="2xs:text-xs xs:text-sm sm:text-3xl  md:text-sm mt-1 " />
                      <p className="2xs:text-xs xs:text-sm sm:text-3xl md:text-sm">
                        Wish_List
                      </p>
                    </div>
                    <div className="2xs:flex xs:flex xs:gap-1  md:flex md:gap-1 ">
                      <FaArrowsAlt className="2xs:text-xs xs:text-sm sm:text-3xl md:text-sm mt-1 " />
                      <p className="2xs:text-xs xs:text-sm sm:text-3xl md:text-sm">
                        Share
                      </p>
                    </div>
                    <div className="2xs:flex xs:flex xs:gap-1 md:flex md:gap-1 ">
                      <FaAlignLeft className="2xs:text-xs xs:text-sm xs:gap-1 sm:text-3xl md:text-sm mt-1" />
                      <p className="2xs:text-xs xs:text-sm sm:text-3xl md:text-sm">
                        Similar_Products
                      </p>
                    </div>
                  </div>

                  <div className="data 2xs:mt-3 xs:mb-3 ">
<<<<<<< HEAD
                    <p className="2xs:text-base 2xs:font-semibold xs:mt-2 mr-50  xs:text-sm xs:font-bold sm:mt-4 sm:text-3xl md:mt-4 md:text-2xl text-green-700 md:font-normal dark:text-neutral-50">
=======
                    <h3 className="2xs:text-xl 2xs:font-semibold xs:mt-2 mr-50 xs:text-2xl xs:font-semibold sm:mt-4 sm:text-4xl md:mt-4 md:text-2xl  md:font-medium ">
>>>>>>> 0631def319e1be9a8cc3824404bdc99ea4b669ae
                      {item.name}
                    </p>
                    {item &&
                      item.variants.map((data) => {
                        return (
                          <>
<<<<<<< HEAD
                            <div className="xs:text-sm xs:text-left sm:mt-2 md:text-md md:text-left ">
                              <p className="2xs:text-base 2xs:font-normal xs:font-normal xs:text-xs sm:text-xl md:text-sm">
                                Price : ₹{data.price}{" "}
                              </p>
                              <p className="2xs:text-base 2xs:font-normal xs:font-normal xs:text-xs sm:text-xl md:text-sm">
                                Measurement : {data.measurement}
                                {data.measurement_unit_name}
                              </p>
                              <p className="2xs:text-base 2xs:font-normal xs:font-normal xs:text-xs sm:text-xl md:text-sm">
=======
                            <div className="xs:text-sm xs:text-left sm:mt-2  md:text-left ">
                              <p className="2xs:text-base 2xs:font-normal xs:font-normal sm:text-xl md:text-lg">
                                Price : ₹{data.price}{" "}
                              </p>
                              <h1 className="2xs:text-base 2xs:font-normal xs:font-normal sm:text-xl md:text-lg">
                                Measurement : {data.measurement}
                                {data.measurement_unit_name}
                              </h1>
                              <h1 className="2xs:text-base 2xs:font-normal xs:font-normal sm:text-xl md:text-lg">
>>>>>>> 0631def319e1be9a8cc3824404bdc99ea4b669ae
                                discount : ₹{data.discounted_price}{" "}
                              </p>
                            </div>
                          </>
                        );
                      })}
                    <p className="2xs:text-base 2xs:font-normal xs:font-normal xs:text-xs sm:text-xl md:text-sm">
                      Rating : {item.ratings}
                    </p>

                    <button
                      className="bg-lime 2xs:px-2 2xs:mt-2 2xs:rounded xs:mt-3 xs:w-24 xs:rounded-lg xs:py-1 md:mt-3 md:w-[118px] text-white md:font-bold md:py-2 md:px-4 md:rounded-lg md:hover:opacity-90"
                      onClick={() => addItemHandler(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-left">
<<<<<<< HEAD
                <p className="2xs:mt-2 font-medium md:mt-3 xs:text-xl sm:text-2xl">
                  Product Details
                </p>

                <p className="2xs:text-sm text-gray-600 xs:text-xs xs:font-normal sm:text-xl sm:mt-2 md:text-sm md:mb-0">
                  {item.description}
                </p>
                <p className="2xs:mt-2 xs:mt-2 xs:text-sm xs:font-medium sm:text-xl md:text-base md:font-medium md:mb-0 ">
                  Manufacturer
                </p>
                <p className="2xs:text-sm xs:text-sm xs:font-normal  sm:mt-2 sm:text-xl md:text-base md:mb-0">
                  {item.manufacturer}
                </p>
                <p className="2xs:mt-2 xs:mt-2 xs:text-sm xs:font-medium  sm:text-xl md:text-base md:font-medium md:mb-0">
                  Made In
                </p>
                <p className="2xs:text-sm 2xs:mb-2 xs:text-sm xs:font-normal  sm:mt-2 sm:text-xl  md:text-base md:mb-0">
=======
                <p className="2xs:mt-4 font-bold md:mt-3 xs:text-lg sm:text-3xl md:text-xl ">
                  Product Details
                </p>
                <p className="2xs:text-sm text-gray-600 xs:text-sm sm:text-2xl sm:mt-1 md:text-base">
                  {item.description}
                </p>
                <p className="font-bold 2xs:mt-2 xs:mt-2 xs:text-lg sm:text-3xl md:text-xl md:mt-3 sm:mt-5">
                  Manufacturer
                </p>
                <p className="2xs:text-sm xs:text-sm sm:mt-1 sm:text-2xl md:text-base md:mt-0">
                  {item.manufacturer}
                </p>
                <p className="font-bold 2xs:mt-2 xs:mt-2 xs:text-lg  sm:text-3xl md:text-xl sm:mt-4">
                  Made In
                </p>
                <p className="2xs:text-sm 2xs:mb-2 xs:text-sm sm:mt-1 sm:text-2xl md:text-base md:mt-0">
>>>>>>> 0631def319e1be9a8cc3824404bdc99ea4b669ae
                  {item.made_in}
                </p>
              </div>
            </>
          );
        })}
    </div>
  );
};
