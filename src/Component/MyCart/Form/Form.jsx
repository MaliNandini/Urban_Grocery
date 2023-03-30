import React from "react";

function Form({ back, setFormdata, formData }) {
  const formHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormdata({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData !== "") {
      back();
    }   
  };

  return (
    <>
      <form
        className="w-full mt-5 xs:px-9  2xs:w-full 2xs:px-9"
        onSubmit={submitHandler}
      >
        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 md:text-right  md:mb-0 pr-4 font-semibold"
              for="inline-full-name"
            >
              Name:
            </label>
          </div>
          <div className="md:w-7/12">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Enter-name"
              onChange={formHandler}
              value={formData.name}
              required
            />
          </div>
        </div>

        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 md:text-right  md:mb-0 pr-4 font-semibold"
              for="inline-full-name"
            >
              Address:
            </label>
          </div>
          <div className="md:w-7/12">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              name="address"
              placeholder="Enter-address"
              onChange={formHandler}
              value={formData.address}
              required
            />
          </div>
        </div>

        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 md:text-right  md:mb-0 pr-4 font-semibold"
              for="inline-full-name"
            >
              Phone:
            </label>
          </div>
          <div className="md:w-7/12">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              name="phone"
              placeholder="Enter-phone"
              onChange={formHandler}
              value={formData.phone}
              required
            />
          </div>
        </div>

        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 md:text-right  md:mb-0 pr-4 font-semibold"
              for="inline-city"
            >
              City:
            </label>
          </div>
          <div className="md:w-7/12">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              name="city"
              placeholder="Enter-city"
              onChange={formHandler}
              value={formData.city}
              required
            />
          </div>
        </div>

        <div className="md:flex  mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 md:text-right  md:mb-0 pr-4 font-semibold"
              for="inline-full-name"
            >
              Pin-Code:
            </label>
          </div>
          <div className="md:w-7/12">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pin"
              type="pin-num"
              placeholder="pin-code"
              onChange={formHandler}
              name="pin"
              value={formData.pin}
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button className="bg-lime text-white hover:opacity-90 px-4 py-1.5 rounded-lg ">
            Next
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
