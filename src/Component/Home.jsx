import React from "react";
import { Card } from "./Card/Card";
import { Category } from "./Category/Category";
import { SubCategory } from "./Sub-Category/SubCategory";


function Home({data,addItem,setAddItem,SubCategory,productDetails}) {

  return (
    <div className="bg-slate-800">
      {/* <Card data={data} addItem={addItem} setAddItem={setAddItem}/> */}
      <Category data={data} SubCategory={SubCategory} productDetails={productDetails} /> 
    </div>
  );
}

export default Home;
