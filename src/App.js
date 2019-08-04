import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={AuthPage} />
			</Switch>
		</div>
	);
};

export default App;
