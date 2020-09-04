import React from "react";

import "./App.scss";
import Shop from "./components/shop/Shop";
import FoodState from "./components/context/FoodState";

function App() {
	return (
		<FoodState>
			<Shop />
		</FoodState>
	);
}

export default App;
