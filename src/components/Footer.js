import React from 'react';
import './Footer.css';
import logomain from "../images/logomain.jpg";

const Footer = () => {
    return (
        <div className="main-footer">
            <img className="navbar-logo1" src={logomain} alt="logo"/>

            <div className="footerContainer">
                <div className="row">
                    
                    <div className="column">
                        <h2> PRODUCTS </h2>
                        <ul className="uslist">
                            <li>Accessories</li>
                            <li>Music and Books</li>
                            <li>Clothing</li>
                            <li>Souvenirs</li>
                            <li>Homeware</li>
                            <li>Confectionary</li>
                            <br></br>
                       </ul>
                    </div>

                   

                    <div className="column">
                        <h2> SUPPORT </h2>
                        <ul className="uslist">
                            <li>Help and Customer Service</li>
                            <li>Returns and Refunds</li>
                            <li>Delivery and Shipping</li>
                            <li>Size Charts</li>
                            <li>Gift Cards</li>
                            <li>Find Us</li>
                            <br></br>
                       </ul>
                    </div>

                    

                    <div className="column">
                        <h2> COMPANY INFO </h2>
                        <ul className="uslist">
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Legal</li>
                            <li>Partnerships</li>
                            <li>Press</li>
                            <li>Careers</li>
                            <br></br>
                       </ul>
                    </div>

                    <br></br>


                </div>

                
                <hr/>

                <div className="row">
                    <p className="col-sm"> 
                    &copy;{new Date().getFullYear()} The Beatles Story x Fab 4 Store | All rights reserved | </p>

                    <a target="blank" className="terms" href="https://www.beatlesstory.com/terms/">Terms and Conditions | Privacy</a>
                    
                   
                    
    
                    <br></br>


                </div>


            </div>

           
            
        </div>
    )
}

export default Footer;
