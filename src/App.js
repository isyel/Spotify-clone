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
	const [{ token, current_playlist }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromResponseUrl();
		window.location.hash = "";

		const token = hash.access_token;
		if (token) {
			console.log("Called general useEffect");
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

				dispatch({
					type: types.SET_CURRENT_PLAYLIST,
					current_playlist: playlists.items[0].id,
				});
			});

			spotify.getMyTopArtists().then((response) =>
				dispatch({
					type: types.SET_TOP_ARTISTS,
					top_artists: response,
				})
			);

			dispatch({
				type: types.SET_SPOTIFY,
				spotify: spotify,
			});
		}
	}, [dispatch]);

	useEffect(() => {
		spotify.getPlaylist(current_playlist).then((response) => {
			dispatch({
				type: types.SET_DISCOVER_WEEKLY,
				discover_weekly: response,
			});
		});
	}, [current_playlist, dispatch]);

	return (
		<div className="app">
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
