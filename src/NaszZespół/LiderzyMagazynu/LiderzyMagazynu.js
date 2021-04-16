import React from 'react';

import classes from './LiderzyMagazynu.module.css'
import KartaPracownika from '../KartaPracownika/KartaPracownika'

let LiderzyMagazynu = () => (
    <div className={classes.content}>
        <KartaPracownika name="Jan Kowalski" role="dyrektor" email="dyrektorjan@decathlon.com" oMnie="to jest text o mnie"/>
        <KartaPracownika name="Jan Kowalski" role="dyrektor" email="dyrektorjan@decathlon.com"/>
        <KartaPracownika name="Jan Kowalski" role="dyrektor" email="dyrektorjan@decathlon.com"/>
        <KartaPracownika name="Jan Kowalski" role="dyrektor" email="dyrektorjan@decathlon.com"/>
        <KartaPracownika name="Jan Kowalski" role="dyrektor" email="dyrektorjan@decathlon.com"/>
        <KartaPracownika name="Jan Kowalski" role="dyrektor" email="dyrektorjan@decathlon.com"/>
    </div>
)

export default LiderzyMagazynu;