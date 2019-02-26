import { REQUEST_FETCHED, REQUEST_FETCHED_FAILED, REQUEST_FETCHED_SUCCEDED } from './actionTypes';

const initialState = {
	requesting: null,
	requested: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case REQUEST_FETCHED:
			return {
				...state,
				requesting: true,
			};
		case REQUEST_FETCHED_SUCCEDED:
			return {
				...state,
				requesting: false,
				requested: true,
				images: images,
				status: action.status,
			};
		case REQUEST_FETCHED_FAILED:
			return {
				...state,
				requesting: false,
				requested: false,
				images: [],
				status: action.status,
			}
		default:
			return state;
	}
}