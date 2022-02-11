import "./App.css";
import React from "react";
import Header, { SecondaryHeader } from "./components/Header";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import products from "./components/Products";
import Cart from "./components/Cart";
import ThankYou from "./components/Thank you";

function App() {
  const [cart, setCart] = React.useState([]);
  const [subtotal, setSubtotal] = React.useState("");

  function calculateTotals() {
    if (cart.length) {
      let sumArray = cart.map((item) => item.quantity * item.price);
      let total = sumArray.reduce((a, b) => a + b);
      setSubtotal((prevValue) => (prevValue = total).toFixed(2));
    }
  }

  function addToCart(e) {
    const { id } = e.target;
    products.map(
      (product) =>
        product.id === id &&
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
    );
  }

  React.useEffect(() => {
    calculateTotals();
  });

  React.useEffect(() => {
    removeItemIfQuantityIsZero();
  },[subtotal])

  function onAdd(e) {
    const { id } = e.target;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function onSubtract(e) {
    const { id } = e.target;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

  function removeFromCart(e) {
    const { id } = e.target;
    let tempArray = [...cart];
    tempArray.splice(id, 1);
    setCart(tempArray);
  }

  function resetCart() {
    setCart((prevCart) => (prevCart = []));
  }

  function removeItemIfQuantityIsZero() {
    if (!cart.length) {
      return;
    } else {
      setCart((prevCart) => prevCart.filter((item) => item.quantity > 0));
    }
  }
  const itemCount = cart.length;
  const shipping = itemCount * 5;

  return (
    <div className="App">
      <BrowserRouter basename="/e-commerce">
        <Header itemNumber={cart.length} />
        <SecondaryHeader />
        <Routes>
          <Route path="shop" element={<Shop onClick={addToCart} />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                onAdd={onAdd}
                onSubtract={onSubtract}
                onRemove={removeFromCart}
                subtotal={subtotal}
                shipping={shipping}
                itemCount={itemCount}
                reset={resetCart}
              />
            }
          ></Route>
          <Route path="thankyou" element={<ThankYou />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
