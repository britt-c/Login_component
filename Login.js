import React from 'react'

const Login = (props) => {
	return (
		<div>
			<form>
				<label for="email">Email</label>
				<input type="email" id="email" name="email" />
				<br />
				<label for="password">Password</label>
				<input type="password" id="pwd" name="pwd" />
				<br />
				<input type="button" value="Sign in">
			</form>
		</div>
	)}

export default Login
