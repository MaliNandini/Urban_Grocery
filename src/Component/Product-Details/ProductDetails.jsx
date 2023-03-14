import React, { useState } from "react";
import { FaRegHeart, FaAlignLeft, FaArrowsAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { mockProduct } from "../../Models/MockProduct";
import { categoryData } from "../../Models/MockCategoryData";

export const ProductDetails = ({ setAddItem, addItem}) => {
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
    <div className="flex mt-10 p-16 justify-between">
      {filterData &&
        filterData.map((item) => {
          return (
            <>
              <div className="flex flex-row">
                <div
                  className="flex flex-col bg-white dark:bg-neutral-700"
                  key={item.id}
                >
                  <img
                    className="w-[500px] h-[400px] object-cover"
                    src={item.image}
                    alt=""
                  />
                  <div className="text-left">
                    <h1 className="font-bold mt-6">Product Details</h1>
                    <p className="text-gray-600">{item.description}</p>
                    <h1 className="font-bold mt-5">Manufacturer</h1>
                    <p>{item.manufacturer}</p>

                    <h1 className="font-bold mt-5">Made In</h1>
                    <p>{item.made_in}</p>
                  </div>
                </div>

                <div className="flex flex-col mr-24 al p-6 ">
                  <div className="flex flex-row gap-10">
                    <div className="flex gap-1">
                      <FaRegHeart className="text-2xl " />
                      <p>Wish_List</p>
                    </div>
                    <div className="flex gap-1">
                      <FaArrowsAlt className="text-lg "/>
                       <p> Share</p>
                    </div>
                    <div className="flex gap-1">
                      <FaAlignLeft className="text-lg "/>
                      <p className="ml-1">Similar_Products</p>
                    </div>
                  </div>


                  <h3 className="mt-4 text-2xl text-green-700 font-medium float-left text-left  dark:text-neutral-50">
                    {item.name}
                  </h3>
                  {item &&
                    item.variants.map((data) => {
                      return (
                        <>
                          <div className="text-md text-left ">
                            <p>Price : ₹{data.price} </p>
                            <h1>
                              Measurement : {data.measurement}
                              {data.measurement_unit_name}
                            </h1>
                            <h1>discount : ₹{data.discounted_price} </h1>
                          </div>
                        </>
                      );
                    })}

                  <button
                    className="bg-lime mt-5 w-[118px]  text-white font-bold py-2 px-4 rounded-lg hover:opacity-90"
                    onClick={() => addItemHandler(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};
