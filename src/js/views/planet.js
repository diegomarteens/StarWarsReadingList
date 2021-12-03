import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { starWarsApiFetch } from "./planets";

export function Planet() {
	const params = useParams();
	const { data } = useSWR("/api/planet/" + params.id, starWarsApiFetch);
	return (
		<div>
			{" "}
			<h1>SINGLE PLANET PAGE</h1>
		</div>
	);
}
