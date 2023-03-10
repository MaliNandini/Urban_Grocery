import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { ProductDetails } from "./Component/Product-Details/ProductDetails";
import Home from "./Component/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        {/* <Route path="/product-details/1" element={<ProductDetails/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
