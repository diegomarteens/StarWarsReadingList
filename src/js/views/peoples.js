import React from "react";
import useSWR from "swr";
import { useFavorites } from "../store/favorites";

const placeholder = "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
const images ={
	"1": 
		"https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg";
	"2": 
	"https://static.wikia.nocookie.net/canon-star-wars/images/5/56/ThreepioTFA-Fathead_%281%29.png/revision/latest?cb=20151205134916";

}
export async function starWarsApiFetch(path) {
	const response = await fetch("https://www.swapi.tech" + path);
	if (response.status === 200) {
		const payload = await response.json();

		return payload;
	}
	throw new Error();
}

export function Characters() {
	const { data, isValidating } = useSWR("/api/people/", starWarsApiFetch);
	const favorites = useFavorites();

	return (
		<div className="container">
			<div className="row">
				<h1>Characters</h1>
				{data
					? data.results.map((item, index) => {
							return (
								<div className="col-3 col-xs-6" key={index}>
									<div className="card">
										<img
											src={image[item.id] || placeholder }
											className="card-img-top card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">{item.name}</h5>

											<a href={"/people/" + item.uid} className="btn btn-primary">
												Go somewhere
											</a>
											{favorites.favorites.some(fav => {
												return fav.uid === item.uid;
											}) ? (
												<button
													className="btn btn-warning"
													onClick={() => {
														favorites.removeFavorite(item);
													}}>
													Remove favorite
												</button>
											) : (
												<button
													className="btn btn-warning"
													onClick={() => {
														favorites.addFavorite(item);
													}}>
													add favorite
												</button>
											)}
										</div>
									</div>
								</div>
							);
					  })
					: "No data"}
			</div>
		</div>
	);
}
