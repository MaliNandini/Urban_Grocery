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

      <div className="category xs:mx-1 xs:mt-3 md:mt-5 xs:ml-6">
      <div className=" grid md:grid-cols-4 sm:grid-cols-4 gap-4  xs:grid-cols-2 md:py-3 ">
            {categorydata &&
              categorydata.map((item) => {
                return (

                  <div className="md:w-56 md:ml-2  rounded-xl border border-light_gray  hover:border-light_green  xs:py-2 bg-white">

                    <NavLink to={`/subcategory-details/${item.name}`}>
                      <img
                        className="xs:w-32 xs:h-28 xs:ml-2.5 sm:w-36 sm:h-32 md:w-44 md:h-36 md:ml-6 md:mt-2  md:rounded-2xl xs:rounded-lg bg-white sm:rounded-lg"
                        src={item.image}
                        alt="item"
                      />
                    </NavLink>
                    <div className="xs:text-center md:text-center bg-white ">
                      <p className="md:text-sm sm:text-md md:ml-4 sm:py-2 bg-white">{item.name}</p>
                    </div>
                  </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
