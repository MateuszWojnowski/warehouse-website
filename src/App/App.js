import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import classes from './App.module.css';

import MainPage from '../MainPage/MainPage';
import Ecomm from '../Dzialy/Ecomm/Ecomm';
import Rampa from '../Dzialy/Rampa/Rampa'
import Kalenji from '../Dzialy/Kalenji/Kalenji'
import Domyos from '../Dzialy/Domyos/Domyos'
import Subea from '../Dzialy/Subea/Subea'
import Inesis from '../Dzialy/Inesis/Inesis'
import Quechua from '../Dzialy/Quechua/Quechua'
import HS from '../Dzialy/HS/HS'
import Banner from '../Banner/Banner'
import RightDrawer from '../RightDrawer/RightDrawer'
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact'
import LoginForm from '../LoginForm/LoginForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true
    }
  }



  toggleHidden = () => {
    this.setState({ hide: !this.state.hide })
  }

  render() {
    return (
      <div className="App">
        <Banner />

        <Router>
          <Navbar />

          <LeftDrawer />

          <Switch>
            <div className={classes.renderWindow}>
              <Route path="/"><Redirect to={"/cargliwice/mainpage"} /></Route>
              <Route path="/cargliwice/"><Redirect to={"/cargliwice/mainpage"} /></Route>
              <Route path="/cargliwice/edit"><LoginForm /></Route>
              <Route path="/cargliwice/mainpage"><MainPage /></Route>
              <Route path="/cargliwice/contact"><Contact /></Route>
              <Route path="/cargliwice/ecomm"><Ecomm /><RightDrawer /></Route>
              <Route path="/cargliwice/rampa"><Rampa /></Route>
              <Route path="/cargliwice/hs"><HS /></Route>
              <Route path="/cargliwice/inesis"><Inesis /></Route>
              <Route path="/cargliwice/quechua"><Quechua /></Route>
              <Route path="/cargliwice/subea"><Subea /></Route>
              <Route path="/cargliwice/kalenji"><Kalenji /></Route>
              <Route path="/cargliwice/domyos"><Domyos /></Route>
            </div>
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;