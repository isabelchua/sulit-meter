import React from "react";
import ShopContext from "../context/shopContext";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import ShareIcon from "@material-ui/icons/Share";
import { Button } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

function ShopBanner({ shop }) {
	const { name, image, description, phone, address, short } = shop;

	//const { id, name } = useParams();

	// console.log(id);
	// console.log(shop);

	// console.log(name);
	return (
		<div className="shop-banner">
			<h2>{name}</h2>
			<h4>{short}</h4>
			<img src={image} alt="food pic" width="200" height="200" />
			<p>{phone}</p>
			<p>{address}</p>
			<p>{description}</p>
			{/* {stars total} */}
			{/* {review - length} */}
			<Button
				variant="contained"
				color="primary"
				className="btn"
				endIcon={<ShareIcon className="btn-icon" />}
			>
				{" "}
				Get Directions
			</Button>
			<Button
				variant="contained"
				color="primary"
				className="btn"
				endIcon={<RoomIcon className="btn-icon" />}
			>
				{" "}
				Share
			</Button>
		</div>
	);
}

export default ShopBanner;
