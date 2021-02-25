import React from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button.component/custom-button.component';
import { googleSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (err) {
			console.error(err);
		}
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { googleSignInStart } = this.props;
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span className='title'>
					Sign in with your email and password
				</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton
							type='button'
							onClick={googleSignInStart}
							isGoogleSignIn
						>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
