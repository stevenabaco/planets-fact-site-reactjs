//Import modules
import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
//Import dependencies
import Layout from './containers/Layout/Layout';
import Planet from './components/Planets/Planet';

//Import CSS files
import './App.css';

function App() {
	return (
		<Router>
			<Layout>
        <Switch>
          <Route exact path="/earth">
            <Planet planet={"Earth"}/>
          </Route>
					<Route exact path="/">
						<Redirect to="/earth" />
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
