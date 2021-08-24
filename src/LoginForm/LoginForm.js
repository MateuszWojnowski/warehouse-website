import React from 'react'
import classes from './LoginForm.module.css'
import MainPage from '../MainPage/MainPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


class LoginForm extends React.Component {
    state = {
        login: "",
        password: "",
        errorInfo: ""
    }
    
    constructor(props) {
        super(props);
        
    }

    handleLogin = event => {
        this.setState({ login: event.target.value });
      };

    handlePassword = event => {
        this.setState({ password: event.target.value });
      };

    handleSubmitClick = event => {
        event.preventDefault();
        if (this.state.login == "log" && this.state.password == "log") {
            console.log("correct");
            

        } else {
            this.setState({errorInfo: "Niepoprawny login lub hasło"});
        }
    };
    render() {
        
        return (
            <form className={classes.LoginForm} onSubmit={this.handleSubmitClick}>
                    <div className={classes.h1Login}>Logowanie</div>
                    <input onChange={this.handleLogin} className={classes.input} name="login" placeholder="login"/>
                    <input  onChange={this.handlePassword} className={classes.input} name="password" placeholder="password"/>
                    <button type="submit" className={classes.buttonLogin}>połącz</button>
                    <div className={classes.errorInfo}>{this.state.errorInfo}</div>
                </form>
        );
    }
    }

export default LoginForm;