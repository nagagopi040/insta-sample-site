import { HOME_ACTION_TYPES } from "./actionTypes";

const initialState = {
	posts: []
};

export default function (state = initialState, action) {
	switch (action.type) {
		case HOME_ACTION_TYPES.GET_ALL_POSTS:
			return {
				...state,
				posts: action.posts
			};
		default:
			return state;
	}
}