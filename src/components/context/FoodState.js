import React, { useReducer } from "react";
import FoodContext from "./foodContext";
import foodReducer from "./foodReducer";

const FoodState = props => {
	const initialState = {
		food: [
			{
				id: 1,
				name: "Cake",
				shop: 5,
				image: "https://i.imgur.com/w6igL9E.jpg",
				review: "Soooo good!"
			},
			{
				id: 2,
				name: "California Maki",
				shop: 3,
				image: "",
				review: "Soooo good!"
			},
			{
				id: 3,
				name: "Bulalo",
				shop: 1,
				image: "",
				review: "Soooo good!"
			},
			{
				id: 4,
				name: "Humba",
				shop: 4,
				image: "https://i.imgur.com/5Tuw7mv.jpg",
				review: "Soooo good!"
			},
			{
				id: 5,
				name: "Shrimps",
				shop: 1,
				image: "https://i.imgur.com/pLPZ3vM.jpg",
				review: "Soooo good!"
			},
			{
				id: 6,
				name: "Triple chocolate cheesecake",
				shop: 1,
				image: "https://i.imgur.com/fWn2enF.jpg",
				review: "Soooo good!"
			}
		],
		current: null,
		filtered: null
	};

	const [state, dispatch] = useReducer(foodReducer, initialState);

	//export const foodContext = createContext();

	return (
		<FoodContext.Provider
			value={{
				food: state.food
			}}
		>
			{props.children}
		</FoodContext.Provider>
	);
};
export default FoodState;
