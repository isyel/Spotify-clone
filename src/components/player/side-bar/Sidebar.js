import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../../react-context-api/DataLayer";

function Sidebar() {
	const [{ playlists }] = useDataLayerValue();
	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt="Spotify Logo"
			/>

			<SidebarOptions title="Home" Icon={HomeOutlinedIcon} />
			<SidebarOptions title="Search" Icon={SearchOutlinedIcon} />
			<SidebarOptions title="Your Library" Icon={LibraryMusicIcon} />

			<br />
			<strong className="sidebar__title">PLAYLISTS</strong>
			<hr />

			{playlists?.items?.map((playlist) => (
				<SidebarOptions key={playlist.created_at} title={playlist?.name} />
			))}
		</div>
	);
}

export default Sidebar;
