import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaShoppingCart, FaTrash } from "react-icons/fa";
import CartQuantity from "../Button/CartQuantity";
import Form from "./Form/Form";
import Review from "./Review/Review";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyCart({ addItem, setAddItem, formData, setFormdata }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState();
  const [price, setPrice] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [Payment, setPayment] = useState(false);

  const hideMOdal = () => {
    setShowModal(false);
    setShowForm(false);
  };

  const back = () => {
    if (showForm) {
      setShowForm(false);
    }
  };

  const total = () => {
    let price = 0;
    addItem.map((e) => {
      price += parseFloat(e.variants[0].price) * e.amount;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  const removeItemHandler = (item) => {
    setAddItem((cart) => cart.filter((data) => data.id !== item.id));
    let price = price - item.amount * parseFloat(item.variants[0].price);
    setPrice(price);
  };

  const formHandler = () => {
    setShowForm(true);
    setPayment(true);
  };

  const handlePayment = () => {
    navigate("/payment");
    hideMOdal();
  };


  // const fetchdata = async () => {
  //   console.log("Called>>>>>>>>>>>>>>>>>>>");
  //   const apiDomain = "grocery.intelliatech.com";
  //   const formData = new FormData();
  //   formData.append("accesskey", "90336");
  //   formData.append("add_multiple_items", "1");
  //   formData.append("user_id", "21");
  //   formData.append("product_variant_id", "203");
  //   formData.append("qty", "1");
  //   console.log(formData, "forms>>>>>>>>>>>>>>>>>>>>");
  //   for (var [key, value] of formData.entries()) {
  //     console.log(key, value);
  //   }
  //   //or
  //   console.log(...formData);
  //   const response = await axios.post(
  //     `http://${apiDomain}/api-firebase/cart.php`,
  //     formData,
  //     {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         "Authorization":
  //           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODAyNDYxNzgsImlzcyI6ImVLYXJ0IiwiZXhwIjoxNjgwMjQ3OTc4LCJzdWIiOiJlS2FydCBBdXRoZW50aWNhdGlvbiJ9.zsbDC9LbPKIMKcBXaRD6snL1XkaxWnEpVPcYqGccTfY",
  //       },
  //     }
  //   );
  //   console.log(response, "HERE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  //   // await axios
  //   //   .post(`http://${apiDomain}/api-firebase/cart.php`, {
  //   //     headers: {
  //   //       "Content-Type": "multipart/form-data",
  //   //       Authorization:
  //   //         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzkzMTkwMTUsImlzcyI6ImVLYXJ0IiwiZXhwIjoxNjc5MzIwODE1LCJzdWIiOiJlS2FydCBBdXRoZW50aWNhdGlvbiJ9.UQhiBtWhR30Yk9NyZUX8uGHZF4EsL6R8ai7VTfpAOP0",
  //   //     },
  //   //     data: formData,
  //   //   })
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  // };

  // const fetchdata = async () => {  
  //   console.log("Called>>>>>>>>>>>>>>>>>>>")
  //   setShowModal(true)
  //   const apiDomain = "grocery.intelliatech.com";
  //   let data={
  //     'accesskey': '90336',
  //     'add_multiple_items': '1',
  //     'user_id': '21',
  //     'product_variant_id': '203',
  //     'qty': '1'
  //   }
  //   await axios.post(`http://${apiDomain}/api-firebase/cart.php`, {
  //     headers: {
  //       'Authorization':
  //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzkzMzA1MTEsImlzcyI6ImVLYXJ0IiwiZXhwIjoxNjc5MzMyMzExLCJzdWIiOiJlS2FydCBBdXRoZW50aWNhdGlvbiJ9.Ghn2329HNSjGGwhN-1T81YvnwQnESYHwkq18KXB3XpU",
  //     },
  //    data,
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  
  return (
    <>
      <button
        className=" relative  bg-lime text-white  float-right flex gap-1
        font-bold py-3 rounded shadow xs:my-2 xs:px-2 2xs:my-2 2xs:py-2 2xs:px-1"
        type="button"
        onClick={() => setShowModal(true)}
        
      >
        <div className="relative xs:px-2 2xs:px-2 bg-lime">
          <FaShoppingCart className="xs:text-2xl bg-lime"/>
          {addItem.length >= 1 && (
            <span class="-top-[13px] md:left-5 xs:left-5 2xs:left-4 absolute my-1 w-5 h-5 bg-red border-2 border-white  rounded-full text-white text-sm">
              {addItem.length}
            </span>
          )}
        </div>
        <div className="xs:hidden 2xs:hidden md:block sm:block bg-lime">My Cart</div>
      </button>
      {showModal ? (
        <>
          <div className="float-right absolute top-0 right-0">
            <div className="relative">
              <div className=" min-h-screen md:w-96 sm:w-screen xs:w-screen border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none ">
                <div className="flex items-start justify-between px-3 py-3 m-0  border-b border-light_gray shadow-sm">
                  <div className="mt-3">
                    {showForm ? (
                      <button className="back-button" onClick={back}>
                        <FaArrowLeft />
                      </button>
                    ) : null}
                  </div>

                  <p className="py-2 text-xl font-semibold ">My Cart</p>
                  <button
                    className="bg-transparent text-black float-right"
                    onClick={hideMOdal}
                  >
                    <span className="text-black opacity-6 h-10 w-9 text-2xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>

                <div className="overflow-y-scroll md:h-[500px] xs:h-[758px] sm:h[985px] 2xs:h-[500px]">
                  {!showForm && addItem.length
                    ? addItem &&
                      addItem.map((item) => {
                        return (
                          <>
                            <div class="mt-3  md:p-5 xs:p-4 2xs:p-2 ">
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

                                    <div class="ml-4 flex flex-1 flex-col truncate ...">
                                      <div class="text-sm font-semibold text-gray-900 ">
                                          <p className="float-left truncate ...">
                                            {item.name}
                                          </p>
                                        <br />
                                        {item.variants.map((data) => {
                                          return (
                                            <>
                                              <div className="2xs:flex-col md:flex-col">
                                                <p class="text-sm font-light float-left">
                                                  {data.measurement}{" "}
                                                  {data.measurement_unit_name}
                                                </p>
                                               <br></br>
                                                <p class="text-sm text-gray-500 float-left text-lime">
                                                  ₹{data.price}{" "}
                                                </p>
                                                <br></br>
                                               
                                              </div>
                                            </>
                                          );
                                        })}

                                        <div className="flex justify-between ">
                                          <div>
                                            <p class="text-sm font-light float-left">
                                              {" "}
                                              Qty : {item.amount}
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
                                              className="cursor-pointer mt-1 text-sm text-red"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>

                                {Payment ? (
                                  <button
                                    className="flex justify-between bg-lime text-white  fixed bottom-0 md:w-[350px] xs:w-[350px] sm:w-[750px] 2xs:w-[260px] rounded-lg"
                                    onClick={handlePayment}
                                  >
                                    <p className="p-2 bg-lime rounded-lg">Total : ₹ {price}</p>
                                    <p className="p-2 bg-lime rounded-lg">Process to Payment </p>
                                  </button>
                                ) : (
                                  <button
                                    className="flex justify-between bg-lime text-white  fixed bottom-0 md:w-[350px] xs:w-[350px] sm:w-[750px] 2xs:w-[260px] rounded-lg"
                                    onClick={formHandler}
                                  >
                                    <p className="p-2 bg-lime rounded-lg">Total : ₹ {price}</p>
                                    <p className="p-2 bg-lime rounded-lg">Process to Pay </p>
                                  </button>
                                )}
                              </div>
                            </div>
                          </>
                        );
                      })
                    : null}

                  {!showForm && !addItem.length ? (
                    <div className="relative p-6 flex-auto text-center text-2xl font-medium">
                      <p>Your cart is empty</p>
                    </div>
                  ) : null}

                  {showForm ? (
                    <Form
                      back={back}
                      setFormdata={setFormdata}
                      formData={formData}
                    />
                  ) : null}
                </div>

                {showForm && addItem.length ? null : (
                  <div className="fixed bottom-10 bg-white p-3">
                    <Review formData={formData} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default MyCart;
