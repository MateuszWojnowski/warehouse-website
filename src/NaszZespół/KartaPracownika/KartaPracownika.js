import React from 'react';

import classes from './KartaPracownika.module.css'

let KartaPracownika = (props) => (
    <div className={classes.kartapracownika}>
        <div className={classes.imgContainer}><div>Zdjęcie</div></div>
        <p className={classes.name}>{props.name}</p>
        <p>{props.role}</p>
        <p>{props.email}</p>
        <div className={classes.omnie}>O mnie
            <p>{props.oMnie}</p>
        </div>
    </div>
)

export default KartaPracownika;