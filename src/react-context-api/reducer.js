import * as types from "./actionTypes";

export const initialState = {
	user: null,
	playlists: [],
	spotify: null,
	discover_weekly: null,
	top_artists: null,
	playing: false,
	item: null,
	current_playlist: null,
	// token:
	// 	"BQBfLQ-ez71Q1dd_PUcRtDDtcx2ut6eM2TK-484EzHmB7Rrc4_OKo8od1xnEjyDi0MfFNLgXy5JRH2-76OvwpLBBmpZCoa6YzQir5HVFAeHqshgDqypIFVnxouUvBTvLeeGDyuoGBxeReSFmoCdP1ifuo0ii-j0SdG1TIVQPePokzCBSbsH0",
};

//

const reducer = (state, action) => {
	console.log("Action: ", action);

	switch (action.type) {
		case types.SET_USER:
			return {
				...state,
				user: action.user,
			};

		case types.SET_PLAYING:
			return {
				...state,
				playing: action.playing,
			};

		case types.SET_ITEM:
			return {
				...state,
				item: action.item,
			};
		case types.SET_TOP_ARTISTS:
			return {
				...state,
				top_artists: action.top_artists,
			};
		case types.SET_TOKEN:
			return {
				...state,
				token: action.token,
			};
		case types.SET_PLAYLISTS:
			return {
				...state,
				playlists: action.playlists,
			};

		case types.SET_SPOTIFY:
			return {
				...state,
				spotify: action.spotify,
			};
		case types.SET_DISCOVER_WEEKLY:
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};

		case types.SET_CURRENT_PLAYLIST:
			return {
				...state,
				current_playlist: action.current_playlist,
			};
		default:
			return state;
	}
};

export default reducer;
