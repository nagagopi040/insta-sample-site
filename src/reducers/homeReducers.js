const initialState = {
	requesting: null,
	requested: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case "FETCH_REQUEST":
			return {
				...state,
				requesting: true,
			};
		case "FETCH_REQUEST_SUCCEDED":
			return {
				...state,
				requesting: false,
				requested: true,
				posts: action.posts,
				serverError: action.serverError,
				status: action.status,
			};
		case "FETCH_REQUEST_FAILED":
			return {
				...state,
				requesting: false,
				requested: false,
				posts: [],
				serverError: action.serverError,
				status: action.status,
			}
		default:
			return state;
	}
}