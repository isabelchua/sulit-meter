import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

//import StarRating from "./StarRating";
import PostContext from "../context/postContext";
import { useParams } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";

function ReviewForm() {
	const postContext = useContext(PostContext);

	const { addPost } = postContext;
	const { id } = useParams();
	const [rating1, setRating] = useState(0);

	const [post, setPost] = useState({
		review: "",
		rating: 0,
		image: "",
		type: "member",
		shopid: id,
		userid: "1"
	});

	const { review, rating, image } = post;

	// useEffect(() => {
	// 	if (current !== null) {
	// 		setPost(current);
	// 	} else {
	// 		setPost({
	// 			review: '',
	// 			stars: 0,
	// 			image: '',
	// 			type: 'member'
	// 		});
	// 	}
	// }, [postContext, stars]);

	const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		//console.log(post);
		addPost(post);
	};

	return (
		<div className="review-form">
			<form onSubmit={onSubmit}>
				<Avatar src="https://imgur.com/LmpYcOR.jpg" />
				<div className="col">
					{/* <StarRating name="stars" value={rating} /> */}
					{/* <Box component="fieldset" mb={1} borderColor="transparent"> */}
					{/* <Typography component="legend">Controlled</Typography> */}
					<Rating
						name="rating"
						value={rating1}
						onChange={(event, newValue) => {
							setRating(newValue);
						}}
					/>
					{/* </Box> */}

					<input
						name="review"
						value={review}
						onChange={onChange}
						placeholder="Write a Review"
					></input>
					<input
						name="image"
						value={image}
						onChange={onChange}
						placeholder="Add image url"
					></input>
				</div>

				<Button
					type="submit"
					variant="contained"
					color="primary"
					className="btn"
					endIcon={<SendIcon className="btn-icon" />}
				>
					{" "}
					Add Review
				</Button>
			</form>
		</div>
	);
}

export default ReviewForm;
