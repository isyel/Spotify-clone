import React from "react";
import "./Body.css";
import Header from "./header/Header";
import swan_discover from "../../../assets/images/Swan_discover.jpg";
import { useDataLayerValue } from "../../../react-context-api/DataLayer";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import SongRow from "./song-row/SongRow";

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useDataLayerValue();

	const playPlaylist = (id) => {
		spotify
			.play({
				context_uri: `spotify:playlist:0TG3O7yYO0fgbmAMkptjmn`,
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch({
						type: "SET_ITEM",
						item: r.item,
					});
					dispatch({
						type: "SET_PLAYING",
						playing: true,
					});
				});
			});
	};

	const playSong = (id) => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch({
						type: "SET_ITEM",
						item: r.item,
					});
					dispatch({
						type: "SET_PLAYING",
						playing: true,
					});
				});
			});
	};

	return (
		<div className="body">
			<Header spotify={spotify} />

			<div className="body__info">
				<img
					src={discover_weekly ? discover_weekly?.images[0].url : swan_discover}
					alt="Discover Weekly"
				/>
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>{discover_weekly?.name}</h2>
					<p>
						{discover_weekly ? discover_weekly?.description : "description"}
					</p>
				</div>
			</div>
			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilled className="body__shuffle" onClick={playPlaylist} />
					<Favorite fontSize="large" />
					<MoreHoriz />
				</div>

				{discover_weekly?.tracks?.items?.map((item, index) => (
					<SongRow key={index} playSong={playSong} track={item.track} />
				))}
			</div>
		</div>
	);
}

export default Body;
