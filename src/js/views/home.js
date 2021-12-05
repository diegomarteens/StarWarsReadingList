import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Characters } from "./peoples";
import { Planets } from "./planets";
import { Vehicles } from "./vehicles";

export const Home = () => (
	<div className="text-center mt-5 bgmain">
		<Vehicles />
		<Characters />
		<Planets />
	</div>
);
