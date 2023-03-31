import { Navbar } from "./Component/Header/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { ProductDetails } from "./Component/Product-Details/ProductDetails";
import Home from "./Component/Home";
import { useState } from "react";
import Payment from "./Component/Payment/Payment";
import "./index.css";
import { SubCategory } from "./Component/Sub-Category/SubCategory";
import Search from "./Component/Header/Search/Search";
import FilterData from "./Component/FilterData";
import Allproducts from "./Component/Show-All-Products/Allproducts";

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
  const [showSearchBar,setShowSearchBar] = useState(false);
  const [name, setName] = useState("");

  return (
    <div>
      <Navbar
        setData={setData}
        addItem={addItem}
        setAddItem={setAddItem}
        formData={formData}
        setFormdata={setFormdata}
        setShowSearchBar={setShowSearchBar}
        name={name}
        setName={setName}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home data={data} addItem={addItem} setAddItem={setAddItem} setData={setData} showSearchBar={showSearchBar}/>
          }
        />
        <Route
          path="/subcategory-details/:category_name/product-details/:id"
          element={<ProductDetails setAddItem={setAddItem} addItem={addItem} />}
        />

        <Route
          path="/subcategory-details/:category_name"
          element={<SubCategory setAddItem={setAddItem} addItem={addItem}/>}
        />
        <Route path="/search" element={<FilterData setData={setData} setName={setName} data={data}  name={name} addItem={addItem} setAddItem={setAddItem} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/allproducts" element={<Allproducts name={name} setAddItem={setAddItem} addItem={addItem}/>} />
      </Routes>
    </div>
  );
}

export default App;
