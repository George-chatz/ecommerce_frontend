import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import "./socialbar.css"

const SocialBar = () => {
return(
    <div classname="socialcontainer">
        <a classname="twittericon" href="https://twitter.com/BEATLESSTORY" target="_blank" rel="noreferrer noopener"> 
        <TwitterIcon/> 
        </a>
        <a classname="facebookicon" href="https://www.facebook.com/BeatlesStoryLiverpool/" target="_blank" rel="noreferrer noopener">
        <FacebookIcon/>
        </a>
        <a classname="instagramicon" href="https://www.instagram.com/beatlesstory/?hl=en" target="_blank" rel="noreferrer noopener">
        <InstagramIcon/>
        </a>  
    </div>
    )
}

export default SocialBar;   