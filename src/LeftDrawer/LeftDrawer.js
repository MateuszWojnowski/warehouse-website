import classes from './LeftDrawer.module.css';
import React from 'react';


class LeftDrawer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        } 
    }

    render(){
 
        return(
            <div className={classes.leftdrawer} >{this.props.children}</div>
        )
    }
}

export default LeftDrawer;
