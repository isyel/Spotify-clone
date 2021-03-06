import React from "react";
import { useDataLayerValue } from "../../../react-context-api/DataLayer";
import "./SidebarOptions.css";
import * as types from "../../../react-context-api/actionTypes";

function SidebarOptions({ title, Icon, id }) {
	const [{ current_playlist }, dispatch] = useDataLayerValue();
	const setPlayList = (id) => {
		dispatch({
			type: types.SET_CURRENT_PLAYLIST,
			current_playlist: id,
		});
	};
	return (
		<div
			className={`sidebarOption ${current_playlist === id ? "active" : ""}`}
			onClick={() => setPlayList(id)}>
			{Icon && <Icon className="sidebarOptions__icon" />}
			{Icon ? <h4>{title}</h4> : <p>{title}</p>}
		</div>
	);
}

export default SidebarOptions;
