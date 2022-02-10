import React from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Cart(props) {
  const items = props.cart.map((item, index) => {
    return (
      <div className="cart-item" key={nanoid()}>
        <div className="cart-product-image">
          <img src={item.image} alt="" />
        </div>
        <div className="cart-product-details">
          <h4 className="product-name">{item.name}</h4>
          <p className="delivery-details">Delivery between Feb 13 - Feb 14</p>
          <p className="return-policy">
            This item cannot be exchanged or returned.
          </p>
          <p className="remove-item" id={index} onClick={props.onRemove}>
            <i className="fas fa-trash-alt"></i> Remove
          </p>
        </div>
        <div className="product-quantity">
          <p className="amount">
            AED{" "}
            <span className="large-text">
              {" "}
              {(item.price * item.quantity).toFixed(2)}{" "}
            </span>
          </p>
          <div className="quantity-change">
            <i
              id={item.id}
              className="fas fa-minus-circle"
              onClick={props.onSubtract}
            ></i>
            <p>{item.quantity}</p>
            <i
              id={item.id}
              className="fas fa-plus-circle"
              onClick={props.onAdd}
            ></i>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="cart-page">
      <div className="cart-items">
        {props.cart.length < 1 ? (
          <div>
            <h2>Your cart is empty</h2>
            <Link to="/shop">
              <button className="checkout-button">
                {" "}
                &larr; Continue shopping
              </button>
            </Link>
          </div>
        ) : (
          items
        )}
      </div>
      <div className="checkout">
        <div className="coupon">
          <input
            type="search"
            name="search"
            placeholder="Coupon code / gift card"
          ></input>
          <button className="coupon--button">APPLY</button>
        </div>
        <div className="subtotal">
          <p>Subtotal ({props.itemCount})</p>
          <p className="subtotal-amount" style={{ justifySelf: "flex-end" }}>
            AED {props.subtotal}
          </p>
          <p className="shipping">Shipping</p>
          <p className="shipping-amount" style={{ justifySelf: "flex-end" }}>
            AED {props.shipping}
          </p>
        </div>
        <div className="total">
          <p>Total</p>
          <p>AED {props.subtotal ? (parseInt(props.subtotal) + parseInt(props.shipping)).toFixed(2) : ""}</p>
        </div>

        <Link to="/thankyou">
          <button className="checkout-button" onClick={props.reset}>CHECKOUT</button>
        </Link>
        <Link to="/shop" style={{ color: "#000000", fontWeight: "bold" }}>
          <p>Back to shopping</p>
        </Link>
      </div>
    </section>
  );
}
