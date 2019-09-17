import React from "react"
import { Redirect, withRouter } from "react-router-dom"
import "../css/login.css"
import check from "../file/login"

class Login extends React.Component {
	state = {
		username: "",
		password: ""
	}

	onSubmit = e => {
		e.preventDefault()
		let found = false
		check.forEach(item => {
			console.log(item)
			if (
				item.username === this.state.username &&
				item.password === this.state.password
			) {
				found = true
			}
		})
		if (found === true) {
			this.props.login()
		}
	}

	render() {
		if (this.props.isLogin) {
			return <Redirect to='/' />
		} else {
			return (
				<div>
					<div id='login'>
						<h3 class='text-center text-white pt-5'>
							Welcome to WBcafe`
						</h3>
						<div class='container'>
							<div
								id='login-row'
								class='row justify-content-center align-items-center'
							>
								<div id='login-column' class='col-md-6'>
									<div id='login-box' class='col-md-12'>
										<form
											id='login-form'
											class='form'
											onSubmit={this.onSubmit}
										>
											<h3 class='text-center text-info'>
												Login
											</h3>
											<div class='form-group'>
												<label
													for='username'
													class='text-info'
												>
													Username:
												</label>
												<br />
												<input
													type='text'
													name='username'
													id='username'
													class='form-control'
													value={this.state.username}
													onChange={({ target }) => {
														this.setState({
															[target.name]:
																target.value
														})
													}}
												/>
											</div>
											<div class='form-group'>
												<label
													for='password'
													class='text-info'
												>
													Password:
												</label>
												<br />
												<input
													type='text'
													name='password'
													id='password'
													class='form-control'
													value={this.state.password}
													onChange={({ target }) => {
														this.setState({
															[target.name]:
																target.value
														})
													}}
												/>
											</div>
											<div class='form-group'>
												<button
													type='submit'
													name='submit'
													class='btn btn-info btn-md'
												>
													login
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}

export default withRouter(Login)
