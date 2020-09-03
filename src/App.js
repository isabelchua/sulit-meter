import React from "react";

import "./App.css";
import Shop from "./components/shop/Shop";
import FoodState from "./components/context/FoodState";

function App() {
	return (
		<FoodState>
			<div className="App">
				<Shop />
			</div>
		</FoodState>
	);
}

export default App;
