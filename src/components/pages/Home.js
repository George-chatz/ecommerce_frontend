import '../../App.css'
import "./Home.css"
import MainCaro from '../MainCaro'
import React from 'react';
import ImageSlider from '../ImageSlider';
import unionjacklargecushion from "../images/unionjacklargecushion.jpg"
import glasses from "../images/glasses.jpg"
import flipper from "../images/flipper.png"
import Featuredproducts from "../products/featuredproducts"
import Navbar from "../Navbar.js"

function Home() {
    return (
        <div>
            <Navbar />
            <div className="homecontainer">
                <MainCaro/>
                <ImageSlider/>
            <div className="newarrivals">
                SHOP NEW ARRIVALS
                <div className="featuredproducts">
                    <Featuredproducts featuredimage={unionjacklargecushion}/>
                    <Featuredproducts featuredimage={glasses}/>
                    <Featuredproducts featuredimage={flipper}/>
                 </div>
            </div>
            
        </div>  
        </div>
        
    )
}

export default Home;

