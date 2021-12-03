import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Person } from "./views/person";
import { Persons } from "./views/persons";
import { Planet } from "./views/planet";
import { Planets } from "./views/planets";
import { Vehicle } from "./views/vehicle";
import { Vehicles } from "./views/vehicles";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/persons">
							<Persons />
						</Route>
						<Route exact path="/person/:theid">
							<Person />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route exact path="/vehicle/:theid">
							<Vehicle />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/planet/:theid">
							<Planet />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
