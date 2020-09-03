import React, { useReducer } from "react";
import FoodContext from "./foodContext";

import foodReducer from "./foodReducer";

const FoodState = props => {
	const initialState = {
		food: [
			{
				id: 1,
				name: "Gyudon",
				shop: 3,
				image: ""
			},
			{
				id: 2,
				name: "California Maki",
				shop: 3,
				image: ""
			},
			{
				id: 3,
				name: "Bulalo",
				shop: 1,
				image: ""
			}
		],
		current: null,
		filtered: null
	};

	const [state, dispatch] = useReducer(foodReducer, initialState);

	return (
		<FoodContext.Provider
			value={{
				food: state.food,
				state
			}}
		>
			{props.children}
		</FoodContext.Provider>
	);
};
export default FoodState;
