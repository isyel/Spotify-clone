import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import { PlaylistPlay, VolumeDown } from "@material-ui/icons";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__left">
				<img className="footer__albumCover" src="" alt="" />
				<div className="footer__songInfo">
					<h4>Beautiful</h4>
					<p>Ed Sheeran</p>
				</div>
			</div>
			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer__icon" />
				<PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
				<SkipNextIcon className="footer__icon" />
				<RepeatIcon className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlay />
					</Grid>
					<Grid item>
						<VolumeDown />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
