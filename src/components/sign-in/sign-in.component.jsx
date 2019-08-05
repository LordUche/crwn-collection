import React, { Component } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

class SignIn extends Component {
	state = { email: '', password: '' };

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;

		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						label="email"
						value={email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						label="password"
						value={password}
						handleChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
