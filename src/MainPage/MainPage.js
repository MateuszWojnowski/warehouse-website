import classes from './MainPage.module.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import React from 'react';

let MainPage = (props) => (
    <div className={classes.MainPage}>
        {/*<div className={classes.title}>Aktualności</div>
        <div className={classes.content}>
            
            <div className={classes.contentItem}>
                <div className={classes.contentItemTitle}>Item 1</div>
                <div className={classes.contentItemContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis magna risus, eget congue metus auctor et. 
                Proin sit amet bibendum massa. Suspendisse potenti. Nam aliquam fermentum vestibulum. In nec leo sit amet tortor rutrum mattis. Duis sodales vitae velit nec tincidunt. 
                Mauris libero leo, placerat in risus consequat, egestas placerat purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Ut imperdiet, ex pharetra egestas hendrerit, nunc justo mattis mi, ac imperdiet purus mauris ut dolor.</div>
            </div>
            <div className={classes.contentItem}>
                <div className={classes.contentItemTitle}>Item 2</div>
                <div className={classes.contentItemContent}>Sed eget magna volutpat erat malesuada sollicitudin a a erat. Donec nec metus ac diam finibus consectetur in non quam. 
                Vestibulum scelerisque maximus dignissim. Vestibulum finibus ultrices sapien. Suspendisse sem eros, auctor bibendum mauris eget, tempus imperdiet sapien. 
                Suspendisse et velit lectus. Nulla sem nulla, finibus vel sagittis in, interdum ac arcu. Proin tincidunt, lacus ac condimentum elementum, orci libero ultrices eros, 
                eget consequat enim tellus sit amet sem. Ut ultrices ante eu varius pellentesque. In tempor ultrices laoreet. Aenean fringilla vitae dui non iaculis. 
                Phasellus dictum euismod massa tempus laoreet. Vestibulum vestibulum gravida orci eget commodo.</div>
            </div>
            <div className={classes.contentItem}>
                <div className={classes.contentItemTitle}>Item 3</div>
                <div className={classes.contentItemContent}>Sed tristique pretium purus id pharetra. Curabitur tempor, neque sed rhoncus commodo, risus quam aliquet orci, 
                id auctor tortor dolor eget libero. Ut id faucibus lacus. Mauris varius odio dui, et vulputate ex finibus sed. Curabitur fermentum quam at enim ullamcorper, 
                a imperdiet lectus imperdiet. Sed tempus lacus ac sapien sodales sodales. Morbi erat est, dapibus a facilisis ac, pharetra quis nisl.</div>
            </div>

        </div>*/}
        {/* ^ to jest schemat przykladowych aktualnosci jezeli takie sie kiedys pojawia*/}


        {/*<div className={classes.h1}>
            Witaj na platformie magazynowej Decathlon!
        </div>
        <div className={classes.h2}>
            Na tej podstronie znajdziesz wszystkie najważniejsze informacje i aktualności, jeżeli w przyszłości takie się pojawią.
        </div>
        <img className={classes.obrazek} src='./media/images/obrazek.png' alt="obrazek"></img>*/}
        {/* ^ to jest to co bylo, zanim nie bylo zadnych aktualnosci*/}

        <br />
        <br />
        <div>
            "Stara" strona magazynu (informacje o covid):
            <Link to={{ pathname: "https://sites.google.com/decathlon.com/cargliwice/" }} target="_blank"><div className={classes.t}>https://sites.google.com/decathlon.com/cargliwice/</div></Link>
        </div>
        <br />
        <div>
            Nowsza strona magazynu (aktualności):
            <Link to={{ pathname: "https://sites.google.com/decathlon.com/magazyny/aktualno%C5%9Bci" }} target="_blank"><div className={classes.t}>https://sites.google.com/decathlon.com/magazyny/aktualno%C5%9Bci</div></Link>
        </div>

    </div>
);

export default MainPage;