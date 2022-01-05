import React from 'react';
import classes from './footer.module.scss';

import SocialLinks from '../Contact/SocialLinks';

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div>
        <SocialLinks />
      </div>
      <span className={classes.colorize}>Designed</span> and <span className={classes.colorize}>built</span> <br />
     <a href="https://github.com/supermanas">Krishna Moorthy</a>
    </div>
  );
}
