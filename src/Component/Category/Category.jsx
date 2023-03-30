import { useState } from "react";
import { NavLink } from "react-router-dom";
import { categoryData } from "../../Models/MockCategoryData";

export const Category = ({ data }) => {
  const [categorydata, setCategorydata] = useState(categoryData.data);

  return (
    <>
      <div className="md:-mt-20 flex justify-between">
        <div className="text-lime text-base font-semibold">
          <h1>Shop By Catergoy</h1>
        </div>
        <div className=" text-orange  text-base	font-semibold">
          <h1 className="cursor-pointer">View All</h1>
        </div>
      </div>

      <div className="category xs:mx-2">
      <div className="shop-category grid md:grid-cols-4 gap-4 sm:grid-cols-2 xs:grid-cols-2">
            {categorydata &&
              categorydata.map((item) => {
                return (
                  <div className="md:w-72 rounded-lg border-0 border-gray-600 xs:shadow-md md:shadow-lg xs:py-2 md:py-6 transform transition duration-500 hover:scale-110">
                    <NavLink to={`/subcategory-details/${item.name}`}>
                      <img
                        className="xs:w-40 xs:h-28 md:w-full md:h-56 md:rounded-2xl"
                        src={item.image}
                        alt="item"
                      />
                    </NavLink>
                    <div className="xs:text-center md:py-4 md:text-center ">
                      <p className="md:text-xl">{item.name}</p>
                    </div>
                  </div>
                );
              })}
          </div>

      </div>
    </>
  );
};
