import React from "react";

function ShopCard({ shop }) {
	const { name, address, img } = shop;

	return (
		<div>
			{name}
			{img}
			{address}
		</div>
	);
}

export default ShopCard;
