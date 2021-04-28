import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

import classes from './App.module.css';

import Ecomm from '../Działy/Ecomm/Ecomm';
import Rampa from '../Działy/Rampa/Rampa'
import Kalenji from '../Działy/Kalenji/Kalenji'
import Domyos from '../Działy/Domyos/Domyos'
import Subea from '../Działy/Subea/Subea'
import Inesis from '../Działy/Inesis/Inesis'
import Quechua from '../Działy/Quechua/Quechua'
import HS from '../Działy/HS/HS'
import Newfeel from '../Działy/Newfeel/Newfeel'

import Banner from '../Banner/Banner'
import RightDrawer from '../RightDrawer/RightDrawer'
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import Navbar from '../Navbar/Navbar';
import Navitem from '../Navbar/Navitem/Navitem';

import Contact from '../Contact/Contact'
import HR from '../HR/HR'
import DzialSzkolen from '../DzialSzkolen/DzialSzkolen'

import LiderzyMagazynu from '../NaszZespół/LiderzyMagazynu/LiderzyMagazynu'
import Administratorzy from '../NaszZespół/Administratorzy/Administratorzy'
import Recepcja from '../NaszZespół/Recepcja/Recepcja'
import Kadry from '../NaszZespół/Kadry/Kadry'
import Szkoleniowcy from '../NaszZespół/Szkoleniowcy/Szkoleniowcy'
import DzialIt from '../NaszZespół/DzialIt/DzialIt'




class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      hide: true
    }
  }
    toggleHidden = () =>{
      this.setState({hide: !this.state.hide})
    }

    render(){
    return (
      <div className="App">
        <Banner />
        
        <Router>
        <Navbar>
            <Navitem><Link to="/cargliwice/ecomm"><div>Ecomm</div></Link></Navitem>
            <Navitem><Link to="/cargliwice/rampa"><div>Rampa</div></Link></Navitem>
            <Navitem><Link to="/cargliwice/kalenji"><div>Kalenji</div></Link></Navitem>
            <Navitem><Link to="/cargliwice/domyos"><div>Domyos</div></Link></Navitem>
            <Navitem><Link to="/cargliwice/subea"><div>Subea</div></Link></Navitem>
            <Navitem><Link to="/cargliwice/inesis"><div>Inesis</div></Link></Navitem>
            <Navitem><Link to="/cargliwice/quechua"><div>Quechua</div></Link></Navitem>
            <Navitem><Link to="/cargliwice/hs"><div>HS</div></Link></Navitem>
            <Navitem><Link to="/cargliwice/newfeel"><div>Newfeel</div></Link></Navitem>
        </Navbar>
        
          <LeftDrawer>
              <ul className={classes.sidedrawer}>
                  <Link to="/cargliwice"><Navitem>Strona główna</Navitem></Link>
                  <Link to="/cargliwice"><Navitem>Kadry</Navitem></Link>
                  
                  <div onClick={this.toggleHidden} className={classes.expand}><Navitem>Nasz zespół</Navitem></div>
                  {this.state.hide ? "" :
                  <ul className={classes.hiddenContent}>
                      {/* <Link to="/cargliwice/zespol/liderzymagazynu"><Navitem>Liderzy Magazynu</Navitem></Link>
                      <Link to="/cargliwice/zespol/administratorzy"><Navitem>Administratorzy</Navitem></Link>
                      <Link to="/cargliwice/zespol/recepcja"><Navitem>Recepcja</Navitem></Link>
                      <Link to="/cargliwice/zespol/kadry"><Navitem>Kadry</Navitem></Link>
                      <Link to="/cargliwice/zespol/szkoleniowcy"><Navitem>Szkoleniowcy</Navitem></Link>
                      <Link to="/cargliwice/zespol/dzialit"><Navitem>Dział IT</Navitem></Link> */}
                      <Link to="/cargliwice"><Navitem>Liderzy Magazynu</Navitem></Link>
                      <Link to="/cargliwice"><Navitem>Administratorzy</Navitem></Link>
                      <Link to="/cargliwice"><Navitem>Recepcja</Navitem></Link>
                      <Link to="/cargliwice"><Navitem>Kadry</Navitem></Link>
                      <Link to="/cargliwice"><Navitem>Szkoleniowcy</Navitem></Link>
                      <Link to="/cargliwice"><Navitem>Dział IT</Navitem></Link>
                  </ul>
                  }

                  <Link to="/cargliwice/dzialszkolen"><Navitem>Dział Szkoleń</Navitem></Link>
                  <Link to="/cargliwice/contact"><Navitem>Kontakt</Navitem></Link>
                  <br/>
                  <Link to={{ pathname: "https://docs.google.com/forms/d/e/1FAIpQLSeGGU5ap9CimgFM0RIuKeB_EhOozMDuEIypnfYPJhUques5eQ/viewform?gxids=7628" }} target="_blank"><Navitem>Zgłoś usterkę IT</Navitem></Link>
              </ul>
          </LeftDrawer>
        
          <Switch>
            <div className={classes.renderWindow}>
              <Route path="/cargliwice/hr"><HR /></Route>
              <Route path="/cargliwice/contact"><Contact/></Route>
              <Route path="/cargliwice/ecomm"><Ecomm /><RightDrawer /></Route>
              <Route path="/cargliwice/rampa"><Rampa /></Route>
              <Route path="/cargliwice/hs"><HS /></Route>
              <Route path="/cargliwice/inesis"><Inesis /></Route>
              <Route path="/cargliwice/quechua"><Quechua /></Route>
              <Route path="/cargliwice/subea"><Subea /></Route>
              <Route path="/cargliwice/kalenji"><Kalenji /></Route>
              <Route path="/cargliwice/domyos"><Domyos /></Route>
              <Route path="/cargliwice/newfeel"><Newfeel /></Route>

              <Route path="/cargliwice/dzialszkolen"><DzialSzkolen /></Route>
              
              <Route path="/cargliwice/zespol/liderzymagazynu"><LiderzyMagazynu /></Route>
              <Route path="/cargliwice/zespol/administratorzy"><Administratorzy /></Route>
              <Route path="/cargliwice/zespol/recepcja"><Recepcja /></Route>
              <Route path="/cargliwice/zespol/kadry"><Kadry /></Route>
              <Route path="/cargliwice/zespol/szkoleniowcy"><Szkoleniowcy /></Route>
              <Route path="/cargliwice/zespol/dzialit"><DzialIt /></Route>              
            </div>
          </Switch>
        </Router>
      </div>
    );    
    }
}

export default App;