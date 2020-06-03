import { useState, useEffect } from "react";
import ylpe from "../api/ylpe";

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async (searchTerm) => {
		try {
			const response = await ylpe.get("/search", {
				params: {
					limit: 50,
					location: "NYC",
					term: searchTerm,
				},
			});
			setResults(response.data.businesses);
			setErrorMessage("");
		} catch (e) {
			setErrorMessage("something went wrong, try again later");
			console.log("DANGER");
		}
	};

	useEffect(() => {
		searchApi("pasta");
	}, []);

	return [results, errorMessage, searchApi];
};
