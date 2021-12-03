import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Persons } from "./persons";
import { Planets } from "./planets";
import { Vehicles } from "./vehicles";

export const Home = () => (
	<div className="text-center mt-5">
		<Vehicles />
		<Persons />
		<Planets />
	</div>
);
