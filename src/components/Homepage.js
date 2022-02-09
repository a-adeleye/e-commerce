import React from "react";
import banner from '../banner.png'

export default function Homepage() {
    return(
        <section className="homepage">
            <div className="homepage--text">
                <p>DELIVERY IS FASTER THAN EVER</p>
                <h2 className="homepage--tagline">A New Revolution.<br></br>A New Perspective </h2>
                <button className="homepage--button">Shop now</button>
            </div>
            <div className="homepage--image">
                <img src={banner} alt="" />
            </div>
        </section>
    )
}