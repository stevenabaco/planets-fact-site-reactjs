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
		<div
			className='layout__main'
			style={{ backgroundImage: `url(${backgroundStars})`}}>
			<Navbar />
			<main>{props.children}</main>
		</div>
	);
};

export default Layout;
