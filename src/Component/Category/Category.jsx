import { useState } from "react";
import { NavLink } from "react-router-dom";
import { categoryData } from "../../Models/MockCategoryData";

export const Category = () => {
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

      <div className=" grid md:grid-cols-4 gap-4 sm:grid-cols-2 xs:grid-cols-2  md:py-3 ">
            {categorydata &&
              categorydata.map((item) => {
                return (
                  <div className="md:w-64 rounded-lg border-0 border-gray-600 xs:shadow-md md:shadow-lg xs:py-2 transform transition duration-500 hover:scale-110 bg-white">
                    <NavLink to={`/subcategory-details/${item.name}`}>
                      <img
                        className="xs:w-40 xs:h-28 sm:w-96 sm:h-56 md:w-full md:h-56 md:rounded-2xl xs:rounded-lg bg-white sm:rounded-lg"
                        src={item.image}
                        alt="item"
                      />
                    </NavLink>
                    <div className="xs:text-center md:py-4 md:text-center bg-white ">
                      <p className="md:text-xl sm:text-3xl sm:py-2 bg-white">{item.name}</p>
                    </div>
                  </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
