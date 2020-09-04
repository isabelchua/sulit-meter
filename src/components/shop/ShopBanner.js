import React from "react";
import ShopContext from "../context/shopContext";
import PropTypes from "prop-types";

function ShopBanner({ shop }) {
	const { name, image, description, phone, address, short } = shop;
	return (
		<div className="post">
			<h4>{name}</h4>
			<h4>{short}</h4>
			<img src={image} alt="food pic" width="200" height="200" />
			<p>{phone}</p>
			<p>{address}</p>
			<p>{description}</p>
			{/* {stars total} */}
			{/* {review - length} */}
			<button>Get Directions</button>
			<button>Share</button>
		</div>
	);
}

export default ShopBanner;
