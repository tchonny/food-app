import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import ylpe from "../api/ylpe";
import { FlatList } from "react-native-gesture-handler";

const ResultShowScreen = ({ navigation }) => {
	const id = navigation.getParam("id");
	//console.log(id);
	const [result, setResult] = useState(null);

	const getResult = async (id) => {
		const response = await ylpe.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		//console.log("NULO");
		return null;
	}

	return (
		<View style={{ flex: 1 }}>
			<Text>ResultShowScreen</Text>
			<FlatList
				style={style.image}
				keyExtractor={(photo) => photo}
				data={result.photos}
				renderItem={({ item }) => {
					return <Image style={style.image} source={{ uri: item }} />;
				}}
			/>
		</View>
	);
};

const style = StyleSheet.create({
	image: {
		height: 250,
		width: 300,
	},
});

export default ResultShowScreen;
