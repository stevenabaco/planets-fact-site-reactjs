//Import Modules
import React, { useState, useEffect } from 'react';
//Import Dependencies
import { ContentTabs } from '../ContentToolbar/ContentToolbar';
import { Consumer } from '../../components/Context';
//Import CSS
import './Planet.css';


function Planet() {
return (
	<Consumer>
		{context => (
			<div id='planet__wrapper' planet={context.currentPlanet}>
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
										value={value.toString()}
										valueimg={valueimg}
										defaultChecked={defaultChecked}
										className={context.currentPlanet}
										onChange={() => {
											console.log(value);
											console.log(valueimg);

											context.setPlanetImg(valueimg);
											context.setCategory(label);
										}}
										tabIndex={+id}
										checked={context.category === label}
									/>

									<label htmlFor={id}>{label}</label>
								</form>
							</div>
						)
					)}
				</div>
				<div id='planet__img'>
					{context.planetImg === context.earthSurfaceImg ? (
						<div id='summary__surface__container'>
							<img
								id='summary__img'
								src={
									context.currentPlanet === 'Earth'
										? context.earthSummaryImg
										: null
								}
								alt='Earth'
							/>
							<img
								id='surface__img'
								src={context.planetImg}
								alt={context.currentPlanet}
							/>
						</div>
					) : (
						<img src={context.planetImg} alt={context.currentPlanet}></img>
					)}
				</div>
				<div id='planet__content'>
					<h1>{context.currentPlanet}</h1>
					{
						<p>
							{context.data &&
								context.data.length > 0 &&
								context.category === 'Overview' &&
								context.data[context.planetIndex].overview.content}
						</p>
					}
					{
						<p>
							{context.data &&
								context.data.length > 0 &&
								context.category === 'Structure' &&
								context.data[context.planetIndex].structure.content}
						</p>
					}
					{
						<p>
							{context.data &&
								context.data.length > 0 &&
								context.category === 'Surface' &&
								context.data[context.planetIndex].geology.content}
						</p>
					}
					<p>Source: Wikipedia</p>
				</div>
				<div id='facts' className='flex'>
					<div id='rotation' className='planet__facts flex'>
						<p>Rotation Time</p>
						<span>{context.data && context.data.length > 0 && context.data[context.planetIndex].rotation}</span>
					</div>
					<div id='revolution' className='planet__facts flex'>
						<p>Revolution Time</p>
						<span>{context.data && context.data.length > 0 && context.data[context.planetIndex].revolution}</span>
					</div>
					<div id='radius' className='planet__facts flex'>
						<p>Radius</p>{' '}
						<span>{context.data && context.data.length > 0 && context.data[context.planetIndex].radius}</span>
					</div>
					<div id='temp' className='planet__facts flex'>
						<p>Average Temp</p>{' '}
						<span>{context.data && context.data.length > 0 && context.data[context.planetIndex].temperature}</span>
					</div>
				</div>
			</div>
		)}
	</Consumer>
);
}

export default Planet;
