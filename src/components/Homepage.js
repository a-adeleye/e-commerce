import React from "react";
import banner from '../banner.png'
import { Link } from "react-router-dom";


export default function Homepage() {
    return(
        <section className="homepage">
            <div className="homepage--text">
                <p>DELIVERY IS FASTER THAN EVER</p>
                <h2 className="homepage--tagline">A New Revolution.<br></br>A New Perspective </h2>
                <Link to="/shop"><button className="homepage--button">Shop now</button></Link>
            </div>
            <div className="homepage--image">
                <img src={banner} alt="" />
            </div>
        </section>
    )
}