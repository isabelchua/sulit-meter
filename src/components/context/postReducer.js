import {
	ADD_POST,
	CLEAR_POST,
	DELETE_POST,
	SET_POST,
	UPDATE_POST
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case ADD_POST:
			console.log([...state.posts, action.payload]);
			return {
				...state,
				posts: [...state.posts, action.payload]
			};
		case UPDATE_POST:
			return {
				...state,
				posts: state.posts.map(post =>
					post.id === action.payload.id ? action.payload : post
				)
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.payload)
			};
		case SET_POST:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_POST:
			return {
				...state,
				current: null
			};
		default:
			return state;
	}
};
