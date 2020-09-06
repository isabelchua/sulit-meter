import React, { useContext } from "react";
import ShopBanner from "./ShopBanner";
import Post from "./Post";
import PostContext from "../context/postContext";
import ShopContext from "../context/shopContext";
import UserContext from "../context/userContext";
import ReviewForm from "./ReviewForm";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

function Shop() {
	const postContext = useContext(PostContext);
	const shopContext = useContext(ShopContext);
	const userContext = useContext(UserContext);

	const { post } = postContext;
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
	//console.log(post.shopid);
	return (
		<div className="main-wrap">
			<div className="col1">
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>

				<ShopBanner shop={shop.find(obj => obj.id === Number(id))} />
			</div>
			<div className="col2">
				<div className="row">
					<SearchBar />
					<NavBar />
				</div>
				<ReviewForm />

				<div className="sort">
					<p className="right">Sort by Highest Rated</p>
				</div>
				{post
					.filter(foo => foo.shopid === Number(id))
					.map(foo => (
						<Post
							key={foo}
							post={foo}
							user={user.find(user => foo.userid === user.id)}
						/>
					))}
			</div>
		</div>
	);
}

export default Shop;
