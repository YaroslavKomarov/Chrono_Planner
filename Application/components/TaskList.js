import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { gStyles } from '../styles/GlobalStyles'

export default function TaskList() {
    const [tasks, setTasks] = useState([
        { text: 'todo_1', key: '1' },
        { text: 'todo_2', key: '2' },
        { text: 'todo_3', key: '3' },
        { text: 'todo_4', key: '4' },
        { text: 'todo_5', key: '5' },
        { text: 'todo_6', key: '6' }
    ]);

    return (
		<View>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <Text style={gStyles.title}>{ item.text }</Text>
                )}
                keyExtractor={item => item.key}
            />
		</View>
	);
}
