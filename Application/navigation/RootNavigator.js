import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Dailyplanner from "../screens/Dailyplanner";
import Projects from "../screens/Projects";
import Monthlyplanner from "../screens/Montlyplanner";
import Project from "../screens/Project";
import Subtasks from "../screens/Subtusks";
import InitialTest from "../screens/InitialTest";
import Completed from "../screens/Completed";
import AdditionalTest from "../screens/AdditionalTest";
import Unassembled from "../screens/Unassembled";
import Tapbar from "../components/common/Tapbar";
import DailyplannerLink from "../components/common/DailyplannerLink";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          <Stack.Screen
            name="InitialTest"
            component={InitialTest}
            options={{
              title: "Первоначальный тест",
              headerStyle: { height: 0 },
              headerLeft: () => null,
            }}
          />
        }
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
          name="Subtasks"
          component={Subtasks}
          options={{
            title: "Подзадачи",
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
          name="Completed"
          component={Completed}
          options={{
            title: "Завершенные",
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
          name="AdditionalTest"
          component={AdditionalTest}
          options={{
            title: "Дополнительный тест",
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
