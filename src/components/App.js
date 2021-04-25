import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import UserDetail from "./UserDetail";
import Alert from "./Alert";
import GithubState from "../context/GithubState";

const App = () => {
	return (
		<GithubState>
			<BrowserRouter>
				<Navbar title="Github Finder" icon="fab fa-github-alt" />
				<Alert />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/user/:login" component={UserDetail} />
				</Switch>
			</BrowserRouter>
		</GithubState>
	);
}

export default App
