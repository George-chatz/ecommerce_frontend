import '../../App.css'
import "./Home.css"
import MainCaro from '../MainCaro'
import React from 'react';
import unionjacklargecushion from "../images/unionjacklargecushion.jpg"
import glasses from "../images/glasses.jpg"
import flipper from "../images/flipper.png"
import Featuredproducts from "../products/featuredproducts"
import Navbar from "../Navbar.js"
import Footer from "../Footers/Footer"
import BottomFooter from "../Footers/BottomFooter"
import SocialBar from '../socialsbar/Socialsbar';

function Home() {
    return (
        <div>
            <Navbar />
            <SocialBar />
            <div className="homecontainer">
                <MainCaro/>
            <div className="newarrivals">
                <p className="newarr"> SHOP NEW ARRIVALS</p>
                <div className="featuredproducts">
                    <Featuredproducts featuredimage={unionjacklargecushion}/>
                    <Featuredproducts featuredimage={glasses}/>
                    <Featuredproducts featuredimage={flipper}/>
                 </div>
            </div>
            <Footer />
            <BottomFooter />
        </div>  
        </div>
        
    )
}

export default Home;

