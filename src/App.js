import React from "react";

import "./App.scss";
import Shop from "./components/shop/Shop";
import FoodState from "./components/context/FoodState";
import ShopState from "./components/context/ShopState";
import UserState from "./components/context/UserState";

function App() {
	return (
		<UserState>
			<ShopState>
				<FoodState>
					<Shop />
				</FoodState>
			</ShopState>
		</UserState>
	);
}

export default App;
