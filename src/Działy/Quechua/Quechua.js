import React from 'react';

import classes from '../displayFlex.module.css';

import Tiles from '../../Tiles/Tiles';

import {navOneContent, navTwoContent, navThreeContent, nav} from '../../DBs/QuechuaDB'


let Quechua = () => (
    <div className={classes.ecomm}>
        <Tiles navOneContent={navOneContent} navTwoContent={navTwoContent} navThreeContent={navThreeContent} nav={nav}/>
    </div>
);

export default Quechua;