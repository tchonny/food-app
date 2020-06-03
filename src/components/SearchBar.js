import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermEnd }) => {
	return (
		<View style={styles.container}>
			<Feather style={styles.icon} name="search" />
			<TextInput
				style={styles.input}
				placeholder="Search"
				autoCapitalize="none"
				autoCorrect={false}
				value={term}
				onChangeText={(newTerm) => {
					onTermChange(newTerm);
				}}
				onEndEditing={onTermEnd}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 15,
		flexDirection: "row",
		backgroundColor: "#F0EEEE",
		height: 50,
		borderRadius: 5,
	},
	icon: {
		alignSelf: "center",
		fontSize: 30,
		marginHorizontal: 15,
	},
	input: {},
});

export default SearchBar;
