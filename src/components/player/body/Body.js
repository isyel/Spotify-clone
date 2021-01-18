import React from "react";
import "./Body.css";
import Header from "./header/Header";
import swan_discover from "../../../assets/images/Swan_discover.jpg";
import { useDataLayerValue } from "../../../react-context-api/DataLayer";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import SongRow from "./song-row/SongRow";

function Body({ spotify }) {
	const [{ discover_weekly }] = useDataLayerValue();
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
					<PlayCircleFilled className="body__shuffle" />
					<Favorite fontSize="large" />
					<MoreHoriz />
				</div>

				{discover_weekly?.tracks?.items.map((item) => (
					<SongRow key={item.added_at} track={item.track} />
				))}
			</div>
		</div>
	);
}

export default Body;
