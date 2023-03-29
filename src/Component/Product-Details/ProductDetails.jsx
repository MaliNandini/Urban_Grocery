import React, { useState } from "react";
import { FaRegHeart, FaAlignLeft, FaArrowsAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { mockProduct } from "../../Models/MockProduct";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ProductDetails = ({ setAddItem, addItem }) => {
  const [productPageData, setProductPage] = useState(mockProduct.data);
  const { id } = useParams();

  const addItemHandler = (item) => {
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

  function stripHTML(myString) {
    return myString.replace(/(<([^>]+)>)/gi, "");
  }

  return (
    <div className="2xs:mt-10 xs:mt-10 md:mt-20 p-10">
      {filterData &&
        filterData.map((item) => {
          return (
            <>
              <div className="md:flex">
                <div className="img">
                  <Carousel
                    showIndicators={false}
                    className="rounded-xl md:w-96 xs:w-80 sm:w-96"
                  >
                    <div className=" rounded-xl">
                      <img src={item.image} alt="" className="rounded-lg" />
                    </div>
                    <div className=" rounded-xl">
                      <img src={item.other_images} alt="" />
                    </div>
                  </Carousel>
                </div>

                <div className="xs:flex-col md:ml-20 md:p-6 ">
                  <div className="2xs:flex 2xs:mt-4 xs:flex xs:mt-4 sm:mt-8 md:flex md:gap-4 sm:gap-7 xs:gap-6 2xs:gap-3">
                    <div className="2xs:flex xs:flex 2xs:gap-1 xs:gap-1  md:flex md:gap-1 ">
                      <FaRegHeart className="2xs:text-xs xs:text-sm sm:text-3xl  md:text-lg  text-lime" />
                      <p className="2xs:text-xs xs:text-sm sm:text-3xl md:text-sm">
                        Wish_List
                      </p>
                    </div>
                    <div className="2xs:flex xs:flex xs:gap-1  md:flex md:gap-1 ">
                      <FaArrowsAlt className="2xs:text-xs xs:text-sm sm:text-3xl md:text-lg text-lime " />
                      <p className="2xs:text-xs xs:text-sm sm:text-3xl md:text-sm">
                        Share
                      </p>
                    </div>
                    <div className="2xs:flex xs:flex xs:gap-1 md:flex md:gap-1 ">
                      <FaAlignLeft className="2xs:text-xs xs:text-sm xs:gap-1 sm:text-3xl md:text-lg text-lime" />
                      <p className="2xs:text-xs xs:text-sm sm:text-3xl md:text-sm">
                        Similar_Products
                      </p>
                    </div>
                  </div>

                  <div className="data 2xs:mt-3 xs:mb-3 ">
                    <h3 className="  2xs:text-xl 2xs:font-semibold xs:mt-2 mr-50 xs:text-2xl xs:font-semibold sm:mt-4 sm:text-4xl md:mt-3 md:text-2xl  md:font-medium ">
                      {item.name}
                    </h3>
                    <p className="text-light_gray">
                      ★★★★★{" "}
                      <span className="text-black">
                        {item.number_of_ratings}
                      </span>
                    </p>
                    {item &&
                      item.variants.map((data) => {
                        return (
                          <>
                            <div className="xs:text-sm xs:text-left sm:mt-2  md:text-left ">
                              <p className="text-lime text-lg font-bold">
                                You save ₹{data.price - data.discounted_price}
                                .00
                              </p>
                              <p className="2xs:text-base  sm:text-xl md:text-base text-black font-semibold mt-1">
                                ₹{data.discounted_price}.00{" "}
                                <span className="text-xs text-black line-through">
                                  ₹{data.price}.00{" "}
                                </span>
                              </p>
                              <p className="2xs:text-base  sm:text-xl md:text-sm  mt-1 font-light">
                                {data.measurement} {data.measurement_unit_name}
                              </p>
                              <div className="flex flex-row gap-4 mt-2">
                                <div className="box-border h-16 md:w-40 xs:w-44 px-4 xs:px-2 border-2  border-light_gray rounded-lg text-center text-lime">
                                  <img
                                    src="https://media.istockphoto.com/id/1426338781/vector/return-parcel-box-line-icon-exchange-package-of-delivery-service-linear-pictogram-arrow-back.jpg?b=1&s=170x170&k=20&c=wJ3CCtEVjfm-5h8m-auMfNdIbRB2ouYfe8CX9eAExVs="
                                    alt=""
                                    className="w-9 h-9 ml-auto mr-auto "
                                  />
                                  {item.return_status === "1" ? (
                                    <p>10 Days Returnable</p>
                                  ) : (
                                    <p>Not Returnable</p>
                                  )}
                                </div>
                                <div className="box-border h-16 w-40 md:px-2 xs:px-2 border-2 border-light_gray rounded-lg text-center text-lime">
                                  <img
                                    src="https://static.thenounproject.com/png/3679002-200.png"
                                    alt=""
                                    className="w-9 h-9 ml-auto mr-auto "
                                  />
                                  Not Cancellable
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
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
                <p className="2xs:mt-4 font-semibold md:mt-3 xs:text-lg sm:text-3xl md:text-2xl">
                  Product Details
                </p>
                <p className="2xs:text-sm  xs:text-sm sm:text-2xl sm:mt-1 md:font-light md:text-sm md:w-[500px] text-secondary">
                  {stripHTML(item.description)}
                </p>
                <p className="font-medium 2xs:mt-2 xs:mt-2 xs:text-lg sm:text-3xl md:text-base md:mt-3 sm:mt-5">
                  Manufacturer
                </p>
                <p className="2xs:text-sm xs:text-sm sm:mt-1 sm:text-2xl md:text-xs md:mt-0 font-light text-secondary">
                  {item.manufacturer}
                </p>
                <p className="font-medium 2xs:mt-2 xs:mt-2 xs:text-lg  sm:text-3xl md:text-sm sm:mt-4 ">
                  Made In
                </p>
                <p className="2xs:text-sm 2xs:mb-2 xs:text-sm sm:mt-1 sm:text-2xl md:text-xs md:mt-0 font-light text-secondary">
                  {item.made_in}
                </p>
              </div>
            </>
          );
        })}
    </div>
  );
};
