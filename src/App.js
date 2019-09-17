import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import App2 from "./App2"

class App extends React.Component {
	state = {
		isLogin: false
	}

	login = () => {
		this.setState({ isLogin: true })
	}

	logout = () => {
		this.setState({ isLogin: false })
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route
						exact
						path='/login'
						render={() => (
							<Login
								login={this.login}
								isLogin={this.state.isLogin}
							/>
						)}
					/>
					<App2 isLogin={this.state.isLogin} />
					<Route render={() => <div>404</div>} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
