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
                  <div className="w-80 rounded-lg mx-5 container shadow-lg bg-lightblue m-5">
                    <NavLink
                      to={`/subcategory-details/${item.category_name}/product-details/${item.id}`}
                    >
                      <img
                        className="w-full h-56"
                        src={item.image}
                        alt={name}
                      />
                    </NavLink>
                    <div className="py-4">
                      <p className="text-lg text-lime font-normal">{item.name}</p>
                    </div>
                    {item &&
                      item.variants.map((data) => {
                        return (
                          <>
                            <div className="xs:text-sm xs:text-left sm:mt-2 md:mt-[-15px]  md:text-left ">
                              <p className="2xs:text-base sm:text-xl md:text-sm text-lime font-semibold">
                                ₹{data.price}{" "}
                              </p>
                            </div>
                            {data.stock > 0 ? <button
                            className=" my-2 mr-8 text-white bg-lime hover:bg-opacity-75 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={() => addItemHandler(item)}
                          >
                            Add to cart
                          </button>:<p className="text-orange text-sm font-medium mt-4 pb-4 mr-[43px]">
                          Out of stock
                        </p>}
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