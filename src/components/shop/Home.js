import React, { useContext } from "react";
import ShopContext from "../context/shopContext";
import ShopCard from "./ShopCard";

function Home() {
	const shopContext = useContext(ShopContext);

	const { shop } = shopContext;

	return (
		<>
			{shop.map(sho => (
				<ShopCard key={sho.id} shop={sho} />
			))}
		</>
	);
}

export default Home;
