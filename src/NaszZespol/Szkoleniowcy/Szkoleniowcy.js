import classes from './Szkoleniowcy.module.css';
import React from 'react';
import KartaPracownika from '../KartaPracownika/KartaPracownika'

let Szkoleniowcy = () => (
    <div className={classes.content}>
        <KartaPracownika name="Jan Kowalski" role="Szkoleniowiec" email="dyrektorjan@decathlon.com"/>
    </div>
)

export default Szkoleniowcy;