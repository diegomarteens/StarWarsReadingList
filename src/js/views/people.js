import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { starWarsApiFetch } from "./peoples";

export function Character() {
	const params = useParams();
	const { data } = useSWR("/api/peoples/" + params.id, starWarsApiFetch);
	return (
		<div>
			<h1>{data && data.result.properties.name}</h1>
		</div>
	);
}
