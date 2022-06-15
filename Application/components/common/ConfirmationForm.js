import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

import { gStyles, formStyles } from "../../styles/GlobalStyles";


export default function ConfirmationForm({
    setModalVisible,
    confirmFormText,
    task,
    setIsTaskDone,
    removeTask,
    confirmFormType,
}) {
  return (
    <View style={[formStyles.modalView]}>
		<View style={[gStyles.boxShadowMain, formStyles.formContainer]}>
			<Text style={[formStyles.formTitle]}>{confirmFormText}</Text>
			<View style={formStyles.btnContainer}>
				<TouchableOpacity
					style={[formStyles.addButton, gStyles.boxShadow, formStyles.button]}
					onPress={() => {
						setModalVisible(false);
						if (confirmFormType == "delete") {
							removeTask(task.key);
						} else if (confirmFormType == "complete") {
							setIsTaskDone(true);
						} 
					}}
				>
					<Text style={formStyles.buttonText}>Принять</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setModalVisible(false)}
					style={[
						formStyles.cancelButton,
						gStyles.boxShadow,
						formStyles.button,
					]}
				>
					<Text style={formStyles.buttonText}>Отмена</Text>
				</TouchableOpacity>
			</View>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
	button: {
		width: 100,
		marginLeft: "2%",
		marginTop: 5,
	},
	button1: {
		width: 100,
		marginTop: "-11.6%",
		marginLeft: "64%",
		marginBottom: 10,
	},
});