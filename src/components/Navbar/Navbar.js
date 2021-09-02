//Import modules
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//Import dependencies
import { Consumer } from '../../components/Context';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

//Import CSS
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);

	return (
		<Consumer>
			{context => {
				const handleClick = () => {
					setClick(!click);
				};
				const closeMobileMenu = () => setClick(false);

				const handleLogo = () => {
					context.setCurrentPlanet('Earth');
					context.setPlanetIndex(2);
					closeMobileMenu();
				};

				const handleMercury = () => {
					context.setCurrentPlanet('Mercury');
					context.setPlanetIndex(0);
					closeMobileMenu();
				};
				const handleVenus = () => {
					context.setCurrentPlanet('Venus');
					context.setPlanetIndex(1);
					closeMobileMenu();
				};
				const handleEarth = () => {
					context.setCurrentPlanet('Earth');
					context.setPlanetIndex(2);
					closeMobileMenu();
				};
				const handleMars = () => {
					context.setCurrentPlanet('Mars');
					context.setPlanetIndex(3);
					closeMobileMenu();
				};
				const handleJupiter = () => {
					context.setCurrentPlanet('Jupiter');
					context.setPlanetIndex(4);
					closeMobileMenu();
				};
				const handleSaturn = () => {
					context.setCurrentPlanet('Saturn');
					context.setPlanetIndex(5);
					closeMobileMenu();
				};
				const handleUranus = () => {
					context.setCurrentPlanet('Uranus');
					context.setPlanetIndex(6);
					closeMobileMenu();
				};
				const handleNeptune = () => {
					context.setCurrentPlanet('Neptune');
					context.setPlanetIndex(7);
					closeMobileMenu();
				};

				return (
					<>
						<nav id='navbar'>
							<div>
								<NavLink to='/' exact id='navbar__logo' onClick={handleLogo}>
									The planets
								</NavLink>
							</div>
							<div id='menu__icon' onClick={handleClick}>
								{!click ? <GiHamburgerMenu /> : <FaTimes />}
							</div>
							<div>
								<ul className={click ? 'nav__menu active' : 'nav__menu'}>
									<li className='nav__item'>
										<NavLink
											exact
											to='/mercury'
											onClick={handleMercury}
											className='nav__links'>
											{click ? (
												<>
													<div className='planet__marker'>
														<div className='circle mercury'></div>Mercury
													</div>
													<span>˃</span>
												</>
											) : (
												'Mercury'
											)}
										</NavLink>
									</li>
									<li className='nav__item'>
										<NavLink
											exact
											to='/venus'
											className='nav__links'
											onClick={handleVenus}>
											{click ? (
												<>
													<div className='planet__marker'>
														<div className='circle venus'></div>Venus
													</div>
													<span>˃</span>
												</>
											) : (
												'Venus'
											)}
										</NavLink>
									</li>
									<li className='nav__item'>
										<NavLink
											exact
											to='/earth'
											className='nav__links'
											onClick={handleEarth}>
											{click ? (
												<>
													<div className='planet__marker'>
														<div className='circle earth'></div>Earth
													</div>
													<span>˃</span>
												</>
											) : (
												'Earth'
											)}
										</NavLink>
									</li>
									<li className='nav__item'>
										<NavLink
											exact
											to='/mars'
											className='nav__links'
											onClick={handleMars}>
											{click ? (
												<>
													<div className='planet__marker'>
														<div className='circle mars'></div>Mars
													</div>
													<span>˃</span>{' '}
												</>
											) : (
												'Mars'
											)}
										</NavLink>
									</li>
									<li className='nav__item'>
										<NavLink
											exact
											to='/jupiter'
											className='nav__links'
											onClick={handleJupiter}>
											{click ? (
												<>
													<div className='planet__marker'>
														<div className='circle jupiter'></div>Jupiter
													</div>
													<span>˃</span>
												</>
											) : (
												'Jupiter'
											)}
										</NavLink>
									</li>
									<li className='nav__item'>
										<NavLink
											exact
											to='/saturn'
											className='nav__links'
											onClick={handleSaturn}>
											{click ? (
												<>
													<div className='planet__marker'>
														<div className='circle saturn'></div>Saturn
													</div>
													<span>˃</span>
												</>
											) : (
												'Saturn'
											)}
										</NavLink>
									</li>
									<li className='nav__item'>
										<NavLink
											exact
											to='/uranus'
											className='nav__links'
											onClick={handleUranus}>
											{click ? (
												<>
													<div className='planet__marker'>
														<div className='circle uranus'></div>Uranus
													</div>
													<span>˃</span>
												</>
											) : (
												'Uranus'
											)}
										</NavLink>
									</li>
									<li className='nav__item'>
										<NavLink
											exact
											to='/neptune'
											className='nav__links'
											onClick={handleNeptune}>
											{click ? (
												<>
													{' '}
													<div className='planet__marker'>
														<div className='circle neptune'></div>Neptune
													</div>
													<span>˃</span>
												</>
											) : (
												'Neptune'
											)}
										</NavLink>
									</li>
								</ul>{' '}
							</div>
						</nav>
					</>
				);
			}}
		</Consumer>
	);
}

export default Navbar;
