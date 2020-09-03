import React, { useContext } from "react";
import ShopBanner from "./ShopBanner";
import Post from "./Post";
import FoodContext from "../context/foodContext";

function Shop() {
	const foodContext = useContext(FoodContext);

	const { food } = foodContext;

	return (
		<div>
			<ShopBanner />
			{food.map(food => (
				<Post key={food.id} food={food} />
			))}
		</div>
	);
}

export default Shop;
