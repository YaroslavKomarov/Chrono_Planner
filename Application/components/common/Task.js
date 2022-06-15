import React, { useState } from 'react'
import { View, Text, Modal } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import ConfirmationForm from './ConfirmationForm';
import { taskStyles } from '../../styles/GlobalStyles';
import ActivitiesMarks from './ActivitiesMarks';
import ChangeTaskForm from './ChangeTaskForm';
import MigrateForm from './MigrateForm';


export default function Task({ task, setTask, removeTask, sourceCollection }) {
    const [confirmFormText, setConfirmFormText] = useState("");

    const [isTaskDone, setIsTaskDone] = useState(false);
    
    const [confirmFormType, setConfirmFormType] = useState("");

    const [confirmModalVisible, setConfirmModalVisible] = useState(false);

    const [migrateModalVisible, setMigrateModalVisible] = useState(false);

    const [changeModalVisible, setChangeModalVisible] = useState(false);

    const navigation = useNavigation();

    const loadSubtasksScreen = () => {
		navigation.navigate('Subtasks', { title: task.text, subtasksProp: task.subtasks });
	};

    const leftSwipeActions = () => {
        return (
            <TouchableOpacity
                style={[
                    taskStyles.deleteButtonWrap, 
                    taskStyles.buttonWrap, 
                    sourceCollection === 'monthlyplanner' ? {minHeight: 60}: {}
                ]} 
                onPress={() => {
                    setConfirmFormText("Вы уверены, что хотите удалить задачу?");
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
                    style={[
                        taskStyles.doneButtonWrap, 
                        taskStyles.buttonWrap, 
                        sourceCollection === 'monthlyplanner' ? {minHeight: 60} : {}
                    ]} 
                    onPress={() => {
                        setConfirmFormText("Вы уверены, что хотите завершить задачу?");
                        setConfirmModalVisible(true);
                        setConfirmFormType("complete");
                    }}
                >
                    <AntDesign name="checkcircleo" size={38} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        taskStyles.migrateButtonWrap, 
                        taskStyles.buttonWrap, 
                        sourceCollection === 'monthlyplanner' ? {minHeight: 60} : {}
                    ]} 
                    onPress={() => setMigrateModalVisible(true)}
                >
                    <Feather name="arrow-right" size={38} color={'white'} />
                </TouchableOpacity>
                <MigrateForm 
                    modalVisible={migrateModalVisible} 
                    setModalVisible={setMigrateModalVisible}
                    sourceCollection={sourceCollection}
                    task={task}
                    onRemove={removeTask}
                />
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable
            renderLeftActions={leftSwipeActions}
            renderRightActions={rightSwipeActions}
        >
            <View style={[
                taskStyles.swipeContainer, 
                sourceCollection === 'monthlyplanner' ? {minHeight: 60, backgroundColor: "rgba(235, 216, 199, 1)"} : {}
            ]}>
                <Modal visible={confirmModalVisible} transparent={true}>
                    <ConfirmationForm
                        setModalVisible={setConfirmModalVisible}
                        confirmFormText={confirmFormText}
                        task={task}
                        setIsTaskDone={setIsTaskDone}
                        setMigrateModalVisible={setMigrateModalVisible}
                        removeTask={removeTask}
                        confirmFormType={confirmFormType}
                    />
                </Modal>
                <View style={taskStyles.penIconWrap}>
                    <ActivitiesMarks activityType={task.type}/>
                </View>
                <View style={taskStyles.textContainer}>
                    <TouchableOpacity onPress={() => loadSubtasksScreen()}>
                        <Text style={[
                            sourceCollection === 'monthlyplanner' ? taskStyles.monthlyTaskText : taskStyles.taskText, 
                            taskStyles.boxShadow]}>
                                {task.text}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    disable={isTaskDone}
                    onPress={() => setChangeModalVisible(true)}
                >
                    <SimpleLineIcons name="pencil" size={24} color={'#7E869E'}/>
                </TouchableOpacity>
                <ChangeTaskForm
                    modalVisible={changeModalVisible}
                    setModalVisible={setChangeModalVisible}
                    setTask={setTask}
                    task={task}
                />
                {task.text === 'Сделать проект' || task.text === 'Больше не наливать деду' ? (
                    <AntDesign name="exclamation" style={{padding: 0, margin: 0}} size={24} color={'black'} />
                ) : (
                    <View />
                )}
            </View>
        </Swipeable>
    );
}
