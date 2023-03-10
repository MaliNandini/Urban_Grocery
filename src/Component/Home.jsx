import React, { useState } from "react";
import { Card } from "./Card/Card";
import { Navbar } from "./Navbar/Navbar";

function Home() {
  const [data, setData] = useState([]);
  return (
    <div>
      <Navbar setData={setData}/>
         <Card  data={data} />

      
    </div>
  );
}

export default Home;
