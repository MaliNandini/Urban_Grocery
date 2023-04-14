import React from "react";

function CartQuantity({ item, setAddItem, addItem }) {
 
  const quantityDecrease = () => {
    if (addItem.some((cartItem) => cartItem.id === item.id)){
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
    <div class=" rounded-lg bg-lime text-white gap-1 hover:bg-blue-700  font-bold px-2 md:h-[28px]  xs:h-[28px]  sm:h-[40px] sm:w-[100px] md:w-16 xs:w-16 flex  justify-between ">
      <button className="md:text-lg xs:text-lg sm:text-4xl" onClick={() => quantityDecrease()}>
        -
      </button>
      <p className="md:text-sm xs:text-sm sm:text-2xl mt-1 bg-lime">{item.amount}</p>
      <button className="md:text-lg xs:text-lg sm:text-3xl" onClick={() => quantityIncrease()}>
        +
      </button>
    </div>
  );
}

export default CartQuantity;
