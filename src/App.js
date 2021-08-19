//Import modules
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Import dependencies
import Layout from './containers/Layout/Layout'


//Import CSS files
import './App.css';

function App() {
  return (
    <Router>
      <Layout>

      </Layout>
    </Router>
  )
}

export default App;
