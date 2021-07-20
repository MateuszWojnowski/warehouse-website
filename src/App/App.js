import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

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
import Newfeel from '../Dzialy/Newfeel/Newfeel'

import Banner from '../Banner/Banner'
import RightDrawer from '../RightDrawer/RightDrawer'
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import Navbar from '../Navbar/Navbar';
import Navitem from '../Navbar/Navitem/Navitem';

import Contact from '../Contact/Contact'
import HR from '../HR/HR'
import DzialSzkolen from '../DzialSzkolen/DzialSzkolen'

import LiderzyMagazynu from '../NaszZespol/LiderzyMagazynu/LiderzyMagazynu'
import Administratorzy from '../NaszZespol/Administratorzy/Administratorzy'
import Recepcja from '../NaszZespol/Recepcja/Recepcja'
import Kadry from '../NaszZespol/Kadry/Kadry'
import Szkoleniowcy from '../NaszZespol/Szkoleniowcy/Szkoleniowcy'
import DzialIt from '../NaszZespol/DzialIt/DzialIt'




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
              <Link to="/cargliwice/mainpage" ><Navitem><div className={classes.MainPage}>Strona główna</div></Navitem></Link>
                  {/*<Link to="/cargliwice"><Navitem>Kadry</Navitem></Link>               
                  <div onClick={this.toggleHidden} className={classes.expand}><Navitem>Nasz zespół</Navitem></div>
                  {this.state.hide ? "" :
                  <ul className={classes.hiddenContent}>
                      <Link to="/cargliwice"><Navitem>Liderzy Magazynu</Navitem></Link>
                      <Link to="/cargliwice"><Navitem>Administratorzy</Navitem></Link>
                      <Link to="/cargliwice"><Navitem>Recepcja</Navitem></Link>
                      <Link to="/cargliwice"><Navitem>Kadry</Navitem></Link>
                      <Link to="/cargliwice"><Navitem>Szkoleniowcy</Navitem></Link>
                      <Link to="/cargliwice"><Navitem>Dział IT</Navitem></Link>
                  </ul>
                  }
                <Link to="/cargliwice/dzialszkolen"><Navitem>Dział Szkoleń</Navitem></Link>*/}
                  
                  <br/>
                  <Link to={{ pathname: "https://idpdecathlon.oxylane.com/idp/SSO.saml2?SAMLRequest=pVLLbtswEPwVgXe9HcgibANujKIG0tqI3B56KdbUqiJAkSp31SZ%2FXz1SJO3Bl54Izu7Mzg52Q9CZXu4Hbu0j%2FhiQOHjqjCU5F7Zi8FY6IE3SQockWclq%2F%2FFBZlEie%2B%2FYKWfEG8ptBhChZ%2B2sCI6HrfhWputr06yuq2KdqnWeY1k2kClUd2meFg3k9bos8vKaJCL4gp5G5laMQiOdaMCjJQbLI5RkaZgUYVpc0lzereSq%2BCqCw7iNtsAzq2XuScaxrvsaFXBrnI3c07MBi5Fy3VSIq%2BoUTVtkItj%2FsXrvLA0d%2Bgr9T63w8%2BPDq5hqwTP66FVxUiLd9QYnnbhz9WAw6ts%2Bnv%2B0vFkIimb0tDgIqRfB%2BSXPd9rW2n6%2FHeV1aSL54XI5h%2BdTdRG7zaQt52j87n88dshQA8M%2FFjfx2wGb5XY%2BjdaOh7MzWj0H753vgG87nxBdh83cKtmDJY2Wx8iNcb%2FuPQLjVrAfUMS7ZeTfF7r7DQ%3D%3D&RelayState=https%3A%2F%2Fcharter.decathlon.com%2F%3FSAMLRequest%3DfVJNT%252BMwEL2vxH%252BwfE%252FSFBaQ1QQVEKISLBENHLg5zjSYOJ6sx2nh3%252BOmRcABjh6%252FeR8zMzt77QxbgyONNuNpPOEMrMJa2ybjD%252BVVdMrP8oM%252FM5Kd6cV88M%252F2Hv4PQJ6FTkti%252FMj44KxASZqElR2Q8Eos57c3YhpPRO%252FQo0LD2eIy48%252BNbavetMpUbV2%252FvDQdaNNi6EJrVrJqZd1XChVnjx%252B2pltbC6IBFpa8tD6UJtM0mpxE6UmZHoq%252FR%252BLo%252BImzYq90ru0uwW%252B2qh2IxHVZFlFxtyxHgrWuwf0L6Iw3iI2BWGG3lS8kkV6H8koaAs7mROB8MHiBloYO3BLcWit4uL8JKb3vSSTJZrOJP2kSmeDrm5F2%252F1LE83G0Ykznvsz0d%252B%252FyQ5vnn%252Byz5AtVvl%252FZNsniskCj1RubG4ObCwfShxjeDSHFFbpO%252Bp%252FV0jgdK7qOViNUDJZ6UHqloeYsyXeq328jXMw7%26RelayState%3Dhttps%253A%252F%252Fwww.google.com%252Fa%252Foxylane.com%252FServiceLogin%253Fservice%253Dmail%2526passive%253Dtrue%2526rm%253Dfalse%2526continue%253Dhttps%25253A%25252F%25252Fmail.google.com%25252Fmail%25252F%2526ss%253D1%2526ltmpl%253Ddefault%2526ltmplcache%253D2%2526emr%253D1%2526osid%253D1&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=DSlTyia6MfzNfs6sqGtNYo2daBoE6RZfQNW25nA1u9N8jFEFMAnpjzF3xjj8Uvd4gtx%2BCuheqXkZlVtCHNLKfyrwVyZNNtGTpnSxCgAihIgCpec0pVh5%2FqCV5jAtoug5ITo7E3MWyPkeR1wXJ96XPkMsp6tAnJrqn4GABgC6W0o%3D#" }} target="_blank"><Navitem>Poczta</Navitem></Link>
                  <Link to={{ pathname: "https://decathlon.wtms-one.pl/prd/hr.php?checkNewWorkers=1&checkNotRegAbs=1" }} target="_blank"><Navitem>Planq</Navitem></Link>
                  <Link to={{ pathname: "https://decathlon.hcmdeck.com/protected/home" }} target="_blank"><Navitem>E-dec</Navitem></Link>
                  <Link to="/cargliwice/contact"><Navitem>Kontakt</Navitem></Link>
                  <Link to={{ pathname: "https://docs.google.com/forms/d/e/1FAIpQLSeGGU5ap9CimgFM0RIuKeB_EhOozMDuEIypnfYPJhUques5eQ/viewform?gxids=7628" }} target="_blank"><Navitem>Zgłoś usterkę IT</Navitem></Link>
              </ul>
          </LeftDrawer>
        
          <Switch>
            <div className={classes.renderWindow}>
            {/*<Route path="/"><Redirect to={"/cargliwice/ecomm"}/></Route>
              <Route path="/cargliwice/"><Redirect to={"/cargliwice/ecomm"}/></Route>*/}
              <Route path="/cargliwice/mainpage"><MainPage /></Route>
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