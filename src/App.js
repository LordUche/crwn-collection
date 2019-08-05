import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
	state = { currentUser: null };
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					this.setState({ currentUser: { id: snapshot.id, ...snapshot.data() } });
				});
			} else this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={AuthPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
