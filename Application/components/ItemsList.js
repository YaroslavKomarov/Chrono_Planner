import React from 'react';
import { View, Text, Modal, FlatList } from 'react-native';

import { taskListStyles } from '../styles/TaskListStyles';
import { gStyles } from '../styles/GlobalStyles';
import AddTaskForm from './AddTaskForm';
import Task from './Task';


export default function ItemsList({ modalVisible, setModalVisible, items, setItems, isMonthly }) {
    const handleRemove = (key) => {
        const newList = items.filter((item) => item.key !== key);
        setItems(newList);
    };

    return (
		<View style={[gStyles.boxShadowMain, taskListStyles.list]}>
            <View style={{borderBottomWidth: 1, borderColor: 'black', marginHorizontal: '2%'}}></View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <View style={taskListStyles.taskContainer}>
                            <Task
                                task={item}
                                setTask={setItems}
                                onRemove={handleRemove}
                                isMontly={isMonthly}
                            />
                        </View>
                    )}
                    keyExtractor={(item) => item.key}
                />
                <Modal transparent={true} visible={modalVisible}>
                    <View style={taskListStyles.modalView}>
                        <View style={[taskListStyles.formContainer, gStyles.boxShadowMain]}>
                            <Text style={taskListStyles.formTitle} >Добавьте новую задачу</Text>
                            <AddTaskForm
                                modalVisible={modalVisible}
                                setModalVisible={setModalVisible}
                                setTask={setItems}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={{borderBottomWidth: 1, borderColor: 'black', marginHorizontal: '2%'}}></View>
		</View>
	);
}
