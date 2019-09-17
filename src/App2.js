import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Product from "./components/Product"

class App extends React.Component {
	state = {
		isLogin: false
	}

	render() {
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
					<div class='collapse navbar-collapse' id='navbarNav'>
						<ul class='navbar-nav'>
							<li class='nav-item active'>
								<a class='nav-link' href='#'>
									Home <span class='sr-only'>(current)</span>
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									Profile
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									Products
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/product' component={Product} />
				</Switch>
			</div>
		)
	}
}

export default App
