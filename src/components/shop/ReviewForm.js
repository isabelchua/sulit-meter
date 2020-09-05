import React from "react";
import Button from "@material-ui/core/Button";

import SendIcon from "@material-ui/icons/Send";

function ReviewForm() {
	return (
		<div className="review-form">
			<form>
				<input placeholder="Write a Review"></input>
				<Button
					variant="contained"
					color="primary"
					className="btn"
					endIcon={<SendIcon className="btn-icon" />}
				>
					{" "}
					Post
				</Button>
			</form>
		</div>
	);
}

export default ReviewForm;
