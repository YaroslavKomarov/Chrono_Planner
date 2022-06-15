import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Tapbar() {
	const navigation = useNavigation();

	const [isPressedArchive, setIsPressedArchive] = useState(false);

	const [isPressedHome, setIsPressedHome] = useState(true);

	const [isPressedAuthor, setIsPressedAuthor] = useState(false);

	const [isPressedCompleted, setIsPressedCompleted] = useState(false);

	const changeState = (mainSet) => {
		setIsPressedCompleted(false);
		setIsPressedArchive(false);
		setIsPressedAuthor(false);
		setIsPressedHome(false);
		mainSet(true);
	};

	const loadScreen = (mainSet, screenName) => {
		changeState(mainSet);
		navigation.navigate(screenName);
	};

	return (
		<View style={styles.tapbar}>
			<TouchableOpacity
				onPress={() => loadScreen(setIsPressedArchive, "Unassembled")}>
				<View style={isPressedArchive ? styles.isPressed : {}}>
				<AntDesign name="folder1" style={styles.vectorIcons} />
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => loadScreen(setIsPressedHome, "Monthlyplanner")}>
				<View style={isPressedHome ? styles.isPressed : {}}>
				<Ionicons name="md-home-outline" style={styles.vectorIcons} />
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => loadScreen(setIsPressedAuthor, "Projects")}>
				<View style={isPressedAuthor ? styles.isPressed : {}}>
				<AntDesign name="book" style={styles.vectorIcons} />
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => loadScreen(setIsPressedCompleted, "Completed")}>
				<View style={isPressedCompleted ? styles.isPressed : {}}>
				<AntDesign name="checksquareo" style={styles.vectorIcons} />
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
    tapbar:{
        paddingHorizontal: '7%',
        backgroundColor: '#FFEFDF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '11%',
    },
    vectorIcons: {
        fontSize: 38,
        padding: '4%',
    },
    isPressed: {
        borderRadius: 25,
        backgroundColor: 'rgba(196, 196, 196, 0.43)',
    }
});
