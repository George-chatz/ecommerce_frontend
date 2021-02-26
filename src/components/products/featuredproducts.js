import React from "react";
import "../products/featuredproducts.css"


const Featuredproducts = ({featuredimage}) => {
    return (
        <div className="featuredproducts">
            <img className="featuredimage" src={featuredimage} alt="" ></img>
        </div>
    )
}

export default Featuredproducts;