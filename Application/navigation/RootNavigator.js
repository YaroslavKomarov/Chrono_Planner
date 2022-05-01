import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Dailyplanner from "../screens/Dailyplanner";
import Projects from "../screens/Projects";
import Monthlyplanner from "../screens/Montlyplanner";
import Project from "../screens/Project";
import Test1 from "../screens/InitialTest";
import Test2 from "../screens/AdditionalTest";
import Unassembled from "../screens/Unassembled";
import Tapbar from "../components/common/Tapbar";

const Stack = createStackNavigator();

export default function RootNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* <Stack.Screen
					name="Test1"
					component={Test1}
					options={{
						title: "тест 1",
						headerStyle: { height: 0 },
						headerLeft: () => null,
					}}
				/> */}
				<Stack.Screen
					name="Monthlyplanner"
					component={Monthlyplanner}
					options={{
						title: "Ежемесячник",
						headerStyle: { height: 0 },
						headerLeft: () => null,
					}}
				/> 
				<Stack.Screen
					name="Unassembled"
					component={Unassembled}
					options={{
						title: "Неразобранные",
						headerStyle: { height: 0 },
						headerLeft: () => null,
					}}
				/>
				<Stack.Screen
					name="Dailyplanner"
					component={Dailyplanner}
					options={{
						title: "Ежедневник",
						headerStyle: { height: 0 },
						headerLeft: () => null,
					}}
				/>
				<Stack.Screen
					name="Projects"
					component={Projects}
					options={{
						title: "",
						headerStyle: { height: 0 },
						headerLeft: () => null,
					}}
				/>
				<Stack.Screen
					name="Test2"
					component={Test2}
					options={{
						title: "тест 2",
						headerStyle: { height: 0 },
						headerLeft: () => null,
					}}
				/>
				<Stack.Screen
					name="Project"
					component={Project}
					options={{
						title: "Проект",
						headerStyle: { height: 0 },
						headerLeft: () => null,
					}}
				/>
			</Stack.Navigator>
			<Tapbar />
		</NavigationContainer>
	);
}
