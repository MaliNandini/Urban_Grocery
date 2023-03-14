import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { Form, Route, Routes } from "react-router-dom";
import { ProductDetails } from "./Component/Product-Details/ProductDetails";
import Home from "./Component/Home";
import { useState } from "react";

function App() {
  const [addItem , setAddItem] = useState([])
  const [data, setData] = useState([]);

  const addItemHandler = (item) =>{
    console.log(item,"item ///");
    setAddItem(item);
  }
  console.log(addItem,"addItem")
  return (
    <div className="App">
      <Navbar setData={setData} addItem={addItem}/>
      <Routes>
        <Route path="/" element={<Home addItem={addItem} data={data}/>} />
        <Route path="/product-details/:id" element={<ProductDetails addItemHandler={addItemHandler}/>} />
        <Route path="/mycart" element={<Form/>}/>
        {/* <Route path="/product-details/1" element={<ProductDetails/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
