import React, { useContext } from "react";
import ShopBanner from "./ShopBanner";
import Post from "./Post";
import FoodContext from "../context/foodContext";
import ShopContext from "../context/shopContext";
import UserContext from "../context/userContext";
import ReviewForm from "./ReviewForm";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

function Shop() {
	const foodContext = useContext(FoodContext);
	const shopContext = useContext(ShopContext);
	const userContext = useContext(UserContext);

	const { food } = foodContext;
	const { shop } = shopContext;
	const { user } = userContext;

	const { id, name } = useParams();

	// console.log(
	// 	food
	// 		.filter(food => food.shopid === Number(id).map)
	// 		.map(post => {
	// 			post;
	// 		})
	// );

	// 	how do I use filter on a component?
	// `posts.filter(post => <Post  {post} />)`

	// foo.includes(Number(id))
	// === Number(id)
	console.log(food.shopid);
	return (
		<div className="main-wrap">
			<div className="col1">
				<img src="../../img/logo.png" alt="logo" />

				<ShopBanner shop={shop.find(obj => obj.id === Number(id))} />
			</div>
			<div className="col2">
				<div className="row">
					<SearchBar />
					<NavBar />
				</div>
				<ReviewForm />

				<p className="right">Sort by Highest Rated</p>

				{food
					.filter(foo => foo.shopid === Number(id))
					.map(foo => (
						<Post
							key={foo}
							food={foo}
							user={user.find(user => foo.userid === user.id)}
						/>
					))}

				{/* {food.map(foo => (
					<Post
						key={food}
						food={foo}
						user={user.find(user => food.userid === user.id)}
					/>
				))} */}
			</div>
		</div>
	);
}

export default Shop;
