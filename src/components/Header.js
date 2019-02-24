import React from 'react';

const Header = (props) => {

  return (
    <div className='header'>
      <h1 className='text-center border-bottom'>{props.title}</h1>
      <p className='text-center'>{props.subtitle}</p>
    </div>
  );
};


export default Header;
