import React from "react";
import { useReducer } from "react";
import ShopContext from "./shopContext";
import shopReducer from "./shopReducer";

const ShopState = props => {
	const initialState = {
		shop: [
			{
				id: 1,
				name: "Kagayanon",
				phone: "245-345-909",
				description:
					"Located right at Limketkai, it is a best filipino restaurant. Portions are big and love how they serve rice wrapped in banana leaf and you use the banana leaf as your plate",
				address: "Limketkai Drive 2/F, Limketkai Center, Lapasan",
				image: "",
				short: "Asian Fusion"
			},
			{
				id: 2,
				name: "Bigbys",
				phone: "245-345-909",
				description:
					"Located right at Limketkai, it is a best filipino restaurant. Portions are big and love how they serve rice wrapped in banana leaf and you use the banana leaf as your plate",
				address: "Limketkai Drive 2/F, Limketkai Center, Lapasan",
				short: "Asian Fusion"
			},
			{
				id: 3,
				name: "Ramen Tei",
				phone: "245-345-909",
				description:
					"Located right at Limketkai, it is a best filipino restaurant. Portions are big and love how they serve rice wrapped in banana leaf and you use the banana leaf as your plate",
				address: "Limketkai Drive 2/F, Limketkai Center, Lapasan",
				short: "Asian Fusion"
			}
		],
		current: null,
		filtered: null
	};

	const [state, dispatch] = useReducer(shopReducer, initialState);

	return (
		<ShopContext.Provider
			value={{
				shop: state.shop
			}}
		>
			{props.children}
		</ShopContext.Provider>
	);
};

export default ShopState;
