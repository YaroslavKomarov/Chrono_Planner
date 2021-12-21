import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Archive from '../screens/Archive';
// import Dailyplanner from '../screens/Dailyplanner';
// import Monthlyplanner from '../screens/Montlyplanner';
// import AuthorsCollections from '../screens/AuthorsCollection';

const Stack = createStackNavigator();

export default function RootNavigator() {
	return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen 
                    name='Monthlyplanner'
                    component={Monthlyplanner}
                    options={{title: 'Ежемесячник'}}
                /> */}
                <Stack.Screen 
                    name='Archive'
                    component={Archive}
                    options={
                        { 
                            title: 'Архив',
                            headerStyle: { height: 90, backgroundColor: 'red' },
                            headerTitleStyle: { textAlign: 'center' },
                        }
                    }
                />
                {/* <Stack.Screen 
                    name='Dailyplanner'
                    component={Dailyplanner}
                    options={{title: 'Ежедневник'}}
                />
                <Stack.Screen 
                    name='AuthorsCollections'
                    component={AuthorsCollections}
                    options={{title: 'Авторчике коллекции'}}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
	);
};