import React from 'react';
import './BottomFooter.css'

const BottomFooter =() => {
    return (
        <div className="bottomfooter">
            <p className="col"> 
            &copy;{new Date().getFullYear()} The Beatles Story x Fab 4 Store | All rights reserved | </p>
            <a target="blank" className="terms" href="https://www.beatlesstory.com/terms/">Terms and Conditions | Privacy</a>
        </div>
    )
         
}

export default BottomFooter;