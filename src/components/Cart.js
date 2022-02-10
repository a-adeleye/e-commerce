import React from "react";
import shinGuard from "../products/shin-guard.jpg";

export default function Cart() {
  return (
    <section className="cart-page">
      <div className="cart-items">
        <div className="cart-item">
          <div className="cart-product-image">
            <img src={shinGuard} alt="" />
          </div>
          <div className="cart-product-details">
            <h4 className="product-name">Foot Soaking Bath Basin</h4>
            <p className="delivery-details">Delivery between Feb 13 - Feb 14</p>
            <p className="return-policy">
              This item cannot be exchanged or returned.
            </p>
            <p className="remove-item">
              <i className="fas fa-trash-alt"></i> Remove
            </p>
          </div>
          <div className="product-quantity">
            <p className="amount">
              AED <span className="large-text">55</span>
            </p>
            <div className="quantity-change">
              <input type="number" name="quantity" value="5"></input>
            </div>
          </div>
        </div>

        <div className="cart-item">
          <div className="cart-product-image">
            <img src={shinGuard} alt="" />
          </div>
          <div className="cart-product-details">
            <h4 className="product-name">Foot Soaking Bath Basin</h4>
            <p className="delivery-details">Delivery between Feb 13 - Feb 14</p>
            <p className="return-policy">
              This item cannot be exchanged or returned.
            </p>
            <p className="remove-item">
              <i className="fas fa-trash-alt"></i> Remove
            </p>
          </div>
          <div className="product-quantity">
            <p className="amount">
              AED <span className="large-text">55</span>
            </p>
            <div className="quantity-change">
              <input type="number" name="quantity" value="5"></input>
            </div>
          </div>
        </div>

        <div className="cart-item">
          <div className="cart-product-image">
            <img src={shinGuard} alt="" />
          </div>
          <div className="cart-product-details">
            <h4 className="product-name">Foot Soaking Bath Basin</h4>
            <p className="delivery-details">Delivery between Feb 13 - Feb 14</p>
            <p className="return-policy">
              This item cannot be exchanged or returned.
            </p>
            <p className="remove-item">
              <i className="fas fa-trash-alt"></i> Remove
            </p>
          </div>
          <div className="product-quantity">
            <p className="amount">
              AED <span className="large-text">55</span>
            </p>
            <div className="quantity-change">
              <input type="number" name="quantity" value="5"></input>
            </div>
          </div>
        </div>
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
          <p>Subtotal (2 item)</p>
          <p className="subtotal-amount" style={{ justifySelf: "flex-end" }}>
            AED 109.00
          </p>
          <p className="shipping">Shipping</p>
          <p className="shipping-amount" style={{ justifySelf: "flex-end" }}>
            AED 20.00
          </p>
        </div>
        <div className="total">
          <p>Total</p>
          <p>AED 129.00</p>
        </div>

        <button className="checkout-button">CHECKOUT</button>
      </div>
    </section>
  );
}
