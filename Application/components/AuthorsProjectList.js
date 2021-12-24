import React, { useState } from 'react';
import { View, Text, Modal, FlatList } from 'react-native';

import { taskListStyles } from '../styles/TaskListStyles';
import { gStyles } from '../styles/GlobalStyles';
import AddProjectForm from './AddProjectForm';
import ProjectItem from './ProjectItem';


export default function AuthorsProjectList({ modalVisible, setModalVisible }) {
    const [tasks, setTasks] = useState([
        { projName: 'Приложение на react native', key: '1' },
        { projName: 'Проект га Arduino nano', key: '2' },
        { projName: 'Обучение немецкому языку', key: '3' }
    ]);

    const handleRemove = (key) => {
        const newList = tasks.filter((item) => item.key !== key);
        setTasks(newList);
    };

    return (
		<View style={[gStyles.boxShadowMain, taskListStyles.list]}>
            <View style={taskListStyles.flatListWrap}>
                <FlatList
                    data={tasks}
                    renderItem={({ item }) => (
                        <View style={taskListStyles.taskContainer}>
                            <ProjectItem project={item} onRemove={handleRemove}/>
                        </View>
                    )}
                    keyExtractor={(item) => item.key}
                />
                <Modal transparent={true} visible={modalVisible}>
                    <View style={taskListStyles.modalView}>
                        <View style={[taskListStyles.formContainer, gStyles.boxShadowMain]}>
                            <Text style={taskListStyles.formTitle} >Добавьте новый авторский проект</Text>
                            <AddProjectForm modalVisible={modalVisible} setModalVisible={setModalVisible} setTask={setTasks}/>
                        </View>
                    </View>
                </Modal>
            </View>
		</View>
	);
}
