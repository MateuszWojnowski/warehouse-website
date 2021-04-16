import React from 'react'
import classes from './Tiles.module.css';
import { Link } from 'react-router-dom';


class Tiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionToDisplay: "navOne",
            pracownikColor: "rgb(1,152, 241)",
            liderColor: null,
            raportyColor: null
        }
    }

    changeTo = (where) => {
        this.setState({sectionToDisplay: `${where}`})
    }


    navOneContent = (
        <div className={classes.tiles}>
            
            {this.props.navOneContent.map(elem => 
                <div className={classes[elem.class]} key={elem.displayText}>
                    <Link className={classes.link} style={{width: "100%", height: "100%"}} to={{ pathname: elem.url }} target="_blank">
                        <div className={classes.icon}>
                            <img src={elem.iconSrc} />
                        </div>
                        {elem.displayText}
                    </Link>
                </div>
            )}
            {this.props.nav.map(elem => 
                <div 
                    className={classes[elem.class]} 
                    key={elem.displayText} 
                    onClick={() => this.changeTo(elem.zakladka)} 
                    style={ elem.zakladka === "navOne" ? {background: "rgb(1,152, 241)"} : {}}
                >
                        {elem.displayText}
                </div>
            )}
            
        </div> )


    navTwoContent = (
        <div className={classes.tiles}>

            {this.props.navTwoContent.map(elem => 
                <div className={classes[elem.class]} key={elem.url}>
                    <Link className={classes.link} style={{width: "100%", height: "100%"}} to={{ pathname: elem.url }} target="_blank">
                        <div className={classes.icon}>
                            <img src={elem.iconSrc} />
                        </div>
                        {elem.displayText}
                    </Link>
                </div>    
            )}
            {this.props.nav.map(elem => 
                <div 
                    className={classes[elem.class]} 
                    key={elem.displayText} 
                    onClick={() => this.changeTo(elem.zakladka)} 
                    style={ elem.zakladka === "navTwo" ? {background: "rgb(1,152, 241)"} : {}}
                >
                        {elem.displayText}
                </div>
            )}

        </div> )
    

    navThreeContent = (
        <div className={classes.tiles}>

            {this.props.navThreeContent.map(elem => 
                <div className={classes[elem.class]} key={elem.url}>
                    <Link className={classes.link} style={{width: "100%", height: "100%"}} to={{ pathname: elem.url }} target="_blank">
                        <div className={classes.icon}>
                            <img src={elem.iconSrc} />
                        </div>
                        {elem.displayText}
                    </Link>
                </div>    
            )}
            {this.props.nav.map(elem => 
                <div 
                    className={classes[elem.class]} 
                    key={elem.displayText} 
                    onClick={() => this.changeTo(elem.zakladka)} 
                    style={ elem.zakladka === "navThree" ? {background: "rgb(1,152, 241)"} : {}}
                >
                        {elem.displayText}
                </div>
            )}

        </div> )


    render(){
        if (this.state.sectionToDisplay === "navOne") return(
            this.navOneContent
        );
        else if (this.state.sectionToDisplay === "navTwo") return(
            this.navTwoContent
        );
        else if (this.state.sectionToDisplay === "navThree") return(
            this.navThreeContent
        );       
    }
};

export default Tiles;