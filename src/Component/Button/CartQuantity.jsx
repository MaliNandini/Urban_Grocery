import React from "react";

function CartQuantity({ item, setAddItem, addItem }) {
  const quantityDecrease = () => {
    if (addItem.some((cartItem) => cartItem.id === item.id)) {
      setAddItem((cart) =>
        cart.map((data) =>
          data.id === item.id && data.amount !== 1
            ? {
                ...data,
                amount: data.amount - 1,
              }
            : data
        )
      );
      return;
    }
  };

  const quantityIncrease = () => {
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
  };

  return (
    <div class=" rounded-lg bg-lime text-white hover:bg-blue-700 text-black font-bold px-4 h-[30px] flex w-20 justify-between">
      <button className="text-lg" onClick={() => quantityDecrease()}>
        -
      </button>
      <p className="text-lg">{item.amount}</p>
      <button className="text-lg" onClick={() => quantityIncrease()}>
        +
      </button>
    </div>
  );
}

export default CartQuantity;
