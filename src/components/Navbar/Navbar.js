//Import modules
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//Import dependencies
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

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
					The planets
				</NavLink>
				<div id='menu__icon' onClick={handleClick}>
					{!click ? <GiHamburgerMenu /> : <FaTimes />}
				</div>
				<ul className={click ? 'nav__menu active' : 'nav__menu'}>
					<li className='nav__item'>
						<NavLink
							exact
							to='/mercury'
							className='nav__links'
							onClick={closeMobileMenu}>
							{ click ? <><div className='planet__marker'>
								<div className='circle mercury'></div>Mercury
							</div>
							<span>˃</span></> : "Mercury" }
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink
							exact
							to='/venus'
							className='nav__links'
							onClick={closeMobileMenu}>
							{click ? <><div className='planet__marker'>
								<div className='circle venus'></div>Venus
							</div>
								<span>˃</span></> : "Venus"}
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink
							exact
							to='/earth'
							className='nav__links'
							onClick={closeMobileMenu}>
							{click ? <><div className='planet__marker'>
								<div className='circle earth'></div>Earth
							</div>
								<span>˃</span> </> : "Earth"}
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink
							exact
							to='/mars'
							className='nav__links'
							onClick={closeMobileMenu}>
							{click ? <><div className='planet__marker'>
								<div className='circle mars'></div>Mars
							</div>
								<span>˃</span> </> : "Mars"}
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink
							exact
							to='/jupiter'
							className='nav__links'
							onClick={closeMobileMenu}>
							{click ? <><div className='planet__marker'>
								<div className='circle jupiter'></div>Jupiter
							</div>
								<span>˃</span></> : "Jupiter"}
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink
							exact
							to='/saturn'
							className='nav__links'
							onClick={closeMobileMenu}>
							{click ? <><div className='planet__marker'>
								<div className='circle saturn'></div>Saturn
							</div>
								<span>˃</span></> : "Saturn"}
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink
							exact
							to='/uranus'
							className='nav__links'
							onClick={closeMobileMenu}>
							{click ? <>
								<div className='planet__marker'>
									<div className='circle uranus'></div>Uranus
								</div>
								<span>˃</span>
							</> : "Uranus"}
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink
							exact
							to='/neptune'
							className='nav__links'
							onClick={closeMobileMenu}>
							{click ? <> <div className='planet__marker'>
								<div className='circle neptune'></div>Neptune
							</div>
								<span>˃</span> </> : "Neptune"}
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
