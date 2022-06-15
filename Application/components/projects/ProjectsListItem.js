import React, { useState } from 'react'
import { View, Text, Modal } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { taskStyles } from '../../styles/GlobalStyles';
import ChangeProjectForm from './ChangeProjectForm';
import ProjectConfirmationForm from './ProjectConfirmationForm';


export default function ProjectsListItem({ project, setProject, onRemove }) {
    const [isDone, setIsDone] = useState(false);

    const [confirmFormText, setConfirmFormText] = useState("");
    
    const [confirmFormType, setConfirmFormType] = useState("");

    const [confirmModalVisible, setConfirmModalVisible] = useState(false);

    const [migrateModalVisible, setMigrateModalVisible] = useState(false);

    const [changeModalVisible, setChangeModalVisible] = useState(false);

    const navigation = useNavigation();

    const loadProject = () => {
        navigation.navigate('Project', { projName: project.projName, tasksProps: project.tasks });
    };

    const leftSwipeActions = () => {
        return (
            <TouchableOpacity
                disable={isDone}
                style={[taskStyles.deleteButtonWrap, taskStyles.buttonWrap]} 
                onPress={() => {
                    setConfirmFormText("Вы уверены, что хотите удалить проект? У вас остались незавершенные задачи");
                    setConfirmModalVisible(true);
                    setConfirmFormType("delete");
                }}
                >
                <AntDesign name="delete" size={38} color={'white'}/>
            </TouchableOpacity>
        );
    };

    const rightSwipeActions = () => {
        return (
            <TouchableOpacity style={taskStyles.btnsContainer}>
                <TouchableOpacity 
                    disable={isDone}
                    style={[taskStyles.doneButtonWrap, taskStyles.buttonWrap]} 
                    onPress={() => {
                        setConfirmFormText("Вы уверены, что хотите завершить проект?");
                        setConfirmModalVisible(true);
                        setConfirmFormType("complete");
                    }}
                >
                    <AntDesign name="checkcircleo" size={38} color={'white'} />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable
        renderLeftActions={leftSwipeActions}
        renderRightActions={rightSwipeActions}
        >
            <View style={taskStyles.swipeContainer}>
                <Modal visible={confirmModalVisible} transparent={true}>
                    <ProjectConfirmationForm
                        setModalVisible={setConfirmModalVisible}
                        confirmFormText={confirmFormText}
                        project={project}
                        setMigrateModalVisible={setMigrateModalVisible}
                        onRemove={onRemove}
                        confirmFormType={confirmFormType}
                    />
                </Modal>
                <View style={taskStyles.penIconWrap}>
                    <TouchableOpacity
                        disable={isDone}
                        onPress={() => isDone ? {} : setChangeModalVisible(true)}
                    >
                        <SimpleLineIcons name="pencil" size={24} color={'#7E869E'}/>
                    </TouchableOpacity>
                    <ChangeProjectForm
                        modalVisible={changeModalVisible}
                        setModalVisible={setChangeModalVisible}
                        setProject={setProject}
                        project={project}
                    />
                </View>
                <TouchableOpacity style={taskStyles.projectTextContainer} onPress={() => loadProject()}>
                    <Text style={[
                        taskStyles.taskText, taskStyles.boxShadow, 
                        isDone ? taskStyles.isDone : {}]}>
                            {project.projName}
                    </Text>
                </TouchableOpacity>
            </View>
        </Swipeable>
    );
}
