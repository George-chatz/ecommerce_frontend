import '../../App.css'
import "./Home.css"
import MainCaro from '../MainCaro'
import React from 'react';
import unionjacklargecushion from "../images/unionjacklargecushion.jpg"
import glasses from "../images/glasses.jpg"
import flipper from "../images/flipper.png"
import Featuredproducts from "../products/featuredproducts"

function Home() {
    return (
        <div>
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

        </div>  
        </div>
        
    )
}

export default Home;

