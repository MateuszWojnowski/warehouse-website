import React from 'react'

import classes from './Banner.module.css'

let Banner = () => (
    <div className={classes.banner}>
        <img className={classes.logo} src='./media/images/Decathlon-logo.png' alt="Decathlon logo"></img>
        <img className={classes.cover} src='./media/images/banner-01.jpg' alt="Banner"></img>
    </div>
)

export default Banner;