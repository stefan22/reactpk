import React from 'react';
import '../scss/components/Header.scss';

const Header = (props) => {
  const {title,subtitle} = props;
  return (
    <div className={
      `
        header
        ${window.location.pathname === "/" ? "dashboard" : ""}
        ${window.location.pathname === "/jobs" ? "jobs" : ""}
        ${window.location.pathname === "/applicants" ? "applicants" : ""}
        ${window.location.pathname === "/contact" ? "contact" : ""}
      `
      }>
      <div className='container'>
        <div className='dasheading'>
          <h1 className='text-center no-margin animateUnderline'>{title}</h1>
          <p className='text-center no-margin'>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};


export default Header;
