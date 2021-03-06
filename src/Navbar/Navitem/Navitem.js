import classes from './Navitem.module.css';
import React from 'react';

let Navitem = (props) => (
        <div className={classes.navitem}>
            {props.children}
        </div>
);

export default Navitem;