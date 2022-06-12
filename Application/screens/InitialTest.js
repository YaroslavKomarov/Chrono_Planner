import { View, FlatList, StyleSheet, TouchableOpacity, Modal, Text, Animated } from "react-native";
import * as React from "react";
import { useState } from "react";
import RadioForm from "react-native-simple-radio-button";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { gStyles, formStyles } from "../styles/GlobalStyles";


const DATA = [
	{
		title: "Я не могу заснуть или просыпаюсь от малейшего звука или света",
		id: "1",
	},
	{
		title: "Еда – не самая большая моя страсть.",
		id: "2",
	},
	{
		title: "Обычно я просыпаюсь до будильника",
		id: "3",
	},
	{
		title: "Я не могу спать в самолете, даже в берушах и маске для сна",
		id: "4",
	},
	{
		title: " В состоянии усталости я больше раздражаюсь",
		id: "5",
	},
	{
		title: "Я слишком беспокоюсь по мелочам",
		id: "6",
	},
	{
		title: "У меня бессонница",
		id: "7",
	},
	{
		title: "В школе я переживал из-за оценок",
		id: "8",
	},
	{
		title: "Перед сном я перебираю случившееся в прошлом и возможные события будущего",
		id: "9",
	},
	{
		title: "Я перфекционист",
		id: "10",
	},
];

const arr = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];

const radio_props = [
	{ label: "Да    ", value: 0 },
	{ label: "Нет", value: 1 },
];

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

function addArr(str, val) {
	for (var i = 1; i < 11; i++) {
		if (i == val) arr[i] = radio_props[str].label;
	}
}

export default function InitialTest() {
	const navigation = useNavigation();

	function checkArr(val) {
		var count = 0;
		for (var i = 1; i < 11; i++) {
			if (val[i] == "0") {
				return alert("Вы выбрали не все ответы ");
			}
			if (val[i] == "Да    ") {
				count += 1;
			}
		}
		if (count >= 7) {
			setModalVisibleHome(true) ;
			global.CHRONOTYPE = 'dolphin';
		} else {
			setModalVisible(true);
		}
	}

	const [modalVisible, setModalVisible] = useState(false);

	const [modalOfHI, setModalVisibleHI] = useState(true);

	const [modalVisibleHome, setModalVisibleHome] = useState(false);

	return (
	<AnimatedLinearGradient
		colors={["rgba(255, 154, 158, 1)", "rgba(250, 208, 196, 1)"]}
		style={gStyles.container}
	>
		<Modal animationType="slide" visible={modalOfHI}>
		<View>
			<View style={[formStyles.formContainer, gStyles.boxShadowMain]}>
			<Text style={[formStyles.formTitle, { borderBottomWidth: 2 }]}>
				Добро пожаловать в приложение ChronoPlanner - Ваш персональный
				планировщик задач с опорой на биоритмы
			</Text>
			<Text style={[formStyles.formTitle, { marginBottom: 5 }]}>
				Сейчас перед вами появится тест , который поможет нам определить
				ваш хронотип
			</Text>
			<View style={{ height: 60 }}>
				<TouchableOpacity
				onPress={() => {
					setModalVisibleHI(false);
				}}
				style={[
					formStyles.addButton,
					gStyles.boxShadow,
					formStyles.button,
				]}
				>
				<Text style={formStyles.buttonText}> Далее </Text>
				</TouchableOpacity>
			</View>
			</View>
		</View>
		</Modal>
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			style
		>
		<View style={formStyles.modalView}>
			<View style={[formStyles.formContainer, gStyles.boxShadowMain]}>
				<Text style={formStyles.formTitle}>
					Просьба пройти еще один тест для более точного определения
					хронотипа
				</Text>
				<View style={styles.touchableWrap}>
					<TouchableOpacity
						onPress={() => {
							setModalVisible(false);
							navigation.navigate("AdditionalTest");
						}}
						style={[
							formStyles.addButton,
							gStyles.boxShadow,
							formStyles.button,
							styles.Button,
						]}
					>
					<Text style={formStyles.buttonText}>Дополнительный тест</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
		</Modal>
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisibleHome}
		>
		<View style={formStyles.modalView}>
			<View style={[formStyles.formContainer, gStyles.boxShadowMain]}>
				<Text style={formStyles.formTitle}>Ваш хронотип это дельфин</Text>
				<View style={styles.touchableWrap}>
					<TouchableOpacity
						onPress={() => {
							setModalVisibleHome(false);
							navigation.navigate("Monthlyplanner");
					}}
					style={[
						formStyles.addButton,
						gStyles.boxShadow,
						formStyles.button,
					]}
					>
						<Text style={formStyles.buttonText}>Вернуться домой</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
		</Modal>
		<FlatList
			data={DATA}
			renderItem={({ item }) => (
			<View style={[gStyles.boxShadowMain, styles.quethion]}>
				<Text style={styles.Text}>{item.title}</Text>
				<View>
					<RadioForm
						radio_props={radio_props}
						initial={2}
						onPress={
							((value) => {
							this.setState({ value: value });
							},
							(value) => addArr(value, item.id))
						}
						style={styles.radioButton}
						formHorizontal={true}
						buttonColor={"rgba(17, 18, 53, 0.5)"}
						selectedButtonColor={"rgba(135, 156, 255, 1)"}
						buttonSize={15}
						labelStyle={{ fontSize: 20, fontFamily: "PTSans-reg" }}
					/>
				</View>
				</View>
			)}
			keyExtractor={(item) => item.id}
			style={styles.FlatList}
		/>
		<View style={styles.Button}>
			<TouchableOpacity
				onPress={() => checkArr(arr)}
				style={[formStyles.addButton, gStyles.boxShadow, formStyles.button]}
			>
				<Text style={formStyles.buttonText}>Получить результат</Text>
			</TouchableOpacity>
		</View>
	</AnimatedLinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FF9A9E",
		alignItems: "center",
		justifyContent: "center",
	},
	radioButton: {
		margin: 10,
		marginLeft: "27%",
	},
	Button: {
		height: 60,
		marginTop: 1,
		marginBottom: 2,
	},
	Text: {
		textAlign: "center",
		fontSize: 20,
		fontFamily: "PTSans-bold",
		margin: 5,
	},
	quethion: {
		textAlign: "center",
		margin: 10,
		borderWidth: 2,
		borderColor: "#FCE2D8",
		borderRadius: 20,
		backgroundColor: "#FCE2D8",
	},
	FlatList: {
		marginTop: 20,
	},
	touchableWrap: {
		height: 60,
	},
});