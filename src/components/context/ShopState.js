import React from "react";
import { useReducer } from "react";

const ShopState = () => {
	const initialState = {
		shop: [
			{
				id: 1,
				name: "Kagayanon"
			},
			{
				id: 2,
				name: "Bigbys"
			},
			{
				id: 3,
				name: "Ramen Tei"
			}
		],
		current: null,
		filtered: null
	};

	const [state, dispatch] = useReducer(shopReducer, initialState);
};

export default ShopState;
