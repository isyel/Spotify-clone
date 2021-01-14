import React from "react";
import Sidebar from "./side-bar/Sidebar";
import "./Player.css";
import Body from "./body/Body";
import Footer from "./footer/Footer";

function Player({ spotify }) {
	return (
		<div className="player">
			<div className="player__body">
				<Sidebar />
				<Body spotify={spotify} />
			</div>
			<Footer />
		</div>
	);
}

export default Player;
