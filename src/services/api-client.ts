import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "b8b740e2916e4398bc62881362b5edf6",
	},
});
