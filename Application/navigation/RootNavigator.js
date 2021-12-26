import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import Dailyplanner from '../screens/Dailyplanner';
import AuthorsCollections from '../screens/AuthorsCollections/AuthorsCollections'
import Monthlyplanner from '../screens/Monthlyplanner/Montlyplanner';
import Project from '../screens/ProjectScreen/Project';
import Archive from '../screens/ArchiveScreen/Archive'
import Tapbar from '../components/Tapbar';

const Stack = createStackNavigator();

export default function RootNavigator() {
	return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Monthlyplanner'
                    component={Monthlyplanner}
                    options={
                        { 
                            title: 'Ежемесячник',
                            headerStyle: { height: 0 },
                            headerLeft: ()=> null,
                        }
                    }
                />
                <Stack.Screen 
                    name='Archive'
                    component={Archive}
                    options={
                        { 
                            title: 'Архив',
                            headerStyle: { height: 0 },
                            headerLeft: ()=> null,
                        }
                    }
                />
                {/* <Stack.Screen 
                    name='Dailyplanner'
                    component={Dailyplanner}
                    options={{title: 'Ежедневник'}}
                /> */}
                <Stack.Screen 
                    name='AuthorsCollections'
                    component={AuthorsCollections}
                    options={
                        { 
                            title: 'Авторские коллекции',
                            headerStyle: { height: 0 },
                            headerLeft: ()=> null,
                        }
                    }
                />
                <Stack.Screen 
                    name='Project'
                    component={Project}
                    options={
                        { 
                            title: 'Проект',
                            headerStyle: { height: 0 },
                            headerLeft: ()=> null,
                        }
                    }
                />
            </Stack.Navigator>
            <Tapbar />
        </NavigationContainer>
	);
};
