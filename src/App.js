import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => {
	return <h1>Hats page</h1>;
};

const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop/hats" component={HatsPage} />
			</Switch>
		</div>
	);
};

export default App;
