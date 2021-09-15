//Import modules
import React, { useState } from 'react';
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
						<Route exact basename={process.env.PUBLIC_URL}>
							<Redirect to='/earth' />
						</Route>
					</Switch>
				</Layout>
			</Router>
		</Provider>
	);
}

export default App;
