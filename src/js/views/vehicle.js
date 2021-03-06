import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { starWarsApiFetch } from "./vehicles";

export function Vehicle() {
	const params = useParams();
	const { data } = useSWR("/vehicles/:id/" + params.id, starWarsApiFetch);
	return (
		<div>
			<h1>{data && data.result.properties.name}</h1>
		</div>
	);
}
