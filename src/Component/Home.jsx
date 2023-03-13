import React from "react";
import { Card } from "./Card/Card";


function Home({data}) {

  return (
    <div>
      <Card data={data} />
    </div>
  );
}

export default Home;
