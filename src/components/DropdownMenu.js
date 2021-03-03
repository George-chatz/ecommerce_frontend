import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from 'react-router-dom';

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus({media, clothing, accessories, souveniers, homeware}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const testFunc = () => {
    console.log("working")
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Shop
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

{/* <Link to="/" className='nav-links'>Home</Link> */}
<Link to="/category"><StyledMenuItem onClick={media}>
        <ListItemText primary="Music, Books & Film"/>
        </StyledMenuItem></Link>

        <Link to="/category"><StyledMenuItem onClick={clothing}>
        <ListItemText primary="Clothing"/>
        </StyledMenuItem></Link>

        <Link to="/category"><StyledMenuItem onClick={accessories}>
        <ListItemText primary="Accessories"/>
        </StyledMenuItem></Link>

        <Link to="/category"><StyledMenuItem onClick={souveniers}>
        <ListItemText primary="Souveniers"/>
        </StyledMenuItem></Link>

       <Link to="/category"><StyledMenuItem onClick={homeware}>
        <ListItemText primary="Homeware"/>
        </StyledMenuItem></Link>
      </StyledMenu>
    </div>
  );
}
