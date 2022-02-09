import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <h1 className="logo">tamzy</h1>
      <nav>
        <a href="" className="nav--item">
          Sell on tamzy
        </a>
        <a href="" className="nav--item">
          Login/Signup
        </a>
        <div className="cart">
          <i className="fas fa-cart-plus"></i>
          <div className="cart--count">{props.itemNumber}</div>
        </div>
      </nav>
    </header>
  );
}


export function SecondaryHeader() {
    return(
        <nav className="secondary-nav">
        <a href="" className="secondary-nav--item">
         <span>&#9781;</span> All categories
        </a>
        <a href="" className="secondary-nav--item">
         Sport wears
        </a>
        <a href="" className="secondary-nav--item">
         Gym equipments
        </a>
        <a href="" className="secondary-nav--item">
         Sport shoes
        </a>
        <a href="" className="secondary-nav--item">
         Sport watches
        </a>
        <a href="" className="secondary-nav--item">
         Sneakers
        </a>
        <a href="" className="secondary-nav--item">
         Trainers
        </a>
    </nav>
    )
}