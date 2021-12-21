import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

export default function TaskList() {
    const [tasks, setTasks] = useState([
        { text: 'Компонент Дани', key: '1' },
        { text: 'Компонент Дани', key: '2' },
        { text: 'Компонент Дани', key: '3' },
        { text: 'Компонент Дани', key: '4' },
        { text: 'Компонент Дани', key: '5' },
        { text: 'Компонент Дани', key: '6' }
    ]);

    return (
		<View style={taskListStyles.list}>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
					<View style={taskListStyles.taskContainer}>
                    	<Text style={taskListStyles.task}>{ item.text }</Text>
					</View>
                )}
                keyExtractor={item => item.key}
            />
		</View>
	);
}

const taskListStyles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 10,
        margin: 7,
        backgroundColor: 'rgba(255, 225, 216, 1)',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.22,
        elevation: 3,
    },
    // taskContainer:{
    //     flex: 1,
    //     marginHorizontal: 3,
    //     marginTop: 10,
    //     marginBottom: 5,
    // },
    // task: {
    //     //для task в коллекциях
    //     fontSize: 24,
    //     fontFamily: 'roboto-bold',
    // },
});
