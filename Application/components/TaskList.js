import React, { useState } from 'react';
import { View, Text, Modal, FlatList } from 'react-native';

import { taskListStyles } from '../styles/TaskListStyles';
import { gStyles } from '../styles/GlobalStyles';
import AddTaskForm from './AddTaskForm';
import ListItemTask from './Task';


export default function TaskList({ modalVisible, setModalVisible }) {
    const [tasks, setTasks] = useState([
        { text: 'Купить молоко', type: 'physical', key: '1' },
        { text: 'Починить кран', type: 'physical', key: '2' },
        { text: 'Сделать проект', type: 'physical', key: '3' },
        { text: 'Сходить в кино', type: 'physical', key: '4' },
        { text: 'Построить коммунизм', type: 'physical', key: '5' },
        { text: 'Больше не наливать деду', type: 'physical', key: '6' }
    ]);

    const handleRemove = (key) => {
        const newList = tasks.filter((item) => item.key !== key);
        setTasks(newList);
    };

    return (
		<View style={[gStyles.boxShadowMain, taskListStyles.list]}>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
					<View style={taskListStyles.taskContainer}>
                    	<ListItemTask task={item} onRemove={handleRemove}/>
					</View>
                )}
                keyExtractor={(item) => item.key}
            />
            <Modal transparent={true} visible={modalVisible}>
                <View style={taskListStyles.modalView}>
                    <View style={[taskListStyles.formContainer, gStyles.boxShadowMain]}>
                        <Text style={taskListStyles.formTitle} >Добавьте новую задачу</Text>
                        <AddTaskForm modalVisible={modalVisible} setModalVisible={setModalVisible} setTask={setTasks}/>
                    </View>
                </View>
            </Modal>
		</View>
	);
}
