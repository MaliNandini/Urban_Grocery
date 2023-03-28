import { useState } from "react";
import { NavLink } from "react-router-dom";
import { categoryData } from "../../Models/MockCategoryData";

export const Category = () => {
  const [categorydata, setCategorydata] = useState(categoryData.data);

  return (
    <>
      <div className="mt-28 flex justify-between">
        <div className="text-lime md:ml-10 md:text-base md:font-semibold">
          <h1>Shop By Catergoy</h1>
        </div>
        <div className=" text-orange mr-10 md:text-base	md:font-semibold">
          <h1 className="cursor-pointer">View All</h1>
        </div>
      </div>

      <div className="category ">
        <div className="shop-category md:flex md:ml-24 ">
          {categorydata && categorydata.length > 0 ? (
            categorydata.map((item) => {
              return (
                <div className="w-80 2xs:w-72 rounded-2xl mt-10 mx-5 border-0 border-gray-600 px-4 py-6 transform transition duration-500 hover:scale-110">
                  <NavLink to={`/subcategory-details/${item.name}`}>
                    <img className="w-full h-56 rounded-2xl" src={item.image} />
                  </NavLink>
                  <div className=" py-4 text-center leading-relaxed">
                    <p className="text-xl font-normal">{item.name}</p>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="flex items-center justify-center text-center w-full">
              <h1>No Results Found!</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
