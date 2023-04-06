import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { mockProduct } from '../../Models/MockProduct';

function Allproducts({name,addItem,setAddItem}) {
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
    <div className='mt-20 flex flex-wrap md:mx-6'>
        {allproduct &&
          allproduct.map((item) => {
            return (
              <>
                <div className="w-80 rounded-lg mx-5 my-4 container shadow-lg bg-lightblue">
                  <NavLink
                    to={`/subcategory-details/${item.category_name}/product-details/${item.id}`}
                  >
                    <img className="w-full h-56" src={item.image} alt={name} />
                  </NavLink>
                  <div className="py-4">
                    <h2 className="text-xl font-normal truncate">{item.name}</h2>
                  </div>

                  {item &&
                    item.variants.map((data) => {
                      return (
                        <>
                          <div className="xs:text-sm xs:text-left sm:mt-2 md:mt-[-10px]">
                            <p className="text-lime text-lg font-bold sm:text-3xl md:text-lg">
                              You save ₹{data.price - data.discounted_price}
                              .00
                            </p>
                            <p className="2xs:text-base  sm:text-2xl md:text-base text-black font-medium md:mt-1 sm:mt-2">
                              ₹{data.discounted_price}.00{" "}
                              <span className="text-xs sm:text-xl md:text-sm text-black line-through">
                                ₹{data.price}.00{" "}
                              </span>
                            </p>
                            <p className="2xs:text-base  sm:text-2xl md:text-sm  mt-1 font-light">
                              {data.measurement} {data.measurement_unit_name}
                            </p>
                            <div className="mb-3">
                              {data.stock > 0 && (
                                <button
                                  className="bg-lime 2xs:px-2 2xs:mt-2 2xs:rounded xs:mt-3 xs:w-24 xs:rounded-lg xs:py-1 md:mt-3 md:w-[118px] sm:w-[130px] sm:mt-5  text-white md:font-bold md:py-3 sm:text-lg md:text-sm md:px-4 md:rounded-lg md:hover:opacity-90"
                                  onClick={() => addItemHandler(item)}
                                >
                                  Add to cart
                                </button>
                              )}
                              {item &&
                                item.variants.map((item) =>
                                  item.stock > 0 ? null : (
                                    <p className="text-orange my-5 text-sm md:text-lg font-medium sm:text-2xl">
                                      Out of stock
                                    </p>
                                  )
                                )}
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </>
            );
          })}
    </div>
  )
}

export default Allproducts