import React from "react";
import { useContext } from "react";
import PostContext from "../context/postContext";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";

function Post({ post, user }) {
	//const foodContext = useContext(FoodContext);

	const { name, review, image } = post;
	const { fname, lname, address } = user;

	return (
		<div className="post">
			<Avatar src={user.image} />

			<p>
				<strong>{fname + " " + lname}</strong>
			</p>
			<p>{address}</p>
			<h4>{name}</h4>
			<p>{review}</p>
			<img src={image} alt="food pic" className="img" />
		</div>
	);
}

Post.propTypes = {
	post: PropTypes.object.isRequired
};

export default Post;
