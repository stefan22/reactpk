import React from 'react';
import '../scss/components/Header.scss';

const Header = (props) => {
  const {title,subtitle} = props;
  return (
    <div className='header'>
      <div className='container'>
        <h1 className='text-center no-margin animateUnderline'>{title}</h1>
        <p className='text-center no-margin'>{subtitle}</p>
      </div>
    </div>
  );
};


export default Header;
