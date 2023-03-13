import React, { useState } from "react";
import { FaRegHeart, FaAlignLeft, FaArrowsAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { mockProduct } from "../../Models/MockProduct";
import { categoryData } from "../../Models/MockCategoryData";

export const ProductDetails = () => {
  const [productPageData, setProductPage] = useState(mockProduct[0].data);
  
  const [cardData, setCardData] = useState(categoryData.data);

  // console.log(cardData);

  // console.log(productPageData);

  const { id } = useParams();

  const filterData = cardData.filter((data) => {
    return data.id === id;
  });

 

  // console.log(filterData, "filterData");
  
  return (
    <div className="flex mt-10 p-16 justify-between">
      {filterData &&
        filterData.map((items) => {
          console.log(filterData)
          return (
            <>
              <div
                className="flex flex-col bg-white dark:bg-neutral-700"
                key={items.id}
              >
                <img
                  className="ml-20 w-[500px] h-[400px] object-cover"
                  src={items.image}
                  alt=""
                />
                <div className="text-left">
                  <h1 className="font-bold mt-2">Product Details</h1>
                  <h3 className="font-medium">Key Features</h3>
                  <p className="text-gray-600">{items.description}</p>

                  <h2 className="font-medium mt-2">Ingredients</h2>
                  <p className="text-gray-600">
                    tepary Beans Flour (43%), Edible Vegetable Oil, Gram Pulse
                    Flour (12%), Edible <br /> Common Salt Powder, Black Pepper
                    Powder, Ginger Powder, Clove Powder, Mace <br /> Powder,
                    Nutmeg Powder & Cardamom Powder
                  </p>
                  <h2 className="font-medium mt-2">Unit</h2>
                  <span className="text-gray-600">1 Kg</span>
                  <h1 className="font-medium mt-2">HEALTH BENEFITS</h1>
                  <ul className="text-gray-600">
                    <li>
                      Gets Easily digested, hence does no harm to the digestive
                      systme.
                    </li>
                    <li>Maintians Cholestrol systems.</li>
                    <li>Enhance Immunity.</li>
                    <li>A healty alternative to curb mid-meal hunger pang.</li>
                    <li>Regulates satiety hormone.</li>
                  </ul>
                  <h1 className="font-medium mt-2">INGREDIENTS : </h1>
                  <p>Soya flour, corn flour, seasoning</p>
                </div>
              </div>
              <div className="flex flex-col mr-24 al p-6">
                <nav
                  className="flex px-20 py-3 text-gray-700 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                  aria-label="Breadcrumb"
                >
                  <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                      <a
                        href="#"
                        className="inline-flex gap-3 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        <FaRegHeart />
                        Wish List
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <FaArrowsAlt />
                        <a
                          href="#"
                          className="ml-1 gap-3 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                        >
                          Share
                        </a>
                      </div>
                    </li>
                    <li aria-current="page">
                      <div className="flex items-center ">
                        <FaAlignLeft />
                        <span className="ml-1 gap-3 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                          Similar Products
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>

                <h3 className="mb-2 text-3xl text-green-700 font-medium float-left text-left ml-20 dark:text-neutral-50">
                  {items.name}
                </h3>
                <h2 className="text-3xl text-left  ml-20">
                  {items.ratings} <span>0</span>
                </h2>
                <h1 className="text-left  ml-20">
                  You Save <span className="text-green-600 ">#90.00</span>
                </h1>
                <button className="bg-green-700 mt-5 w-24  ml-20 text-white font-bold py-2 px-4 rounded-lg" >
                  Add
                </button>
              </div>
            </>
          );
        })}
    </div>
  );
};
