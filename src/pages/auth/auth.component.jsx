import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './auth.styles.scss';

const AuthPage = () => {
	return (
		<div className="auth">
			<SignIn />
		</div>
	);
};

export default AuthPage;
