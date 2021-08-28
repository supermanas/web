import React from 'react';
import classes from './social.module.scss';

export default function SocialLinks() {
  return (
    <div className={classes.social}>
      <a href='mailto: kumaraditiya661@gmail.com' className='icon'>
        &#xe90c;
      </a>
      <a href='https://github.com/supermanas' className='icon'>
        &#xe908;
      </a>
      <a href='#' className='icon'>
        &#xe90e;
      </a>
      <a href='#' className='icon'>
        &#xe907;
      </a>
      <a href='#' className='icon'>
        &#xe90d;
      </a>
      <a
        href='#'
        className='icon'
      >
        &#xe902;
      </a>
    </div>
  );
}
