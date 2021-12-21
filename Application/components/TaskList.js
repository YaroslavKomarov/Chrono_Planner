import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { gStyles } from '../styles/GlobalStyles'

export default function TaskList() {
    const [tasks, setTasks] = useState([
        { text: 'todo_1', id: 1 },
        { text: 'todo_2', id: 2 },
        { text: 'todo_3', id: 3 },
        { text: 'todo_4', id: 4 },
        { text: 'todo_5', id: 5 },
        { text: 'todo_6', id: 6 }
    ]);

    return (
		<View>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <Text style={gStyles.title}>{ item.text }</Text>
                )}
                keyExtractor={item => item.id}
            />
		</View>
	);
}
