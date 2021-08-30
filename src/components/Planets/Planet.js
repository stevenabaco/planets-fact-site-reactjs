//Import Modules
import React, { useState, useEffect } from 'react';
//Import Dependencies
import { ContentTabs } from '../ContentToolbar/ContentToolbar';

//Import CSS
import './Planet.css';
//Import Images
import earthSummaryImg from '../../assets/planet-earth.svg';
import earthStructureImg from '../../assets/planet-earth-internal.svg';
import earthSurfaceImg from '../../assets/geology-earth.png';
import jupiterSummaryImg from '../../assets/planet-jupiter.svg';
import jupiterStructureImg from '../../assets/planet-jupiter-internal.svg';
import jupiterSurfaceImg from '../../assets/geology-jupiter.png';
import marsSummaryImg from '../../assets/planet-mars.svg';
import marsStructureImg from '../../assets/planet-mars-internal.svg';
import marsSurfaceImg from '../../assets/geology-mars.png';

function Planet(props) {
	// Set states
	const [currentPlanet, setCurrentPlanet] = useState(props.planet);
	const [index, setIndex] = useState(props.index);
	const [content, setContent] = useState('overview');
	const [planetImg, setPlanetImg] = useState(earthSummaryImg);
	const [data, setData] = useState([]);

	// Assign DOM elements

	// Use fetch to consume local JSON data from API

	const getData = () => {
		fetch('./data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(function (response) {
				console.log(response);
				return response.json();
			})
			.then(function (myJson) {
				console.log(myJson);
				setData(myJson);
			});
	};
	// Runs get data on first
	useEffect(() => {
		getData();
	}, []);



	return (
		<div id='planet__wrapper' planet={currentPlanet}>
			<div id='radio__toolbar' className='flex'>
				{ContentTabs.map(
					({ id, name, label, value, valueimg, defaultChecked }) => (
						<div id='contentSelector' key={id}>
							<form>
								<input
									type='radio'
									key={id}
									id={id}
									name={name}
									value={value}
									valueimg={valueimg}
									defaultChecked={defaultChecked}
									className={props.planet}
									onChange={() => {
										console.log(value);
										console.log(valueimg);

										setPlanetImg(valueimg);
										setContent(value);

									}}
									tabIndex={+id}
									checked={content === label}
								/>

								<label htmlFor={id}>{label}</label>
							</form>
						</div>
					)
				)}
			</div>
			<div id='planet__img'>
				{planetImg === earthSurfaceImg ? (
					<div id='summary__surface__container'>
						<img
							id='summary__img'
							src={props.planet === 'Earth' ? earthSummaryImg : null}
							alt='Earth'
						/>
						<img id='surface__img' src={planetImg} alt='earth' />
					</div>
				) : (
					<img src={planetImg} alt='earth'></img>
				)}
			</div>
			<div id='planet__content'>
				<h1>{currentPlanet}</h1>
				{<p>{data[index].overview.content}</p>}
				<p>Source: Wikipedia</p>
			</div>
			<div id='facts' className='flex'>
				<div id='rotation' className='planet__facts flex'>
					<p>Rotation Time</p> <span>0.99 days</span>
				</div>
				<div id='revolution' className='planet__facts flex'>
					<p>Revolution Time</p> <span>365.26 days</span>
				</div>
				<div id='radius' className='planet__facts flex'>
					<p>Radius</p> <span>6,371 KM</span>
				</div>
				<div id='temp' className='planet__facts flex'>
					<p>Average Temp</p> <span>16°c</span>
				</div>
			</div>
		</div>
	);
}

export default Planet;
