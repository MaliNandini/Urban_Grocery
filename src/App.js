import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { ProductDetails } from "./Component/Product-Details/ProductDetails";
import Home from "./Component/Home";
import { useState } from "react";
import Form from "./Component/Form/Form";

function App() {
  const [addItem, setAddItem] = useState([]);
  const [data, setData] = useState([]);
 
  return (
    <div className="App">
      <Navbar setData={setData} addItem={addItem}  setAddItem={setAddItem}/>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/product-details/:id" element={<ProductDetails setAddItem={setAddItem} addItem={addItem}/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
