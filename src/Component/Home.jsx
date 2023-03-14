import React from "react";
import { Card } from "./Card/Card";


function Home({data,addItem,setAddItem}) {

  return (
    <div>
      <Card data={data} addItem={addItem} setAddItem={setAddItem}/>
    </div>
  );
}

export default Home;
