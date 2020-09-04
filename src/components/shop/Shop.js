import React, { useContext } from "react";
import ShopBanner from "./ShopBanner";
import Post from "./Post";
import FoodContext from "../context/foodContext";
import ShopContext from "../context/shopContext";
import UserContext from "../context/userContext";
import ReviewForm from "./ReviewForm";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

function Shop() {
	const foodContext = useContext(FoodContext);
	const shopContext = useContext(ShopContext);
	const userContext = useContext(UserContext);

	const { food } = foodContext;
	const { shop } = shopContext;
	const { user } = userContext;
	console.log(user);

	return (
		<div className="main-wrap">
			<div className="col1">
				<img src="../../img/logo.png" alt="logo" />
				{shop.map(sho => (
					<ShopBanner key={sho.id} shop={sho.id} />
				))}
			</div>
			<div className="col2">
				<div className="row">
					<SearchBar />
					<NavBar />
				</div>
				<ReviewForm />

				<p className="right">Sort by Highest Rated</p>
				{food.map(food => (
					<Post
						key={food.id}
						food={food}
						user={user.find(user => food.userid === user.id)}
					/>
				))}
			</div>
		</div>
	);
}

export default Shop;
