import React from "react";
import { useContext } from "react";
import FoodContext from "../context/foodContext";
import PropTypes from "prop-types";

function Post({ food }) {
	const foodContext = useContext(FoodContext);

	const { name } = food;

	return <div>{name}</div>;
}

Post.propTypes = {
	food: PropTypes.object.isRequired
};

export default Post;
