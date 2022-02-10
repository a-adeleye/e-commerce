import React from "react";
import products from "./Products";

export default function Shop(props) {
  const productElements = products.map((product) => (
    <div className="product" key={product.id}>
      <img className="product-image" src={product.image} alt="" />
      <h4 className="product-name">{product.name}</h4>
      <p className="product-price">AED{product.price}</p>
      <div className="product-review">{product.rating}</div>
      <button
        className="product-button"
        onClick={props.onClick}
        id={product.id}
      >
        Add to cart
      </button>
    </div>
  ));

  return (
    <section className="shop">
      <p className="shop--title">- - - - &nbsp;&nbsp;Shop all products &nbsp;&nbsp;- - - - -</p>
      <div className="products">{productElements}</div>
    </section>
  );
}
