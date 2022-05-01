import React, { useState } from "react";
import { Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import MonthlyplannerHeader from "../components/monthlyplanner/MonthlyplannerHeader";
import AddTaskForm from "../components/common/AddTaskForm";
import TasksList from "../components/common/TasksList";
import { gStyles } from "../styles/GlobalStyles";
import MyCalendar from "../components/common/Calendar";


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Monthlyplanner({ navigation }) {
	const [tasks, setTasks] = useState([
		{ text: "Купить молоко", type: "physical", key: "1" },
		{ text: "Починить кран", type: "rest", key: "2" },
		{ text: "Сделать проект", type: "intellectual", key: "3" },
		{ text: "Сходить в кино", type: "communication", key: "4" },
		{ text: "Построить коммунизм", type: "creative", key: "5" },
		{ text: "Больше не наливать деду", type: "physical", key: "6" },
	]);

	const [modalVisible, setModalVisible] = useState(false);

	return (
		<AnimatedLinearGradient
			colors={["rgba(255, 154, 158, 1)", "rgba(250, 208, 196, 1)"]}
			style={gStyles.container}
		>
			<MonthlyplannerHeader
				setModalVisible={setModalVisible}
				navigation={navigation}
			/>
			<MyCalendar />
			<TasksList
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				tasks={tasks}
				setTasks={setTasks}
				sourceCollection='monthlyplanner'
			/>
			<AddTaskForm 
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				setTask={setTasks}
			/>
		</AnimatedLinearGradient>
	);
}
