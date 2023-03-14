import React, { useState } from "react";
import { Card } from "./Card/Card";
import { Navbar } from "./Navbar/Navbar";

function Home({addItem ,data}) {
  // const [data, setData] = useState([]);
  return (
    <div>
      {/* <Navbar setData={setData} addItem={addItem}/> */}
      <Card data={data} />
    </div>
  );
}

export default Home;
