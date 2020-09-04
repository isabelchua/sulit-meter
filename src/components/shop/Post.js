import React from "react";
import { useContext } from "react";
import FoodContext from "../context/foodContext";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";

function Post({ food, user }) {
	//const foodContext = useContext(FoodContext);

	const { name, review, image } = food;
	const { fname, lname, address } = user;

	return (
		<div className="post">
			<Avatar src={user.image} />

			<p>{fname + " " + lname}</p>
			<p>{address}</p>
			<h4>{name}</h4>
			<p>{review}</p>
			<img src={image} alt="food pic" className="img" />
		</div>
	);
}

Post.propTypes = {
	food: PropTypes.object.isRequired
};

export default Post;
