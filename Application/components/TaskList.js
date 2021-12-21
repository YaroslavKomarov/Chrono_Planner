import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';

import { taskListStyles } from '../styles/TaskListStyles';


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
