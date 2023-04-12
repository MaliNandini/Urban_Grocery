import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { mockProduct } from "../../Models/MockProduct";

function Allproducts({ name, addItem, setAddItem }) {
  const [allproduct, setShowAllProducts] = useState(mockProduct.data);
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
  return (
    <div className="mt-20 xs:grid xs:grid-cols-2 md:grid md:grid-cols-6 sm:grid-cols-3 flex flex-wrap md:ml-5 ">
      {allproduct &&
        allproduct.map((item) => {
          return (
            <>
              <div className="w-72 xs:w-44 md:w-44 rounded-lg xs:m-2 xs:my-3 md:mx-5 md:my-4 sm:w-60 sm:my-4 container shadow-sm bg border border-light_gray">
                <NavLink
                  to={`/subcategory-details/${item.category_name}/product-details/${item.id}`}
                >
                  <img
                    className="w-full h-56 xs:w-32 xs:h-32 xs:m-3 xs:mx-6 md:w-36 md:h-28 md:mx-4 md:m-2 sm:w-40 sm:h-32 sm:m-8 rounded-lg"
                    src={item.image}
                    alt={name}
                  />
                </NavLink>
                <div className="md:py-4 px-3 bg-white">
                  <p className="text-xl font-normal truncate xs:text-sm sm:text-xl md:text-sm bg-white">
                    {item.name}
                  </p>
                </div>

                {item &&
                  item.variants.map((data) => {
                    return (
                      <>
                        <div className="sm:mt-2 md:mt-[-10px] px-3 bg-white">
                          <p className="text-lime text-lg font-bold xs:text-sm  sm:text-xl md:text-xs bg-white">
                            You save ₹{data.price - data.discounted_price}
                            .00
                          </p>
                          <p className="2xs:text-base xs:text-sm  sm:text-xl md:text-sm text-black font-medium md:mt-1 sm:mt-2 bg-white">
                            ₹{data.discounted_price}.00{" "}
                            <span className="text-xs sm:text-xl xs:text-sm xs:ml-1 md:text-sm text-black line-through bg-white">
                              ₹{data.price}.00{" "}
                            </span>
                          </p>
                          <div className="md:flex xs:flex ">
                            <div>
                              <p className="bg-white 2xs:text-base xs:text-sm xs:mt-4 sm:text-xl md:text-sm  mt-1 font-light">
                                {data.measurement}
                                {data.measurement_unit_name}
                              </p>
                            </div>
                            <div className="mb-3 bg-white">
                              {data.stock > 0 && (
                                <button
                                  className=" text-lime border border-lightgreen bg-transparent 2xs:px-2 2xs:mt-2 2xs:rounded xs:mt-3 xs:w-20 xs:m-6 xs:rounded-lg xs:py-1 md:mt-3 md:w-[65px] md:mx-5 md:h-10 sm:w-28 sm:mt-5 md:font-bold md:py-3 sm:text-lg md:text-sm md:px-4 md:rounded-lg md:hover:opacity-90"
                                  onClick={() => addItemHandler(item)}
                                >
                                  Add
                                </button>
                              )}
                            </div>
                          </div>
                          {item &&
                            item.variants.map((item) =>
                              item.stock > 0 ? null : (
                                <p className="bg-white text-orange my-5 text-sm md:text-xs font-medium sm:text-xl">
                                  Out of stock
                                </p>
                              )
                            )}
                        </div>
                      </>
                    );
                  })}
              </div>
            </>
          );
        })}
    </div>
  );
}

export default Allproducts;
