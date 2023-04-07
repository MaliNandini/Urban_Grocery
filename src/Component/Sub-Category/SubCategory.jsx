import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { mockProduct } from "../../Models/MockProduct";

export const SubCategory = ({ setAddItem, addItem }) => {
  const [allproducts, setAllProducts] = useState(mockProduct.data);
  const [subcategory, setSubcategory] = useState([]);

  const category_name = useParams();

  const getCategoryData = (catName) => {
    let itemCatgry = allproducts.filter((items) => {
      return items.category_name === catName.category_name;
    });
    setSubcategory(itemCatgry);
  };
  
  useEffect(() => {
    getCategoryData(category_name);
  }, []);

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
      <div>
        <div className="grid md:grid-cols-6 sm:grid-cols-4 xs:grid-cols-2 2xs:grid-cols-1 mt-20 px-5 gap-4">
          {subcategory &&
            subcategory.map((item) => {
              return (
                <div className="md:w-56 sm:w-44 mt-5 rounded-2xl shadow cursor-pointer transform transition-all hover:scale-105 ">
                  <NavLink to={`product-details/${item.id}`}>
                    <img
                      className="xs:w-full xs:h-auto md:w-80 md:h-56 rounded-md"
                      src={item.image}
                      alt="product"
                    />
                  </NavLink>

                  <div className="md:px-5 md:pb-5 md:my-4 sm:-pl-2 xs:pl-2">
                    <p className="md:text-xl md:font-light md:tracking-tight truncate ...">
                      {item.name}
                    </p>
                    {item.variants.map((data) => {
                      return (
                        <div className="flex flex-col  items-center justify-between float-left">
                          <div>
                            <p className="text-lime text-lg font-normal">
                              ₹{data.price}{" "}
                            </p>
                            <p className="text-lg font-light">
                              discount : ₹ {data.discounted_price}{" "}
                            </p>
                          </div>
                          {data.stock > 0 ? <button
                            className=" my-2 mr-8 text-white bg-lime hover:bg-opacity-75 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={() => addItemHandler(item)}
                          >
                            Add to cart
                          </button>:<p className="text-orange text-sm font-medium mt-4 mr-[43px]">
                          Out of stock
                        </p>}              
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
