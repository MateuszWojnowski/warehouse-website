import classes from './LeftDrawer.module.css';
import React from 'react';
import Navitem from '../Navbar/Navitem/Navitem';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';


let LeftDrawer = (props) => (
    <div className={classes.leftdrawer}>
        <ul className={classes.sidedrawer}>
              <Link to="/cargliwice/mainpage" ><Navitem><div className={classes.MainPage}>Strona główna</div></Navitem></Link>               
                  <br/>
                  <Link to={{ pathname: "https://idpdecathlon.oxylane.com/idp/SSO.saml2?SAMLRequest=pVLLbtswEPwVgXe9HcgibANujKIG0tqI3B56KdbUqiJAkSp31SZ%2FXz1SJO3Bl54Izu7Mzg52Q9CZXu4Hbu0j%2FhiQOHjqjCU5F7Zi8FY6IE3SQockWclq%2F%2FFBZlEie%2B%2FYKWfEG8ptBhChZ%2B2sCI6HrfhWputr06yuq2KdqnWeY1k2kClUd2meFg3k9bos8vKaJCL4gp5G5laMQiOdaMCjJQbLI5RkaZgUYVpc0lzereSq%2BCqCw7iNtsAzq2XuScaxrvsaFXBrnI3c07MBi5Fy3VSIq%2BoUTVtkItj%2FsXrvLA0d%2Bgr9T63w8%2BPDq5hqwTP66FVxUiLd9QYnnbhz9WAw6ts%2Bnv%2B0vFkIimb0tDgIqRfB%2BSXPd9rW2n6%2FHeV1aSL54XI5h%2BdTdRG7zaQt52j87n88dshQA8M%2FFjfx2wGb5XY%2BjdaOh7MzWj0H753vgG87nxBdh83cKtmDJY2Wx8iNcb%2FuPQLjVrAfUMS7ZeTfF7r7DQ%3D%3D&RelayState=https%3A%2F%2Fcharter.decathlon.com%2F%3FSAMLRequest%3DfVJNT%252BMwEL2vxH%252BwfE%252FSFBaQ1QQVEKISLBENHLg5zjSYOJ6sx2nh3%252BOmRcABjh6%252FeR8zMzt77QxbgyONNuNpPOEMrMJa2ybjD%252BVVdMrP8oM%252FM5Kd6cV88M%252F2Hv4PQJ6FTkti%252FMj44KxASZqElR2Q8Eos57c3YhpPRO%252FQo0LD2eIy48%252BNbavetMpUbV2%252FvDQdaNNi6EJrVrJqZd1XChVnjx%252B2pltbC6IBFpa8tD6UJtM0mpxE6UmZHoq%252FR%252BLo%252BImzYq90ru0uwW%252B2qh2IxHVZFlFxtyxHgrWuwf0L6Iw3iI2BWGG3lS8kkV6H8koaAs7mROB8MHiBloYO3BLcWit4uL8JKb3vSSTJZrOJP2kSmeDrm5F2%252F1LE83G0Ykznvsz0d%252B%252FyQ5vnn%252Byz5AtVvl%252FZNsniskCj1RubG4ObCwfShxjeDSHFFbpO%252Bp%252FV0jgdK7qOViNUDJZ6UHqloeYsyXeq328jXMw7%26RelayState%3Dhttps%253A%252F%252Fwww.google.com%252Fa%252Foxylane.com%252FServiceLogin%253Fservice%253Dmail%2526passive%253Dtrue%2526rm%253Dfalse%2526continue%253Dhttps%25253A%25252F%25252Fmail.google.com%25252Fmail%25252F%2526ss%253D1%2526ltmpl%253Ddefault%2526ltmplcache%253D2%2526emr%253D1%2526osid%253D1&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=DSlTyia6MfzNfs6sqGtNYo2daBoE6RZfQNW25nA1u9N8jFEFMAnpjzF3xjj8Uvd4gtx%2BCuheqXkZlVtCHNLKfyrwVyZNNtGTpnSxCgAihIgCpec0pVh5%2FqCV5jAtoug5ITo7E3MWyPkeR1wXJ96XPkMsp6tAnJrqn4GABgC6W0o%3D#" }} target="_blank"><Navitem>Poczta</Navitem></Link>
                  <Link to={{ pathname: "https://decathlon.wtms-one.pl/prd/hr.php?checkNewWorkers=1&checkNotRegAbs=1" }} target="_blank"><Navitem>Planq</Navitem></Link>
                  <Link to={{ pathname: "https://decathlon.hcmdeck.com/protected/home" }} target="_blank"><Navitem>E-dec</Navitem></Link>
                  <Link to="/cargliwice/contact"><Navitem>Kontakt</Navitem></Link>
                  <Link to={{ pathname: "https://docs.google.com/forms/d/e/1FAIpQLSeGGU5ap9CimgFM0RIuKeB_EhOozMDuEIypnfYPJhUques5eQ/viewform?gxids=7628" }} target="_blank"><Navitem>Zgłoś usterkę IT</Navitem></Link>
              </ul>
    </div>
);
    


export default LeftDrawer;
