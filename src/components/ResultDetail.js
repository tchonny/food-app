import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: result.image_url }} />
			<Text style={styles.name}>{result.name}</Text>
			<Text>
				{result.rating} Stars, {result.review_count} reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
	},
	image: {
		height: 120,
		width: 250,
		borderRadius: 5,
		marginRight: 5,
		marginBottom: 5,
	},
	name: {
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default ResultDetail;
