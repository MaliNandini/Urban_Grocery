import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { mockProduct } from "../../Models/MockProduct";

export const SubCategory = ({setAddItem,addItem}) => {
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
    <>
      <div>
        <div className="md:flex md:flex-wrap md:mt-20  ">
          {subcategory &&
            subcategory.map((item) => {
              return (
                <div className="md:w-80 md:m-6 md:rounded-2xl md:shadow cursor-pointer border-1 transform transition-all hover:scale-90 hover:border-light_gray hover:border">
                  <NavLink to={`product-details/${item.id}`}>
                  <img
                    className="xs:w-full xs:h-auto md:w-80 md:h-56 rounded-md"
                    src={item.image}
                    alt="product image"
                  />
                  </NavLink>
                  
                  <div className="md:px-5 md:pb-5 md:my-4">
                    <p className="md:text-xl md:font-light md:tracking-tight">
                      {item.name}
                    </p>
                    {item.variants.map((data) => {
                      return (
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-lime text-lg font-normal">
                              ₹{data.price}{" "}
                            </p>
                            <p className="text-lg font-light">
                              discount : ₹ {data.discounted_price}{" "}
                            </p>
                          </div>

                          <button className="text-white bg-lime hover:bg-opacity-75 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => addItemHandler(item)}>
                            Add to cart
                          </button>
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
