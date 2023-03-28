import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { mockProduct } from "../../Models/MockProduct";

export const Card = ({ name, data, addItem, setAddItem }) => {
  const [cardData, setCardData] = useState(mockProduct.data);

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

  return (
    <>
      {/* show multipal product  */}
      {data.length === 0 ? (
        <div className="flex flex-row flex-wrap mt-20 lg:ml-24 xs:ml-6 sm:ml-20 ">
          {cardData &&
            cardData.map((item) => {
              return (
                <div className="w-80 hover:scale-105 ease-in duration-100 2xs:w-72 rounded-lg  mt-10 mx-5 shadow-xl bg-lightblue ">
                  <NavLink to={`product-details/${item.id}`}>
                    <img className="w-full h-56 rounded-md" src={item.image} alt={name} />
                  </NavLink>
                  <div className=" py-4 text-center">
                    <h2 className="text-xl font-normal">{item.name}</h2>
                    <button
                      className="bg-lime hover:bg-red-700 text-white py-1 px-3 rounded text-sm mt-4  "
                      onClick={() => addItemHandler(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap mt-20 lg:ml-24 px-20">
          {/* show singal product on filter  */}
          {data &&
            data.map((item) => {
              return (
                <>
                  <div className="w-80 rounded-lg mt-5 mx-5  container shadow-lg  bg-lightblue ">
                    <NavLink to={`product-details/${item.id}`}>
                      <img
                        className="w-full h-56"
                        src={item.image}
                        alt={name}
                      />
                    </NavLink>
                    <div className=" py-4 text-center">
                      <h2 className="text-xl font-normal">{item.name}</h2>

                      <button
                        className="bg-lime hover:opacity-90 text-white py-2 px-3 rounded text-sm mt-3"
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
      )}
    </>
  );
};
