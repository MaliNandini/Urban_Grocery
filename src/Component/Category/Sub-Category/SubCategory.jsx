import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { mockProduct } from "../../../Models/MockProduct";
import DropdownMenu from '../../AccountDropdown/DropdownMenu'

export const SubCategory = ({ setAddItem, addItem,isOpen }) => {
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
        <div className="grid md:grid-cols-5 sm:grid-cols-4 xs:grid-cols-2 2xs:grid-cols-1 mt-20 px-5 gap-4 md:gap-2 ">
          {subcategory &&
            subcategory.map((item) => {
              return (

                <div className="bg-white md:w-52 sm:w-44 mt-5 md:ml-4 rounded-2xl border border-light_gray cursor-pointer transform transition-all hover:scale-105 ">

                  <NavLink to={`product-details/${item.id}`}>
                    <img
                      className="xs:w-32 xs:m-3.5 xs:h-28 md:w-32 md:h-28 md:m-4 md:ml-8 rounded-md bg-white"
                      src={item.image}
                      alt="product"
                    />
                  </NavLink>

                  <div className="sm:-pl-2 xs:pl-2 bg-white mt-2">
                    <p className="xs:text-sm md:text-sm sm:text-xl md:font-light md:tracking-tight bg-white truncate ...">
                      {item.name}
                    </p>
                    {item.variants.map((data) => {
                      return (
                        <div className="flex flex-col bg-white">
                          <div>
                            <p className="text-lime text-lg xs:text-xs md:text-sm font-normal bg-white">
                              ₹{data.price}{" "}
                            </p>
                          </div>
                          <div className="md:flex justify-between xs:flex">
                            <div className="md:mt-4 xs:mt-4">
                              <p className="text-lg xs:text-xs md:text-sm font-light bg-white">
                                discount : ₹ {data.discounted_price}{" "}
                              </p>
                            </div>
                            <div>
                              {data.stock > 0 ? (
                                <button
                                  className="my-2 w-24  xs:w-14 xs:mr-2 xs:text-xs md:w-20 md:mr-2 text-lime border border-lightgreen bg-transparent hover:bg-opacity-75 font-medium rounded-lg text-sm  py-2.5 text-center"
                                  onClick={() => addItemHandler(item)}
                                >
                                  Add
                                </button>
                              ) : (
                                <p className="text-orange text-sm xs:text-xs md:text-xs font-medium mt-4 xs:mr-0.5 md:mr-3 bg-white">
                                  Out of stock
                                </p>
                              )}
                            </div>
                          </div>
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
