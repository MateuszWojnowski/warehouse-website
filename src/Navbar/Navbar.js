import classes from './Navbar.module.css';
import React from 'react';
import Navitem from './Navitem/Navitem'
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';


let Navbar = (props) => (
    <div className={classes.navbar}>
        <Navitem><Link to="/cargliwice/ecomm"><div>Ecomm</div></Link></Navitem>
        <Navitem><Link to="/cargliwice/rampa"><div>Rampa</div></Link></Navitem>
        <Navitem><Link to="/cargliwice/kalenji"><div>Kalenji</div></Link></Navitem>
        <Navitem><Link to="/cargliwice/domyos"><div>Domyos</div></Link></Navitem>
        <Navitem><Link to="/cargliwice/subea"><div>Subea</div></Link></Navitem>
        <Navitem><Link to="/cargliwice/inesis"><div>Inesis</div></Link></Navitem>
        <Navitem><Link to="/cargliwice/quechua"><div>Quechua</div></Link></Navitem>
        <Navitem><Link to="/cargliwice/hs"><div>HS</div></Link></Navitem>
    </div>

);

export default Navbar;