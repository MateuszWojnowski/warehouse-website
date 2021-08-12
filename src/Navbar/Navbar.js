import classes from './Navbar.module.css';
import React from 'react';
import Navitem from './Navitem/Navitem'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';


let Navbar = (props) => (
    <div className={classes.navbar}>
        <Navitem><Link to="/cargliwice/ecomm">Ecomm</Link></Navitem>
        <Navitem><Link to="/cargliwice/rampa">Rampa</Link></Navitem>
        <Navitem><Link to="/cargliwice/kalenji">Kalenji</Link></Navitem>
        <Navitem><Link to="/cargliwice/domyos">Domyos</Link></Navitem>
        <Navitem><Link to="/cargliwice/subea">Subea</Link></Navitem>
        <Navitem><Link to="/cargliwice/inesis">Inesis</Link></Navitem>
        <Navitem><Link to="/cargliwice/quechua">Quechua</Link></Navitem>
        <Navitem><Link to="/cargliwice/hs">HS</Link></Navitem>
    </div>

);

export default Navbar;