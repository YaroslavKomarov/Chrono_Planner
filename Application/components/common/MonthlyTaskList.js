import React, { useState } from 'react';
import { View, Text, Modal, FlatList } from 'react-native';

import { taskListStyles } from '../../styles/GlobalStyles';
import AddTaskForm from './AddTaskForm';
import ListItemTask from './Task';


export default function MonthlyTaskList({ modalVisible, setModalVisible }) {
    const [tasks, setTasks] = useState([
        { text: 'Записаться в зал', type: 'physical', key: '1' },
        { text: 'Научиться...', type: 'physical', key: '2' },
        { text: 'Предзащаитить проект', type: 'physical', key: '3' },
        { text: 'Посмотреть матрицу', type: 'physical', key: '4' },
        { text: 'Научиться делать харакири', type: 'physical', key: '5' }
    ]);

    const handleRemove = (key) => {
        const newList = tasks.filter((item) => item.key !== key);
        setTasks(newList);
    };

    return (
		<View style={taskListStyles.list}>
            <View style={taskListStyles.flatListWrap}>
                <FlatList
                    data={tasks}
                    renderItem={({ item }) => (
                        <View style={taskListStyles.taskContainer}>
                            <ListItemTask task={item} onRemove={handleRemove} isMontly={true}/>
                        </View>
                    )}
                    keyExtractor={(item) => item.key}
                />
                <Modal transparent={true} visible={modalVisible}>
                    <View style={taskListStyles.modalView}>
                        <View style={taskListStyles.formContainer}>
                            <Text style={taskListStyles.formTitle} >Добавьте новую задачу</Text>
                            <AddTaskForm modalVisible={modalVisible} setModalVisible={setModalVisible} setTask={setTasks}/>
                        </View>
                    </View>
                </Modal>
            </View>
		</View>
	);
}
