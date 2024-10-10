import React from 'react';
import './header.css'
import credlogo from '../../../assets/cred-logo.webp'
import leftarrow from '../../../assets/white-arrow-left.png'
import {  Link } from "react-router-dom";

const Header = ({text}) => {
  return (
    <div className='flex header max-width'>
      <img src={credlogo} alt="logo" className="header-logo" />
      <Link to="/">
        <div className='flex absolute-center'>
          <img src={leftarrow} alt="arrow" className="left-arrow" />
          <span>{text}</span>
        </div>
      </Link>
      
     
    </div>
  );
};

export default Header ;
