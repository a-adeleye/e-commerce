import { Link } from "react-router-dom";

export default function ThankYou() {
    return(
        <section className="thank-you">
            <h2>Your order has been completed!!!</h2>
            <h1>Thank you for trusting us</h1>
            <p>😉</p>
           <Link to="/shop"><button className="thank-you--button">Continue shopping</button></Link>
        </section>
    )
}