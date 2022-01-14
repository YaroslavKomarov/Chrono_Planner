import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Archive from "../screens/Archive";
// import Dailyplanner from '../screens/Dailyplanner';
import Monthlyplanner from "../screens/Montlyplanner";
import AuthorsCollections from "../screens/AuthorsCollections";
import Test1 from "../screens/firstTest";
import Test2 from "../screens/secondTest";
import Tapbar from "../components/Tapbar";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        {/* <Stack.Screen 
                    name='Dailyplanner'
                    component={Dailyplanner}
                    options={{title: 'Ежедневник'}}
                /> */}
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
          name="Test1"
          component={Test1}
          options={{
            title: "Тест 1",
            headerStyle: { height: 0 },
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="Test2"
          component={Test2}
          options={{
            title: "Тест 2",
            headerStyle: { height: 0 },
            headerLeft: () => null,
          }}
        />
      </Stack.Navigator>
      <Tapbar />
    </NavigationContainer>
  );
}
