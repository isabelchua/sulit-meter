import React from "react";
import ShopBanner from "./ShopBanner";
import Post from "./Post";
import FoodContext from "../context/foodContext";
import { useContext } from "react";

function Shop() {
	const foodContext = useContext(FoodContext);

	const { food } = foodContext;

	return (
		<div>
			<ShopBanner />
			{food.map(foo => (
				<Post key={food.id} foo={foo} />
			))}
		</div>
	);
}

export default Shop;
