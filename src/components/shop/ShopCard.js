import React from "react";
import { Router, Link, Switch, Route } from "react-router-dom";
import Shop from "./Shop";

function ShopCard({ shop }) {
	const { name, address, image, id } = shop;

	return (
		// <Router>
		<Link to={`shop/${id}/${name}`}>
			<div className="card">
				<p>{name}</p>
				<img src={image} alt={name + " image"} />
				<p>{address}</p>
				<p>4 reviews</p>
			</div>
		</Link>
		/* <Switch>
				<Route exact path={`shop/${id}/${name}`}></Route>
				<Link to={`shop/${id}/${name}`} />
				<Route exact path="/:id/:name" component={Shop} />
			</Switch>
		</Router> */
	);
}

export default ShopCard;
