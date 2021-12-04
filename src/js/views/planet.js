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
			<div className="container-fluid">
				<div className="row">
					<div className="col-6 mx-auto border px-0">
						<div className="row">
							<div className="col-6">
								<img className="w-100" src="http://via.placeholder.com/640x360" alt="Card image cap" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
