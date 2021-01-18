import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/login/Login";
import { getTokenFromResponseUrl } from "./components/login/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/player/Player";
import { useDataLayerValue } from "./react-context-api/DataLayer";
import * as types from "./react-context-api/actionTypes";

const spotify = new SpotifyWebApi();

function App() {
	const [
		{ user, token, playlists, discover_weekly },
		dispatch,
	] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromResponseUrl();
		window.location.hash = "";

		const token = hash.access_token;
		if (token) {
			dispatch({ type: types.SET_TOKEN, token });
			spotify.setAccessToken(token);

			spotify.getMe().then((user) => {
				dispatch({ type: types.SET_USER, user });
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: types.SET_PLAYLISTS,
					playlists,
				});
			});

			spotify.getPlaylist("0TG3O7yYO0fgbmAMkptjmn").then((response) => {
				dispatch({
					type: types.SET_DISCOVER_WEEKLY,
					discover_weekly: response,
				});
			});
		}
	}, [dispatch]);

	console.log("User>> ", user);
	console.log("Token>> ", token);
	console.log("Playlist>> ", playlists);
	console.log("Disover>> ", discover_weekly);

	return <div className="app">{token ? <Player spotify /> : <Login />}</div>;
}

export default App;
