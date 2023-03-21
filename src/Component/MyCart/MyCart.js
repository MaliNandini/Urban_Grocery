import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaShoppingCart, FaTrash } from "react-icons/fa";
import CartQuantity from "../Button/CartQuantity";
import Form from "./Form/Form";
import Review from "./Review/Review";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function MyCart({ addItem, setAddItem, formData, setFormdata }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState();
  const [price, setPrice] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [handelPaymentButton, setHandelPaymentButoon] = useState(false);


 
  const fetchdata = async () => {
    const apiDomain = "grocery.intelliatech.com";
    await axios.post(`http://${apiDomain}/api-firebase/cart.php`, { 
      
      headers: {
        "access-control-allow-origin" : "*",
        'Content-Type' : 'multipart/form-data; boundary=<calculated when request is sent>',  
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzkzNzU3MjcsImlzcyI6ImVLYXJ0IiwiZXhwIjoxNjc5Mzc3NTI3LCJzdWIiOiJlS2FydCBBdXRoZW50aWNhdGlvbiJ9.UWoBQ3MMtJyV0zv8s4s0_fjnCRNxPH4HzW_fvZUqnDA",
      },
      body: {
        accesskey: "90336",
        add_multiple_items: "1",
        user_id: "21",
        product_variant_id: "883,881,877",
        qty: "1,2,1",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    setHandelPaymentButoon(true)
  };
  
  const handlePayment = ()=>{
    navigate('/payment')
    hideMOdal();
  }

  return (
    <>
      <button
        className=" relative  bg-lime text-white  float-right flex gap-2
        font-bold  py-3 rounded shadow xs:my-2 xs:px-2 2xs:my-2 2xs:py-2 2xs:px-1"
        type="button"
         onClick={() => setShowModal(true)}
     
      >
        <div className="mt-1 text-xl relative">
          <FaShoppingCart />
          {addItem.length >= 1 && (
            <span class="-top-[13px] left-3 absolute my-1 w-6 h-6 bg-red border-2 border-white  rounded-full text-white text-sm">
              {addItem.length}
            </span>
          )}
        </div>
        <div className="ml-2">My Cart</div>
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

                  <p className="py-2 text-xl font-bold ">My Cart</p>
                  <button
                    className="bg-transparent text-black float-right"
                    onClick={hideMOdal}
                  >
                    <span className="text-black opacity-6 h-10 w-9 text-3xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>

                <div className="overflow-y-scroll md:h-[415px] xs:h-[758px]">
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

                                    <div class="ml-4 flex flex-1 flex-col">
                                      <div class="text-base font-medium text-gray-900">
                                        <h3>
                                          <a href="#" className="float-left">
                                            {item.name}
                                          </a>
                                        </h3>
                                        <br />
                                        {item.variants.map((data) => {
                                          return (
                                            <>
                                              <div className="2xs:flex-col ">
                                                <p class="text-sm text-gray-500 float-left">
                                                  {data.measurement}
                                                  {data.measurement_unit_name}
                                                </p>
                                                <br></br>
                                                <p class="text-sm text-gray-500 float-left">
                                                  Price ₹{data.price}
                                                </p>{" "}
                                                <br />
                                              </div>
                                            </>
                                          );
                                        })}

                                        <div className="flex justify-between ">
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

                               {
                                handelPaymentButton ? 
                                
                                <button
                                  className=" flex justify-between bg-lime text-white  fixed bottom-0 md:w-[350px] xs:w-[350px] sm:w-[750px] 2xs:w-[260px] rounded-lg"
                                  onClick={handlePayment}
                                >
                                  <p className="p-2 ">Total : ₹ {price}</p>
                                  <p className="p-2">Process to Payment </p>
                                </button>

                                : 
                                <button
                                className=" flex justify-between bg-lime text-white  fixed bottom-0 md:w-[350px] xs:w-[350px] sm:w-[750px] 2xs:w-[260px] rounded-lg"
                                onClick={formHandler}
                              >
                                <p className="p-2 ">Total : ₹ {price}</p>
                                <p className="p-2">Process to Pay </p>
                              </button>
                               }
                              </div>
                            </div>
                          </>
                        );
                      })
                    : null}

                  {!showForm && !addItem.length ? (
                    <div className="relative p-6 flex-auto text-center text-2xl font-medium">
                      <p>your cart is empty</p>
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

                {showForm ? null : (
                  <div className="fixed bottom-10 bg-white">
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
