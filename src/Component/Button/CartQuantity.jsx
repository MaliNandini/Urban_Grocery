import React, { useState } from "react";

function CartQuantity() {
  const [data,setData] = useState(0)

  const decreament =()=>{
    if(data > 0){
      setData(data-1)
    }
  }
  return (
   
      <div class=" rounded-lg bg-lime text-white hover:bg-blue-700 text-black font-bold  px-4 h-[30px]  flex w-20 justify-between">
        <button className="text-lg" onClick={()=>decreament()}>-</button>
        <p className="text-lg">{data}</p>
        <button className="text-lg" onClick={()=>setData(data+1)}>+</button>
      </div>
    
  );
}

export default CartQuantity;
