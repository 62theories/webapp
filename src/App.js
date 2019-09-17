import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import App2 from "./App2"

class App extends React.Component {
	state = {
		isLogin: false
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/login' component={Login} />
					<App2 />
					<Route render={() => <div>404</div>} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
