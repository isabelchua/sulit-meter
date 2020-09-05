import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Shop from "./components/shop/Shop";
import FoodState from "./components/context/FoodState";
import ShopState from "./components/context/ShopState";
import UserState from "./components/context/UserState";
import Home from "./components/shop/Home";

function App() {
	return (
		<Router>
			<Switch>
				<UserState>
					<ShopState>
						<FoodState>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/shop/:id/:name">
								<Shop />
							</Route>
							{/* <Shop /> */}
						</FoodState>
					</ShopState>
				</UserState>
			</Switch>
		</Router>
	);
}

export default App;
