import React, { useState } from "react";
import { mockProduct } from "../../../Models/MockProduct";
import { NavLink, useNavigate } from "react-router-dom";

const Search = ({ setData, data,name,setName }) => {
 
  const [searchData, setSearchData] = useState(mockProduct.data);
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate("/search")
    const filteredData = e.target.value;
    setName(filteredData);
    let result;
      result = searchData.filter((item) => {
        return item.name.toLowerCase().startsWith(filteredData.toLowerCase());
      });
      setData(result);
    
  };
 
 
  return (
    <div className="w-full max-w-screen-2xl">
      <div className=" relative xs:my-4 xs:mx-4 md:my-3 xs:mt-20">
        <input
          type="text"
          className="input xs:w-[330px] xs:overflow-x-hidden xs:h-auto p-2 pl-10 text-sm md:w-96 md:h-12 font-light rounded-2xl border border-light_gray focus:bg-white focus:outline-none focus:ring-1 focus:border-transparent"
          placeholder="Search by Product Name"
          onChange={handleChange}
          value={name}
        />

        <svg
          className="xs:w-6 xs:h-5 xs:text-white  md:w-6 md:h-6 absolute xs:left-2 xs:top-2.5 md:left-2.5 md:top-3.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#15803d"
        >
          <path
            stroke-line-cap="round"
            stroke-line-join="round"
            strokeWidth="1"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {data &&
        data.map((item) => {
          return (
            <>
              <div className="w-80 rounded-lg md:mt-[-285px] xs:mt-16 mx-5 container shadow-lg bg-lightblue md:invisible xs:visible">
                <NavLink
                  to={`/subcategory-details/${item.category_name}/product-details/${item.id}`}
                >
                  <img className="w-full h-56" src={item.image} alt={name} />
                </NavLink>
                <div className=" py-4 text-center">
                  <h2 className="text-xl font-normal">{item.name}</h2>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Search;
