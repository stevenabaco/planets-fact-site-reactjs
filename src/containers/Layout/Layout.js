//Import modules
import React from 'react';
//Import dependencies
import Navbar from '../../components/Navbar/Navbar';
//Import CSS
import './Layout.css';
//Import Images
import backgroundStars from '../../assets/background-stars.svg';

const Layout = props => {

  return (
  
    <div class="layout__main" style={{backgroundImage: `url(${backgroundStars})`}}>
        <Navbar/>
    </div>

  )
}

export default Layout;
