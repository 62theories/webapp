import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Home from "./components/Home"
import Product from "./components/Product"
import { Link, withRouter } from "react-router-dom"
import data from "./file/data"
import View from "./components/View"

class App2 extends React.Component {
	state = {
		isLogin: false
	}

	render() {
		if (this.props.isLogin)
			return (
				<div>
					<nav class='navbar navbar-expand-lg navbar-light bg-light'>
						<button
							class='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span class='navbar-toggler-icon'></span>
						</button>

						<div
							class='collapse navbar-collapse d-flex justify-content-between'
							id='navbarNav'
						>
							<div>
								<ul class='navbar-nav'>
									<li class='nav-item active'>
										<a
											class='nav-link'
											href='#'
											onClick={e => {
												e.preventDefault()
												this.props.history.push("/")
											}}
										>
											Profile{" "}
											<span class='sr-only'>
												(current)
											</span>
										</a>
									</li>
									<li class='nav-item'>
										<a
											class='nav-link'
											href='#'
											onClick={e => {
												e.preventDefault()
												this.props.history.push(
													"/product"
												)
											}}
										>
											Products
										</a>
									</li>
								</ul>
							</div>

							<div onClick={() => this.props.logout()}>
								{/* <p>
									<span class='glyphicon glyphicon-off'></span>
								</p> */}
								<i
									class='fa fa-sign-out'
									aria-hidden='true'
								></i>
							</div>
						</div>
					</nav>
					<Switch>
						<Route
							exact
							path='/'
							render={() => (
								<Home
									userValue={this.props.userValue}
									changeUserValue={this.props.changeUserValue}
									changePassword={this.props.changePassword}
								/>
							)}
						/>
						<Route
							exact
							path='/product'
							render={() => (
								<Product
									datas={data}
									headers={["name", "price"]}
								/>
							)}
						/>
						<Route
							exact
							path='/product/view/:id'
							render={() => <View />}
						/>
					</Switch>
				</div>
			)
		else return <Redirect to='/login' />
	}
}

export default withRouter(App2)
