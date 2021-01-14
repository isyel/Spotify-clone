import * as types from "./actionTypes";

export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token:
	// 	"BQBfLQ-ez71Q1dd_PUcRtDDtcx2ut6eM2TK-484EzHmB7Rrc4_OKo8od1xnEjyDi0MfFNLgXy5JRH2-76OvwpLBBmpZCoa6YzQir5HVFAeHqshgDqypIFVnxouUvBTvLeeGDyuoGBxeReSFmoCdP1ifuo0ii-j0SdG1TIVQPePokzCBSbsH0",
};

//

const reducer = (state, action) => {
	console.log("Action: ", action);

	switch (action.type) {
		case types.SET_USER:
			console.log("In SET_USER");
			return {
				...state,
				user: action.user,
			};
		case types.SET_TOKEN:
			console.log("In SET_TOKEN");
			return {
				...state,
				token: action.token,
			};
		case types.SET_PLAYLISTS:
			console.log("In SET_PLAYLISTS");
			return {
				...state,
				playlists: action.playlists,
			};
		case types.SET_DISCOVER_WEEKLY:
			console.log("In SET_DISCOVER_WEEKLY");
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};
		default:
			return state;
	}
};

export default reducer;
