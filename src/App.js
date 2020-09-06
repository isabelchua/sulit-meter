import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Shop from "./components/shop/Shop";
import PostState from "./components/context/PostState";
import ShopState from "./components/context/ShopState";
import UserState from "./components/context/UserState";
import Home from "./components/shop/Home";

function App() {
	return (
		<Router>
			<Switch>
				<UserState>
					<ShopState>
						<PostState>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/shop/:id/:name">
								<Shop />
							</Route>
						</PostState>
					</ShopState>
				</UserState>
			</Switch>
		</Router>
	);
}

export default App;
