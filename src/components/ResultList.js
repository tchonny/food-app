import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

const ResultList = ({ title, results, navigation }) => {
	if (!results.length) {
		return null;
	}

	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				style={styles.container}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(result) => result.id}
				data={results}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("Result", {
									id: item.id,
								});
							}}
						>
							<ResultDetail result={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginBottom: 5,
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
		marginLeft: 15,
		marginBottom: 5,
	},
});

export default withNavigation(ResultList);
