//Import modules
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//Import dependencies

//Import CSS
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	return (
		<>
			<nav id='navbar'>
				<NavLink to='/' exact id='navbar__logo' onClick={closeMobileMenu}>
					<span>The planets</span>
        </NavLink>
        <div id="menu-icon" onClick={handleClick}>
          
        </div>
			</nav>
		</>
	);
}

export default Navbar;
