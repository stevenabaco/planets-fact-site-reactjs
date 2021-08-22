//Import Modules
import React, { useState } from 'react';
//Import Dependencies
import '../../';
//Import CSS
import './Planet.css';
//Import Images
import earthSummaryImg from '../../assets/planet-earth.svg';
import earthStructureImg from '../../assets/planet-earth-internal.svg';
import earthSurfaceImg from '../../assets/geology-earth.png';

function Planet(props) {
	//Set state hooks
	const [active, setActive] = useState(false);
	const [defaultActive, setDefaultActive] = useState(true);
  const contentTabs = [
    {
      id: '1',
      name: 'content',
      label: 'Overview',
      value: 'overview',
      defaultChecked: true
    },
    {
      id: '2',
      name: 'content',
      label: 'Structure',
      value: 'structure',
      defaultChecked: false
    },
    {
      id: '3',
      name: 'content',
      label: 'Surface',
      value: 'surface',
      defaultChecked: false
    }
  ]
	// Create helpers and handlers
  const handleClick = (e) => {
    
  }
	return (
		<div id='planet__wrapper' planet={props.planet}>
			<div id='radio__toolbar'>
        {contentTabs.map(({ id, name, label, value, defaultChecked }) => (
          
          <div key={id}>
            <input type='radio'
              key={id}
              id={id}
              name={name}
              value={value.toString()}
              defaultChecked={defaultChecked}
              className={props.planet}
              onChange={e=>console.log(value)}
              tabIndex={+id}
            />

            <label htmlFor={id}>{label}</label>
          </div>
        ))}
				
			</div>
			<div id='planet__img'>
				<img src={earthSummaryImg} alt='earth'></img>
			</div>
			<div id='planet__content'>
				<h1>{props.planet}</h1>
				<p>
					Third planet from the Sun and the only known planet to harbor life.
					About 29.2% of Earth's surface is land with remaining 70.8% is covered
					with water. Earth's distance from the Sun, physical properties and
					geological history have allowed life to evolve and thrive.
				</p>
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
