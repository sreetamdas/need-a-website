// let's go!
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

// import ProfileEdit from "./components/ProfileEdit"

import registerServiceWorker from "./registerServiceWorker";

const Root = () => {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Signup} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/settings" component={Signup} />
				{/* <PrivateRoute path="/add" component={ProfileEdit} /> */}
				<Route exact path="/:user" component={App} />
				{/* <Route component={NotFound} /> */}
			</Switch>
		</BrowserRouter>
	);
};

render(<Root />, document.getElementById("root"));

registerServiceWorker();
