import { Navbar } from "./Component/Header/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { ProductDetails } from "./Component/Product-Details/ProductDetails";
import Home from "./Component/Home";
import { useState } from "react";
import Payment from "./Component/Payment/Payment";
import './index.css';


function App() {
  const [addItem, setAddItem] = useState([]);
  const [data, setData] = useState([]);
  const [formData, setFormdata] = useState({
    username: "",
    address: "",
    city: "",
    phone: "",
    pin: "",
  });
 
  return (
    <div>
      <Navbar setData={setData} addItem={addItem} setAddItem={setAddItem} formData={formData} setFormdata={setFormdata}/>
      <Routes>
        <Route path="/" element={<Home data={data}  addItem={addItem} setAddItem={setAddItem}/>} />
        <Route path="/product-details/:id" element={<ProductDetails setAddItem={setAddItem} addItem={addItem}/>} />
        <Route path="/payment" element={<Payment/>} />    
      </Routes>
    </div>
  );
}

export default App;
