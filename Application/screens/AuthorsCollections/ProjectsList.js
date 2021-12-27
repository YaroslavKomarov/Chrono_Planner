import React from 'react';
import { View, Text, Modal, FlatList } from 'react-native';

import { taskListStyles } from '../../styles/TaskListStyles';
import { gStyles } from '../../styles/GlobalStyles';
import AddProjectForm from '../ProjectScreen/AddProjectForm';
import ProjectsListItem from './ProjectsListItem';


export default function ProjectsList({ modalVisible, setModalVisible, projects, setProjects }) {
    const handleRemove = (key) => {
        const newList = projects.filter((item) => item.key !== key);
        setProjects(newList);
    };

    return (
		<View style={[gStyles.boxShadowMain, taskListStyles.list]}>
            <View style={{borderBottomWidth: 1, borderColor: 'black', marginHorizontal: '2%'}}></View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={projects}
                    renderItem={({ item }) => (
                        <View style={taskListStyles.taskContainer}>
                            <ProjectsListItem
                                project={item} 
                                onRemove={handleRemove}
                            />
                        </View>
                    )}
                    keyExtractor={(item) => item.key}
                />
                <Modal transparent={true} visible={modalVisible}>
                    <View style={taskListStyles.modalView}>
                        <View style={[taskListStyles.formContainer, gStyles.boxShadowMain]}>
                            <Text style={taskListStyles.formTitle} >Добавьте новый авторский проект</Text>
                            <AddProjectForm modalVisible={modalVisible} setModalVisible={setModalVisible} setProject={setProjects}/>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={{borderBottomWidth: 1, borderColor: 'black', marginHorizontal: '2%'}}></View>
		</View>
	);
}
