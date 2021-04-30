import classes from './Recepcja.module.css';
import React from 'react';

import KartaPracownika from '../KartaPracownika/KartaPracownika'

let Recepcja = () => (
    <div className={classes.content}>
        <KartaPracownika name="ABCD" role="EFG" email="email@example.com"/>
    </div>
)

export default Recepcja;