import React from "react";
import { useContext } from "react";
import FoodContext from "../context/foodContext";

function Post() {
	const foodContext = useContext(FoodContext);

	const { food } = foodContext;

	return <div>{food}</div>;
}

export default Post;
