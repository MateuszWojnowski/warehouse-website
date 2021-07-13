import classes from './Navbar.module.css';
import React from 'react';


let Navbar = (props) => (
    <div className={classes.navbar}>
        {props.children}
    </div>

);

export default Navbar;