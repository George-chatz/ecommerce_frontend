import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="column">
                <h2> PRODUCTS </h2>
                <div className="uslist">
                    <p>Accessories</p>
                    <p>Music and Books</p>
                    <p>Clothing</p>
                    <p>Souvenirs</p>
                    <p>Homeware</p>
                </div>
                    </div>
            <div className="column">
                <h2> SUPPORT </h2>
                <div className="uslist">
                    <p>Help and Customer Service</p>
                    <p>Returns and Refunds</p>
                    <p>Delivery and Shipping</p>
                    <p>Size Charts</p>
                    <p>Gift Cards</p>
                    <p>Find Us</p>
                </div>
            </div>
            <div className="column">
                <h2> About Us </h2>
                <div className="uslist">
                    <p>Press</p>
                    <p>Partnerships</p>
                    <p>Vacancies</p>
                    <p>Awards</p>
                    <p>Legal</p>
                    <p>Contact Us</p>
                </div>
            </div>
                    <br></br>
                {/* <div className="row">
                    <p className="col-sm"> 
                    &copy;{new Date().getFullYear()} The Beatles Story x Fab 4 Store | All rights reserved | </p>
                    <a target="blank" className="terms" href="https://www.beatlesstory.com/terms/">Terms and Conditions | Privacy</a>
                </div> */}
    </div>           
    )
}

export default Footer;
