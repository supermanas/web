import React from 'react';
import classes from './hero.module.scss';
import { Link } from 'components';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <h5 className={classes.intro}>Hi, my name is</h5>
        <h1 className={classes.hero__name}>
          <span className={classes.emphasize}>Manas</span>
          <span> kumar</span>
        </h1>
        <h2 className={classes.info}>Full stack developer and enthusiast</h2>
      </div>

      <div role='img' className={classes.waterMark}>
        DEV
      </div>

      <div className={classes.quickContact}>
        <Link to='mailto: kumaraditiya661@gmail.com' lone>
          kumaraditiya661@gmail.com
        </Link>
       
      </div>
    </section>
  );
}
