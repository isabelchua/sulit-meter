import React from "react";
import { useReducer } from "react";

const ShopState = () => {
	const initialState = {
		shop: [
			{
				id: 1,
				name: "Kagayanon",
				phone: "245-345-909",
				description:
					"Located right at Limketkai, it is a best filipino restaurant. Portions are big and love how they serve rice wrapped in banana leaf and you use the banana leaf as your plate",
				address: "Limketkai Drive 2/F, Limketkai Center, Lapasan"
			},
			{
				id: 2,
				name: "Bigbys",
				phone: "245-345-909",
				description:
					"Located right at Limketkai, it is a best filipino restaurant. Portions are big and love how they serve rice wrapped in banana leaf and you use the banana leaf as your plate",
				address: "Limketkai Drive 2/F, Limketkai Center, Lapasan"
			},
			{
				id: 3,
				name: "Ramen Tei",
				phone: "245-345-909",
				description:
					"Located right at Limketkai, it is a best filipino restaurant. Portions are big and love how they serve rice wrapped in banana leaf and you use the banana leaf as your plate",
				address: "Limketkai Drive 2/F, Limketkai Center, Lapasan"
			}
		],
		current: null,
		filtered: null
	};

	const [state, dispatch] = useReducer(shopReducer, initialState);
};

export default ShopState;
