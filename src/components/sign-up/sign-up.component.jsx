import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';

class SignUp extends Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	handleSubmit = async e => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		try {
			const {user} = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, {displayName})
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {console.error(error.message)}

	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">Sign Up</h2>
				<span>Sign up with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="displayName"
						label="Display Name"
						value={displayName}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name="email"
						type="email"
						label="Email"
						value={email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name="password"
						type="password"
						label="Password"
						value={password}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name="confirmPassword"
						type="password"
						label="Confirm Password"
						value={confirmPassword}
						handleChange={this.handleChange}
						required
					/>
					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
