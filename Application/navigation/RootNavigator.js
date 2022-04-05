import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Dailyplanner from "../screens/Dailyplanner";
import AuthorsCollections from "../screens/AuthorsCollections";
import Monthlyplanner from "../screens/Montlyplanner";
import Project from "../screens/Project";
import Test1 from "../screens/InitialTest";
import Test2 from "../screens/AdditionalTest";
import Archive from "../screens/Archive";
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
          name="Archive"
          component={Archive}
          options={{
            title: "Архив",
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
          name="AuthorsCollections"
          component={AuthorsCollections}
          options={{
            title: "Авторские коллекции",
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
