import React from 'react';

import classes from './Contact.module.css'

let Contact = () => (
    <div className={classes.contactContent}>
        <iframe className={classes.numbers} src="https://docs.google.com/spreadsheets/d/1jZVyzB_w_wDRFTsSYutkv1WtAtafJ32FZewkO49LD2M/edit#gid=0" />

            <div className={classes.gmap_canvas}>
                <iframe
                    className={classes.map}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Alberta%20Einsteina%2045%2C%20Gliwice&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    frameBorder="0" 
                    scrolling="yes" 
                    marginHeight="0" 
                    marginWidth="0"
                    title="mapaCARGliwice">
                </iframe>
                <a href="https://www.embedgooglemap.net/1/">required</a>
            </div>
        
    </div>
)

export default Contact;