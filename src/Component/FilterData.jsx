import React from "react";
import { NavLink } from "react-router-dom";

function FilterData({ data, name, setAddItem, addItem }) {
  
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
    <div className="mt-20 mx-28">
      <div className="flex flex-row flex-wrap lg:ml-24 ">
        {/* show singal product on filter  */}
        {data &&
          data.map((item) => {
            return (
              <>
                <div className="w-80 rounded-lg mx-5 container shadow-lg bg-lightblue">
                  <NavLink
                    to={`/subcategory-details/${item.category_name}/product-details/${item.id}`}
                  >
                    <img className="w-full h-56" src={item.image} alt={name} />
                  </NavLink>
                  <div className="py-4">
                    <h2 className="text-xl font-normal">{item.name}</h2>
                  </div>
                  {item &&
                    item.variants.map((data) => {
                      return (
                        <>
                          <div className="xs:text-sm xs:text-left sm:mt-2 md:mt-[-12px] ">
                            <p className="2xs:text-base sm:text-xl md:text-sm text-lime font-semibold mt-1">
                              ₹{data.price}{" "}
                            </p>
                            <h1 className="2xs:text-base sm:text-xl md:text-sm mt-1 font-light">
                              {data.measurement} {data.measurement_unit_name}
                            </h1>
                            <h1 className="2xs:text-base sm:text-xl md:text-sm mt-1 font-light">
                              discount : ₹ {data.discounted_price}{" "}
                            </h1>
                          </div>
                        </>
                      );
                    })}
              
                    <button
                      className="my-2 mr-8 text-white bg-lime hover:bg-opacity-75 font-medium rounded-lg text-sm px-5 py-2.5"
                      onClick={() => addItemHandler(item)}
                    >
                      Add to cart
                    </button>
        
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default FilterData;
