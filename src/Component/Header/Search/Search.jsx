import React, { useState } from "react";
import { mockProduct } from "../../../Models/MockProduct";

const Search = ({ setData }) => {

  const [name, setName] = useState("");
  const [searchData, setSearchData] = useState(mockProduct.data);
  const handleChange = (e) => {
    const filteredData = e.target.value;
    setName(filteredData);
    let result;
    result = searchData.filter((item) => {
      return item.name.toLowerCase().startsWith(filteredData.toLowerCase());
    });
    setData(result);
  };

  return (
    <div className="container w-full max-w-screen-2xl">
      <div className="inline-flex justify-center relative text-black-500 ">
        <div className="relative my-3">
          <input
            type="text"
            className="input p-2 pl-10 text-sm w-96 h-12 font-light rounded-2xl border border-gray-300 focus:bg-white focus:outline-none focus:ring-1 focus:border-transparent"
            placeholder="Search by Product Name"
            onChange={handleChange}
            value={name}
          />
          <svg
            className="w-6 h-6 absolute left-2.5 top-3.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#15803d"
          >
            <path
              stroke-line-cap="round"
              stroke-line-join="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Search;
