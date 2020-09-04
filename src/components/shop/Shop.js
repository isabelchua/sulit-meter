import React, { useContext } from "react";
import ShopBanner from "./ShopBanner";
import Post from "./Post";
import FoodContext from "../context/foodContext";
import ShopContext from "../context/shopContext";

function Shop() {
	const foodContext = useContext(FoodContext);
	const shopContext = useContext(ShopContext);

	const { food } = foodContext;
	const { shop } = shopContext;

	return (
		<div className="main-wrap">
			<div className="col1">
				{shop.map(sho => (
					<ShopBanner key={sho.id} shop={sho.id} />
				))}
			</div>
			<div className="col2">
				{food.map(food => (
					<Post key={food.id} food={food} />
				))}
			</div>
		</div>
	);
}

export default Shop;
