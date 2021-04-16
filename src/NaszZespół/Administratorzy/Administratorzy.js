import classes from './Administratorzy.module.css';
import React from 'react';
import KartaPracownika from '../KartaPracownika/KartaPracownika'

let Administratorzy = () => (
    <div className={classes.content}>
        <KartaPracownika name="Jan Kowalski" role="administrator" email="dyrektorjan@decathlon.com"/>
        <KartaPracownika name="Jan Kowalski" role="administrator" email="dyrektorjan@decathlon.com"/>
    </div>
)

export default Administratorzy;