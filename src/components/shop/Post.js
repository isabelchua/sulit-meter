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
			<div className="user-profile-post">
				<Avatar src={user.image} />
				<div className="user-details-post">
					<p>
						<strong>{fname + " " + lname}</strong>
					</p>
					<p>{address}</p>
				</div>
			</div>
			<div className="post-content">
				{/* <h4>{name}</h4> */}
				<p>{review}</p>
				<img src={image} alt="food pic" className="img" />
			</div>
		</div>
	);
}

Post.propTypes = {
	post: PropTypes.object.isRequired
};

export default Post;
