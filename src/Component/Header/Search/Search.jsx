import React, { useState } from "react";
import { mockProduct } from "../../../Models/MockProduct";
import { NavLink, useNavigate } from "react-router-dom";


const Search = ({ setData, data, name, setName, setAddItem, addItem }) => {
  const [searchData, setSearchData] = useState(mockProduct.data);
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate("/search");
    const filteredData = e.target.value;
    setName(filteredData);
    let result;
    result = searchData.filter((item) => {
      return item.name.toLowerCase().startsWith(filteredData.toLowerCase());
    });
    setData(result);
    // setSearchData("")
  };


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
    <div className="w-full max-w-screen-2xl bg-white md:h-[69px]">
    <div className="inline-flex justify-center relative text-black-500 bg-white xs:my-4 xs:mx-4 md:my-3 xs:mt-20">
        <input
          type="text"
          className=" bg-white input xs:w-[330px] xs:overflow-x-hidden xs:h-auto p-2 pl-10 text-sm md:w-96 md:h-12 font-light rounded-2xl border border-light_gray focus:bg-white focus:outline-none focus:ring-1 focus:border-transparent"
          placeholder="Search by Product Name"
          onChange={handleChange}
          value={name}
        />

        <svg
          className="xs:w-6 xs:h-5 xs:text-white md:w-6 md:h-6 absolute xs:left-2 xs:top-2.5 md:left-2.5 md:top-3.5 bg-white"
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
              <div className="w-80 rounded-lg md:mt-[-285px] xs:mt-16 mx-5 container shadow-lg bg-lightblue md:hidden xs:visible">
                <NavLink
                  to={`/subcategory-details/${item.category_name}/product-details/${item.id}`}
                >
                  <img className="w-full h-56" src={item.image} alt={name} />
                </NavLink>
                <div className="py-4">
                  <p className="text-xl font-normal">{item.name}</p>
                </div>
                {item &&
                  item.variants.map((data) => {
                    return (
                      <>
                        <div className="xs:text-sm xs:text-left sm:mt-2 md:mt-[-12px] ">
                          <p className="2xs:text-base sm:text-xl md:text-sm text-lime font-semibold mt-1">
                            ₹{data.price}{" "}
                          </p>
                          <h1 className="2xs:text-base sm:text-xl md:text-sm mt-1 font-light">
                            {data.measurement} {data.measurement_unit_name}
                          </h1>
                          <h1 className="2xs:text-base sm:text-xl md:text-sm mt-1 font-light">
                            discount : ₹ {data.discounted_price}{" "}
                          </h1>
                        </div>
                      </>
                    );
                  })}
                <button
                  className="my-2 mr-8 text-white bg-lime hover:bg-opacity-75 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => addItemHandler(item)}
                >
                  Add to cart
                </button>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Search;
