import classes from './DzialIt.module.css';
import React from 'react';
import KartaPracownika from '../KartaPracownika/KartaPracownika'

let DzialIt = () => (
    <div className={classes.content}>
        <KartaPracownika name="Jan Kowalski" role="It Monitor" email="dyrektorjan@decathlon.com"/>
    </div>
)

export default DzialIt;