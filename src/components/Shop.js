import React from "react";
import products from "./Products";

export default function Shop() {

   

  const productElements = products.map((product) => (
    <div className="product" key={product.id}>
      <img className="product-image" src={product.image} alt="" />
      <h4 className="product-name">{product.name}</h4>
      <p className="product-price">{product.price}</p>
      <div className="product-review">{product.rating}</div>
      <button className="product-button">Add to cart</button>
    </div>
  ));

  return (
    <section className="shop">
      <div className="products">{productElements}</div>
    </section>
  );
}
