//Import modules
import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from 'react-router-dom';
//Import dependencies
import { Provider } from './components/Context';
import Layout from './containers/Layout/Layout';
import Planet from './components/Planets/Planet';

//Import CSS files
import './App.css';
//Import Images
import earthSummaryImg from './assets/planet-earth.svg';
import earthStructureImg from './assets/planet-earth-internal.svg';
import earthSurfaceImg from './assets/geology-earth.png';
import jupiterSummaryImg from './assets/planet-jupiter.svg';
import jupiterStructureImg from './assets/planet-jupiter-internal.svg';
import jupiterSurfaceImg from './assets/geology-jupiter.png';
import marsSummaryImg from './assets/planet-mars.svg';
import marsStructureImg from './assets/planet-mars-internal.svg';
import marsSurfaceImg from './assets/geology-mars.png';
import mercurySummaryImg from './assets/planet-mercury.svg';
import mercuryStructureImg from './assets/planet-mercury-internal.svg';
import mercurySurfaceImg from './assets/geology-mercury.png';

function App() {
	const [data, setData] = useState([]);
	const [currentPlanet, setCurrentPlanet] = useState('Earth');
	const [planetIndex, setPlanetIndex] = useState(2);
	const [category, setCategory] = useState('Overview');
	const [planetImg, setPlanetImg] = useState(earthSummaryImg);

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
	// Runs get data on first load
	useEffect(() => {
		getData();
	}, []);

	return (
		<Provider
			value={{
				// State
				data,
				setData,
				currentPlanet,
				setCurrentPlanet,
				planetIndex,
				setPlanetIndex,
				planetImg,
				setPlanetImg,
				category,
				setCategory,
				// Images
				earthSummaryImg,
				earthStructureImg,
				earthSurfaceImg,
				mercurySummaryImg,
				mercuryStructureImg,
				mercurySurfaceImg,

			}}>
			<Router>
				<Layout>
					<Switch>
						<Route exact path='/earth'>
							<Planet />
						</Route>
						<Route exact path='/mercury'>
							<Planet />
						</Route>
						<Route exact path='/'>
							<Redirect to='/earth' />
						</Route>
					</Switch>
				</Layout>
			</Router>
		</Provider>
	);
}

export default App;
