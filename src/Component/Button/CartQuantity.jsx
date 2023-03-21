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
    <div class=" rounded-lg bg-lime text-white gap-1 hover:bg-blue-700  font-bold px-2 h-[28px] flex  justify-between ">
      <button className="text-lg" onClick={() => quantityDecrease()}>
        -
      </button>
      <p className="text-sm mt-1">{item.amount}</p>
      <button className="text-lg" onClick={() => quantityIncrease()}>
        +
      </button>
    </div>
  );
}

export default CartQuantity;
