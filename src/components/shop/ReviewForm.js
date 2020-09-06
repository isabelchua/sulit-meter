import React from "react";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import { useState } from "react";
import StarRating from "./StarRating";

// changeRating ( newRating, name ) {
// 	this.setState({
// 	  rating: newRating
// 	});
//  };

function ReviewForm() {
	// const [rating, setRating] = useState(1);

	// const handleClick = r => setRating(r => r + rating);

	return (
		<div className="review-form">
			<form>
				<Avatar src="https://imgur.com/LmpYcOR.jpg" />
				<input placeholder="Write a Review"></input>

				{/* <StarRatingComponent
					name="rate1"
					starCount={5}
					value={rating}
					onStarClick={handleClick}
				/> */}

				<StarRating />

				<Button
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
