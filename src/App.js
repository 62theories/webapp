import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import App2 from "./App2"

class App extends React.Component {
	state = {
		isLogin: false,
		login: [
			{
				id: 1,
				username: "admin",
				password: "1234",
				name: "Nattawat",
				surname: "Songsom",
				tel: "0814783587"
			}
		],
		user: {
			id: "",
			name: "",
			surname: "",
			tel: ""
		}
	}

	login = () => {
		this.setState({ isLogin: true })
	}

	logout = () => {
		this.setState({
			isLogin: false,
			user: {
				id: "",
				name: "",
				surname: "",
				tel: ""
			}
		})
	}

	changeUValue = payload => {
		this.setState({
			user: payload
		})
	}

	changeUserValue = payload => {
		let arr = this.state.login.filter(item => {
			if (payload.id !== item.id) {
				return true
			}
			return false
		})
		this.setState({
			login: [...arr, payload],
			user: payload
		})
	}

	changePassword = (user, password, oldPassword) => {
		let found = false
		let arr = this.state.login.map(item => {
			if (user.id !== item.id) {
				return item
			} else {
				if (oldPassword === item.password) {
					found = true
					return {
						...item,
						password: password
					}
				} else {
					return item
				}
			}
		})
		if (found) {
			this.setState({ login: arr })
			this.logout()
		}
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
								check={this.state.login}
								changeUValue={this.changeUValue}
							/>
						)}
					/>
					<App2
						isLogin={this.state.isLogin}
						logout={this.logout}
						userValue={this.state.user}
						changeUserValue={this.changeUserValue}
						changePassword={this.changePassword}
					/>
					<Route render={() => <div>404</div>} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
