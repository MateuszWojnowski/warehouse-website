import React from 'react'

import classes from './RightDrawer.module.css'

import PlanTransportowy from './PlanTransportowy/PlanTransportowy'

let RightDrawer = (props) => (
    <div className={classes.rightdrawer}>
        {/*<div className={classes.box}><PlanTransportowy /></div>*/}
        <iframe className={classes.iframe} src="https://docs.google.com/spreadsheets/d/1JPviA891vOUm4-hDeIUxI6MeQJ1qZNIG7t9ShB6ixyI/edit?ts=5ef96c92#gid=1228603983" />
    </div>
)

export default RightDrawer;