import React from 'react';
import { View, Text, Modal, FlatList, StyleSheet } from 'react-native';

import { gStyles, taskListStyles } from '../../styles/GlobalStyles';
import AddProjectForm from './AddProjectForm';
import ProjectsListItem from './ProjectsListItem';


export default function ProjectsList({ modalVisible, setModalVisible, projects, setProjects }) {

    const handleRemove = (key) => {
        const newList = projects.filter((item) => item.key !== key);
        setProjects(newList);
    };

    return (
		<View style={[gStyles.boxShadowMain, taskListStyles.listWrap]}>
            <View style={{borderBottomWidth: 1, borderColor: 'black', marginHorizontal: '2%'}}></View>
            <FlatList
                data={projects}
                renderItem={({ item }) => (
                    <View style={taskListStyles.taskContainer}>
                        <ProjectsListItem
                            project={item} 
                            setProject={setProjects}
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
            <View style={{borderBottomWidth: 1, borderColor: 'black', marginHorizontal: '2%'}}></View>
		</View>
	);
}
