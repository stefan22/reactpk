import React from 'react';
import '../scss/components/Header.scss';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='container'>
        <h1 className='text-center no-margin'>{props.title}</h1>
        <p className='text-center no-margin'>{props.subtitle}</p>
      </div>
    </div>
  );
};


export default Header;
