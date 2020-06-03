import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer e9O0-b95m-QqfP2ztePX0E2RyieZXwNZg9Vyl2lWgdHOC6ja2shK9WUcEO76kfgY4nZDcXA2p47hBMUltcOec4cNMfU2Rlz3bYrLhApV6gTAUOq2tgRJe0MmPn3RXnYx",
	},
});
