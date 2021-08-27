import React from 'react';
import classes from './skills.module.scss';

export default function Skills() {
  return (
    <div className={classes.skills}>
      <h4 className={classes.subheading}>Proficient skills</h4>
      <div className={classes.skill_rack}>
        <span className='logo logo-html'>
          <span className='path1'></span>
          <span className='path2'></span>
          <span className='path3'></span>
          <span className='path4'></span>

          <span className='tooltip'>HTML</span>
        </span>

        <span className='logo logo-css'>
          <span className='path1'></span>
          <span className='path2'></span>

          <span className='tooltip'>CSS</span>
        </span>

       

        <span className='logo logo-styled-components'>
          <span className='path1'></span>
          <span className='path2'></span>
          <span className='path3'></span>
          <span className='path4'></span>
          <span className='path5'></span>
          <span className='path6'></span>
          <span className='path7'></span>
          <span className='path8'></span>
          <span className='path9'></span>
          <span className='path10'></span>
          <span className='path11'></span>
          <span className='path12'></span>
          <span className='path13'></span>
          <span className='path14'></span>
          <span className='path15'></span>
          <span className='path16'></span>

          <span className='tooltip'>styled-components</span>
        </span>

        <span className='logo logo-javascript-rounded'>
          <span className='path1'></span>
          <span className='path2'></span>

          <span className='tooltip'>JavaScript</span>
        </span>

        <span className='logo logo-typescript'>
          <span className='path1'></span>
          <span className='path2'></span>

          <span className='tooltip'>TypeScript</span>
        </span>

        <span className='logo logo-java'>
          <span className='path1'></span>
          <span className='path2'></span>
          <span className='path3'></span>
          <span className='path4'></span>
          <span className='path5'></span>

          <span className='tooltip'>Java</span>
        </span>

        <span className='logo logo-python'>
          <span className='path1'></span>
          <span className='path2'></span>

          <span className='tooltip'>Python</span>
        </span>

        <span className='logo logo-git'>
          <span className='tooltip'>Git</span>
        </span>

        <span className='logo logo-nodejs'>
          <span className='tooltip'>Node JS</span>
        </span>

        <span className='logo logo-react'>
          <span className='tooltip'>React JS</span>
        </span>

      


        
        <span className='logo logo-graphql'>
          <span className='tooltip'>GraphQL</span>
        </span>


         

    
      </div>
    </div>
  );
}
