import "./App.css";
import React from "react";
import Header, { SecondaryHeader } from "./components/Header";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import products from "./components/Products";

function App() {
  const [cart, setCart] = React.useState([]);

  function addToCart(e) {
    const { id } = e.target;
    products.map(
      (product) =>
        product.id === id && setCart((prevCart) => [...prevCart, product])
    );
  }
console.log(cart)

  return (
    <div className="App">
      <BrowserRouter>
        <Header itemNumber={cart.length} />
        <SecondaryHeader />
        <Routes>
          <Route path="/shop" element={<Shop onClick={addToCart} />}></Route>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
