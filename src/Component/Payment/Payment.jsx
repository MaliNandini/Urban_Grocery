import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Payment() {
  const handleCashOnDelivery = () => {
    // Handle cash on delivery payment method
    console.log("Cash on Delivery");
  };

  const handleRazorpay = () => {
    // Handle Razorpay payment method
    console.log("Razorpay");
  };

  const handleCreditCardSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const cardNumber = formData.get("cardNumber");
    const expiryDate = formData.get("expiryDate");
    const cvv = formData.get("cvv");

    // Handle credit card payment method with the form data
    console.log("Credit Card");
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
  };

  
  return (
    <>
      <div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Payment Method
              </label>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  name="paymentMethod"
                  id="cashOnDelivery"
                  onClick={handleCashOnDelivery}
                />
                <label htmlFor="cashOnDelivery">Cash on Delivery</label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  name="paymentMethod"
                  id="razorpay"
                  onClick={handleRazorpay}
                />
                <label htmlFor="razorpay">Razorpay</label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  name="paymentMethod"
                  id="creditCard"
                />
                <label htmlFor="creditCard">Credit Card</label>
              </div>
            </div>
            <form onSubmit={handleCreditCardSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cardName"
                >
                  Card Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cardName"
                  type="text"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cardNumber"
                >
                  Card Number
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cardNumber"
                  type="text"
                  placeholder="Enter your card number"
                  required
                />
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="expiryDate"
                  >
                    Expiry Date
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    required
                  />
                </div>
              </div>
              <div>
                <NavLink to={`/success`}>
                  <button className="bg-lime w-full rounded-xl p-1">Pay</button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
