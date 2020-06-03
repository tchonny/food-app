import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, errorMessage, searchApi] = useResults();

	const filterResultsbyPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<View style={style.view}>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermEnd={() => searchApi(term)}
			/>
			{!errorMessage.length ? (
				<ScrollView>
					<ResultList
						title="Cost Effective"
						results={filterResultsbyPrice("$")}
					/>
					<ResultList
						title="Biter Price"
						results={filterResultsbyPrice("$$")}
					/>
					<ResultList
						title="Big Spender!"
						results={filterResultsbyPrice("$$$")}
					/>
				</ScrollView>
			) : (
				<Text>{errorMessage}</Text>
			)}
		</View>
	);
};

const style = StyleSheet.create({
	view: {
		backgroundColor: "white",
		flex: 1,
	},
});

export default SearchScreen;
