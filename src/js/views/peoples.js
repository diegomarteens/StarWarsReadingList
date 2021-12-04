import React from "react";
import useSWR from "swr";
import { useFavorites } from "../store/favorites";

const placeholder =
	"https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg";
const images = {
	"1":
		"https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg",
	"2":
		"https://www.hollywoodmegastore.com/pub/media/catalog/product/cache/c9e0b0ef589f3508e5ba515cde53c5ff/2/9/2973_c3po_swix_34.jpg",
	"3":
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9E5XnCLCpdyCdIHvk4sU73Ukq4Xafd9n4PGM8z-zFohijdn-Dfkgq4gXD60_iM0_LCtU&usqp=CAU",
	"4": "https://cdn.singulart.com/artworks/v2/cropped/5877/main/fhd/713867_6ed990ab826a4975c232711091e55cdc.jpeg",

	"5": "https://i.pinimg.com/originals/89/23/8d/89238d20994113e9a40351eb0516f051.jpg",

	"6":
		"https://static.wikia.nocookie.net/frstarwars/images/a/a2/Owen_Lars.jpg/revision/latest/top-crop/width/360/height/450?cb=20160325202556",
	"7": "https://i.pinimg.com/236x/7d/0c/5b/7d0c5b99034033a8d50548a7aa1e64b1.jpg",
	"8": "",
	"9": ""
};
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
										<img src={images[item.uid]} className="card-img-top card-img-top" alt="..." />
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
