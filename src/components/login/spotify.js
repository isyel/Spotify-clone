export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "7b5f8f8b16164246930efe254d9f1c72";

const dev = process.env.NODE_ENV !== "production";

const redirectUri = dev
	? "http://localhost:3000/"
	: "https://jobs-listing-interface.vercel.app";

const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const getTokenFromResponseUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			var parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
