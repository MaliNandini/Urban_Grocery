import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import CartQuantity from "./Button/CartQuantity";
import { NavLink } from "react-router-dom";
import Form from "./Form/Form";

function MyCart({ addItem, setAddItem }) {
  console.log(addItem, ">>>>>");
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState();
  const [price, setPrice] = useState(0);
  const [showForm , setShowForm] = useState(false);

  const total = () => {
    let price = 0;
    addItem.variants &&
      addItem.variants.map((e) => {
        price = e.price * amount + price;
      });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  const removeItemHandler = (item) => {
    setAddItem((cart) => cart.filter((data) => data.id !== item.id));
  };

  const formHandler = () => {
    setShowForm(true);
    console.log("hello");
  };

  return (
    <>
      <button
        className=" relative bg-lime text-white active:bg-blue-500 float-right flex gap-2
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FaShoppingCart />
        My Cart
      </button>
      {showModal ? (
        <>
          <div className="  float-right absolute top-0 right-0 ">
            <div className="relative">
              <div className=" min-h-screen w-[400px] border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none ">
                <div className="flex items-start justify-between p-5 m-0">
                  <p className="py-2 text-xl font-bold">My Cart</p>
                  <button
                    className="bg-transparent text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-6 h-10 w-9 text-3xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>

                {addItem.length ? (
                  addItem &&
                  addItem.map((item) => {
                    return (
                      <>
                        <div class="mt-3 p-5 " >
                          <div class="flow-root">
                            <ul
                              role="list"
                              class="-my-6 divide-y divide-gray-200"
                            >
                              <li class="flex py-6">
                                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.image}
                                    alt="product"
                                    class="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div class="ml-4 flex flex-1 flex-col">
                                  <div class="  text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#" className="float-left">
                                        {item.name}
                                      </a>
                                    </h3>
                                    <br />
                                    {item.variants.map((data) => {
                                      return (
                                        <>
                                          <p class="text-sm text-gray-500 float-left">
                                            {data.measurement}{" "}
                                            {data.measurement_unit_name}
                                          </p>
                                          <br></br>
                                          <p class="text-sm text-gray-500 float-left">
                                            Price ₹{data.price}
                                          </p>{" "}
                                          <br />
                                        </>
                                      );
                                    })}

                                    <div className="flex justify-between">
                                      <div>
                                        <p class="text-sm text-gray-500 float-left">
                                          {" "}
                                          Qty {item.amount}
                                          {() => setAmount(item.amount)}
                                        </p>
                                      </div>

                                      <div>
                                        <CartQuantity
                                          item={item}
                                          setAddItem={setAddItem}
                                          addItem={addItem}
                                        />
                                      </div>
                                      <div>
                                        <FaTrash
                                          onClick={() =>
                                            removeItemHandler(item)
                                          }
                                          className="cursor-pointer text-xl "
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <button
                              className=" flex justify-between bg-lime text-white ml-3 p-2 fixed bottom-0 w-[380px] rounded-lg"
                              onClick={formHandler}
                            >
                              <p className="p-2">Total : ₹ {price}</p>
                              <p className="p-2">Process to Pay </p>
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <div className="relative p-6 flex-auto">
                    <p>your cart is empty</p>
                  </div>
                )}

                {showForm ? <Form/> : null}

              </div>
            </div>
          </div>
        </>
      ) : null}
     
    </>
  );
}

export default MyCart;
