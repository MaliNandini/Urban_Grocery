import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Header/Search/Search";

function FilterData({ data, name, setName, setData, setAddItem, addItem }) {
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
    <div className="md:mt-10">
      <div className="md:invisible xs:visible ">
        <Search setName={setName} setData={setData} />
      </div>
      <div className="grid md:grid-cols-5 xs:grid-cols-2 sm:ml-6 sm:grid-col-4 ">
        {/* show singal product on filter  */}
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <>
                <div className="w-80 xs:w-44 xs:mx-1.5 xs:mb-4 md:w-52 md:h-[330px] sm:w-80 rounded-lg sm:my-4 container border border-light_gray bg-white">
                  <NavLink
                    to={`/subcategory-details/${item.category_name}/product-details/${item.id}`}
                  >
                    <img
                      className="w-full rounded-lg h-56 xs:w-32 xs:h-28 xs:mx-6 xs:mt-3 md:w-40 md:h-32 md:mx-5 md:mt-5 sm:w-80 sm:h-56 bg-white"
                      src={item.image}
                      alt={name}
                    />
                  </NavLink>
                  <div className="py-4 px-3 bg-white">
                    <p className="md:text-sm sm:text-2xl xs:text-sm sm:font-semibold truncate ... md:font-normal bg-white">
                      {item.name}
                    </p>
                  </div>

                  {item &&
                    item.variants.map((data) => {
                      return (
                        <>
                          <div className=" xs:text-left sm:mt-2 xs:-mt-3 sm:mb-5 md:mt-[-10px] px-3 bg-white">
                            <p className="text-lime text-lg xs:text-sm font-bold sm:text-3xl md:text-sm bg-white">
                              You save ₹{data.price - data.discounted_price}
                              .00
                            </p>
                            <p className="2xs:text-base sm:text-2xl md:text-base text-black font-medium md:mt-1 sm:mt-2 bg-white">
                              ₹{data.discounted_price}.00{" "}
                              <span className="xs:text-xs sm:text-xl md:text-sm text-black line-through bg-white">
                                ₹{data.price}.00{" "}
                              </span>
                            </p>
                            <div className="xs:flex  xs:justify-between md:flex md:justify-between">
                              <div className="md:mt-5 xs:mt-3">
                                <p className="2xs:text-base xs:text-sm  sm:text-2xl md:text-sm  mt-1 font-light bg-white">
                                  {data.measurement}{" "}
                                  {data.measurement_unit_name}
                                </p>
                              </div>

                              <div className="mb-3 xs:pb-5 bg-white">
                                {data.stock > 0 && (
                                  <button
                                    className="text-lime border border-lightgreen bg-transparent 2xs:px-2 2xs:mt-2 2xs:rounded xs:w-16 xs:rounded-lg xs:py-1 md:mt-3 md:w-24 sm:w-28 sm:mt-5 md:font-bold md:py-3 sm:text-lg md:text-sm md:px-4 md:rounded-lg md:hover:opacity-90"
                                    onClick={() => addItemHandler(item)}
                                  >
                                    Add
                                  </button>
                                )}
                                {item &&
                                  item.variants.map((item) =>
                                    item.stock > 0 ? null : (
                                      <p className="text-orange text-sm md:text-sm  md:mt-5 font-medium sm:mt-4 sm:text-2xl bg-white">
                                        Out of stock
                                      </p>
                                    )
                                  )}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </>
            );
          })
        ) : (
          <div className="text-center justify-center xs:w-[375px] md:w-[1220px] sm:w-[750px]">
            <p className="xs:text-xl md:text-2xl">No results found.</p>
            <p className="xs:text-sm md:text-md">Please Check the spelling or try a differnet word</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterData;
