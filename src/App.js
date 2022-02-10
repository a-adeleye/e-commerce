import "./App.css";
import React from 'react'
import Header, { SecondaryHeader } from "./components/Header";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [cart, setCart] = React.useState({name: "", price: "", image: ""});

  function addToCart(e) {
       console.log(e.target);
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Header itemNumber="16" />
        <SecondaryHeader />
        <Routes>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
