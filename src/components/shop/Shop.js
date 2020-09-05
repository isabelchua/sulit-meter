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
	//console.log(user);

	const { id, name } = useParams();
	//.find(shop => shop.id === id)
	console.log();
	console.log(id + 1);
	console.log(9);

	// console.log(name);
	// shop.find(shop => shop.id === id)
	//.find(shop => shop.id === id)
	//console.log(id);
	//console.log(shop.map(sho => sho.id));
	// console.log(shop.map(x => shop.find(obj => obj.id === id)));
	let x = 9;
	let y = id;
	console.log(x);
	console.log(shop.find(obj => obj.id === 9));
	console.log(shop.find(obj => obj.id === Number(id)));
	console.log(shop.find(obj => obj.id === y));

	// shop.find(shop => shop.id === id));

	return (
		<div className="main-wrap">
			<div className="col1">
				<img src="../../img/logo.png" alt="logo" />
				{/* .find(sho => sho.id ===  */}
				{/* {shop.map(sho => ( */}
				<ShopBanner shop={shop.find(obj => obj.id === Number(id))} />
				{/* ))} */}
				{/* <ShopBanner shop={shop.map(shop => shop)} /> */}
				{/* {shop.map(sho => (
					<ShopBanner
						key={sho.id}
						// id={id}
						shop={shop.find(shop => shop.id === id)}
					/>
				))} */}
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
