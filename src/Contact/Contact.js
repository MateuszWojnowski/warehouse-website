import React from 'react';

import classes from './Contact.module.css'

let height = window.innerHeight;
let width = window.innerWidth;

let Contact = () => (
    <div>
        <div className={classes.contact}>
            DECATHLON CAR GLIWICE<br/>
            Alberta Einsteina 45<br/>
            44-109 Gliwice <br/><br/>

            Tel. Recepcja: 32 302 94 00 <br/>
            Tel. Dyżurny: 32 302 94 11 <br/>
        </div>
        <div className={classes.mapContainer}>
            <div className={classes.gmap_canvas}>
                <iframe 
                    width={0.4*width} 
                    height={0.45*height}
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=Alberta%20Einsteina%2045%2C%20Gliwice&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0"
                    title="mapaCARGliwice">
                </iframe>
                <a href="https://www.embedgooglemap.net/1/">required</a>
            </div>
        </div>
    </div>
)

export default Contact;