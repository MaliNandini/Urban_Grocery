import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Form({ hideMOdal }) {
  const [fromData, setFormdata] = useState({
    city: "",
    state: "",
    pin: "",
  });

  const formHandler = (e) => {
    setFormdata({[e.target.value] : e.target.value});
  };

  const submitHandler = (e) => {
    e.preventDefault();
   alert("done")
    setFormdata({
      city: "",
      state: "",
      pin: "",
    });
  };

  return (
    <>
      <form className="w-full max-w-sm mt-16" onSubmit={submitHandler}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4 font-semibold"
              for="inline-full-name"
            >
              City:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              name="city"
              placeholder="Enter-city"
              onChange={formHandler}
              value={fromData.city}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4 font-semibold"
              for="inline-full-name"
            >
              State :
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={formHandler}
                name="state"
                value={fromData.state}
              >
                <option>Madhya-Pradesh</option>
                <option>Gujrat</option>
                <option>Uttar-Prdesh</option>
                <option>Punjab</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4 font-semibold"
              for="inline-full-name"
            >
              Pin-Code:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pin"
              type="number"
              placeholder="pin-code"
              onChange={formHandler}
              name="pin"
              value={fromData.pin}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <NavLink to={`/payment`}>
              <button
                type="button"
                className="text-white bg-lime hover:opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                onClick={hideMOdal}
              >
                Next
              </button>
            </NavLink>
          </div>
        </div>
      </form>

      {/* <NavLink to={`/payment`}>
  <button onChange={hideMOdal}>next</button>
</NavLink> */}
    </>
  );
}

export default Form;
