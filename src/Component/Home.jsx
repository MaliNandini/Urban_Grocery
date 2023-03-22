import React from "react";
import { Card } from "./Card/Card";


function Home({data,addItem,setAddItem}) {

  return (
    <div className="bg-slate-800">
      <Card data={data} addItem={addItem} setAddItem={setAddItem}/>
    </div>
  );
}

export default Home;
