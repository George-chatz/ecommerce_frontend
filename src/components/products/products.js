import React from "react";
import "../products/products.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { withRouter } from 'react-router-dom';

 
const Product =({image,itemname,price, removeItem, addToCart}) => {

let path = window.location.pathname;
let cart = "/cart";


    return (
        <Card className="root">
            <CardActionArea>
            <CardMedia>
            <img className="image" src={image} alt=""></img>
            </CardMedia>

        <CardContent>
          <Typography className="pN" gutterBottom variant="h5" component="h2">
            {itemname}
          </Typography>
          <Typography className="info" variant="body2" color="textSecondary" component="p">
          <IconButton color="primary" aria-label="add to shopping cart">
          <FavoriteIcon />
          </IconButton>
          <p>{price}</p>
{ cart === path?<IconButton aria-label="delete" onClick={removeItem}> {/*if path is cart, hide add else hide delete*/}
          <DeleteIcon />
          </IconButton>  :
          <IconButton color="primary" aria-label="add to shopping cart" onClick={addToCart}>
          <AddShoppingCartIcon/>
          </IconButton>}
          </Typography>
        </CardContent>
           </CardActionArea>
        
        </Card>
    )
}

export default Product;