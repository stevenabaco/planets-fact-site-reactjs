//Import modules
import React, { useEffect, useState } from 'react';
import { PlanetData } from './data';
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

function App() {
	const [data, setData] = useState(PlanetData);
	const [currentPlanet, setCurrentPlanet] = useState('Earth');
	const [planetIndex, setPlanetIndex] = useState(2);
	const [category, setCategory] = useState('Overview');


	// Use fetch to consume local JSON data from API -
	// const getData = () => {
	// 	fetch('./data.js', {
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Accept: 'application/json',
	// 		},
	// 	})
	// 		.then(function (response) {
	// 			console.log(response);
	// 			return response.json();
	// 		})
	// 		.then(function (myJson) {
	// 			console.log(myJson);
	// 			setData(myJson);
	// 		});
	// };
	// // Runs get data on first load
	// useEffect(() => {
	// 	getData();
	// }, []);

	return (
		<Provider
			value={{
				data,
				setData,
				currentPlanet,
				setCurrentPlanet,
				planetIndex,
				setPlanetIndex,
				category,
				setCategory,
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
						<Route exact path='/venus'>
							<Planet />
						</Route>
						<Route exact path='/mars'>
							<Planet />
						</Route>
						<Route exact path='/jupiter'>
							<Planet />
						</Route>
						<Route exact path='/saturn'>
							<Planet />
						</Route>
						<Route exact path='/uranus'>
							<Planet />
						</Route>
						<Route exact path='/neptune'>
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
