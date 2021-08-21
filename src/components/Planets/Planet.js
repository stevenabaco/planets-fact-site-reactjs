//Import Modules
import React from "react";
//Import Dependencies

//Import CSS
import './Planet.css';

function Planet(props) {
  return (
		<div id='planet__wrapper' planet={props.planet}>
      <div id='content__toolbar__wrapper'>
        <ul id='content__toolbar'>
          <li className="active">Overview</li>
          <li>Structure</li>
          <li>Surface</li>
        </ul>
      </div>
		</div>
	);
}

export default Planet;