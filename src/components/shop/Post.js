import React from "react";
import { useContext } from "react";
import FoodContext from "../context/foodContext";
import PropTypes from "prop-types";

function Post({ food }) {
	//const foodContext = useContext(FoodContext);

	const { name, review, image } = food;

	return (
		<div className="post">
			<h4>{name}</h4>
			<p>{review}</p>
			<img src={image} alt="food pic" width="100" height="50" />
		</div>
	);
}

Post.propTypes = {
	food: PropTypes.object.isRequired
};

export default Post;
