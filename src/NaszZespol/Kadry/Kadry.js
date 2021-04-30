import classes from './Kadry.module.css';
import React from 'react';
import KartaPracownika from '../KartaPracownika/KartaPracownika'

let Kadry = () => (
    <div className={classes.content}>
        <KartaPracownika name="Jan Kowalski" role="dyrektor" email="dyrektorjan@decathlon.com"/>
        <KartaPracownika name="Jan Kowalski" role="dyrektor" email="dyrektorjan@decathlon.com"/>
    </div>
)

export default Kadry;