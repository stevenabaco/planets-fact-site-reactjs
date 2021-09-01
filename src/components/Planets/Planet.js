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
						{context.category === 'Surface' ? (
							<div id='summary__surface__container'>
								<img
									id='summary__img'
									src={context.data[context.planetIndex].images.planet}
									alt='Earth'
								/>
								<img
									id='surface__img'
									src={context.data[context.planetIndex].images.geology}
									alt={context.currentPlanet}
								/>
							</div>
						) : context.category === 'Structure' ? (
							<img
								src={context.data[context.planetIndex].images.internal}
								alt={context.data[context.planetIndex].name}
							/>
						) : (
							<img
								src={context.data[context.planetIndex].images.planet}
								alt={context.data[context.planetIndex].name}
							/>
						)}
					</div>
					<div id='planet__content'>
						<h1>{context.currentPlanet}</h1>
						{
							<p>
								{context.category === 'Overview' &&
									context.data[2].overview.content}
							</p>
						}
						{
							<p>
								{context.category === 'Structure' &&
									context.data[context.planetIndex].structure.content}
							</p>
						}
						{
							<p>
								{context.category === 'Surface' &&
									context.data[context.planetIndex].geology.content}
							</p>
						}
						{context.category === 'Overview' ? (
							<p>
								Source:{' '}
								<a href={context.data[context.planetIndex].overview.source}>
									Wikipedia
								</a>
							</p>
						) : context.category === 'Structure' ? (
							<p>
								Source:{' '}
								<a href={context.data[context.planetIndex].structure.source}>
									Wikipedia
								</a>
							</p>
						) : (
							<p>
								Source:{' '}
								<a href={context.data[context.planetIndex].geology.source}>
									Wikipedia
								</a>
							</p>
						)}
					</div>
					<div id='facts' className='flex'>
						<div id='rotation' className='planet__facts flex'>
							<p>Rotation Time</p>
							<span>{context.data[context.planetIndex].rotation}</span>
						</div>
						<div id='revolution' className='planet__facts flex'>
							<p>Revolution Time</p>
							<span>{context.data[context.planetIndex].revolution}</span>
						</div>
						<div id='radius' className='planet__facts flex'>
							<p>Radius</p>
							<span>{context.data[context.planetIndex].radius}</span>
						</div>
						<div id='temp' className='planet__facts flex'>
							<p>Average Temp</p>
							<span>{context.data[context.planetIndex].temperature}</span>
						</div>
					</div>
				</div>
			)}
		</Consumer>
	);
}

export default Planet;
