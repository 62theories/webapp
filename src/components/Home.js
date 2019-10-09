import React from "react"

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: this.props.userValue,
			currentPassword: "",
			newPassword: "",
			confirmPassword: ""
		}
	}

	handleChange = ({ target }) => {
		this.setState({
			user: {
				...this.state.user,
				[target.name]: target.value
			}
		})
	}

	handleChange2 = ({ target }) => {
		this.setState({
			[target.name]: target.value
		})
	}

	onSubmitPassword = e => {
		e.preventDefault()
		if (this.state.newPassword === this.state.confirmPassword) {
			this.props.changePassword(
				this.props.userValue,
				this.state.newPassword,
				this.state.currentPassword
			)
		}
	}

	render() {
		return (
			<div>
				<div className='container-fluid'>
					<div class='card'>
						<div class='card-body'>
							<form
								onSubmit={e => {
									e.preventDefault()
									this.props.changeUserValue(this.state.user)
								}}
							>
								<div class='form-group'>
									<label for='exampleFormControlInput1'>
										Name
									</label>
									<input
										type='text'
										class='form-control'
										id='exampleFormControlInput1'
										name='name'
										value={this.state.user.name}
										onChange={this.handleChange}
										required
									/>
								</div>
								<div class='form-group'>
									<label for='exampleFormControlInput1'>
										Surname
									</label>
									<input
										type='text'
										class='form-control'
										id='exampleFormControlInput1'
										name='surname'
										value={this.state.user.surname}
										onChange={this.handleChange}
										required
									/>
								</div>
								<div class='form-group'>
									<label for='exampleFormControlInput1'>
										Tel
									</label>
									<input
										type='text'
										class='form-control'
										id='exampleFormControlInput1'
										name='tel'
										value={this.state.user.tel}
										onChange={this.handleChange}
										required
									/>
								</div>
								<div className='d-flex justify-content-end'>
									<button className='btn btn-primary'>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className='container-fluid'>
					<div class='card'>
						<div class='card-body'>
							<form onSubmit={this.onSubmitPassword}>
								<div class='form-group'>
									<label for='exampleFormControlInput1'>
										old password
									</label>
									<input
										type='password'
										class='form-control'
										id='exampleFormControlInput1'
										name='currentPassword'
										value={this.state.currentPassword}
										onChange={this.handleChange2}
										required
									/>
								</div>
								<div class='form-group'>
									<label for='exampleFormControlInput1'>
										new password
									</label>
									<input
										type='password'
										class='form-control'
										id='exampleFormControlInput1'
										name='newPassword'
										value={this.state.newPassword}
										onChange={this.handleChange2}
										required
									/>
								</div>
								<div class='form-group'>
									<label for='exampleFormControlInput1'>
										confirm password
									</label>
									<input
										type='password'
										class='form-control'
										id='exampleFormControlInput1'
										name='confirmPassword'
										value={this.state.confirmPassword}
										onChange={this.handleChange2}
										required
									/>
								</div>
								<div className='d-flex justify-content-end'>
									<button className='btn btn-primary'>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
