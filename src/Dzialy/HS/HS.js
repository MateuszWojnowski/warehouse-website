import React from 'react';

import classes from '../displayFlex.module.css';

import Tiles from '../../Tiles/Tiles';

import {navOneContent, navTwoContent, navThreeContent, nav} from '../../DBs/HSDB'


let HS = () => (
    <div className={classes.flex}>
        <Tiles navOneContent={navOneContent} navTwoContent={navTwoContent} navThreeContent={navThreeContent} nav={nav}/>
    </div>
);

export default HS;