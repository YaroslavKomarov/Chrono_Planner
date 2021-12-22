import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

import { taskListStyles } from '../styles/TaskListStyles';
import { gStyles } from '../styles/GlobalStyles';
import AddTaskForm from './AddTaskForm';


export default function TaskList({ modalVisible, setModalVisible }) {
    const [tasks, setTasks] = useState([
        { text: 'Компонент Дани', type: 'physical', key: '1' },
        { text: 'Компонент Дани', type: 'physical', key: '2' },
        { text: 'Компонент Дани', type: 'physical', key: '3' },
        { text: 'Компонент Дани', type: 'physical', key: '4' },
        { text: 'Компонент Дани', type: 'physical', key: '5' },
        { text: 'Компонент Дани', type: 'physical', key: '6' }
    ]);

    return (
		<View style={[gStyles.boxShadow, taskListStyles.list]}>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
					<View style={taskListStyles.taskContainer}>
                    	<Text style={taskListStyles.task}>{ item.text }</Text>
					</View>
                )}
            />
            <Modal transparent={true} visible={modalVisible}>
                <View style={taskListStyles.modalView}>
                    <View style={[taskListStyles.formContainer, gStyles.boxShadow]}>
                        <Text style={taskListStyles.formTitle} >Добавьте новую задачу</Text>
                        <AddTaskForm modalVisible={modalVisible} setModalVisible={setModalVisible} setTask={setTasks}/>
                    </View>
                </View>
            </Modal>
		</View>
	);
}
