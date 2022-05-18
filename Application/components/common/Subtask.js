import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { taskStyles } from '../../styles/GlobalStyles';
import ActivitiesMarks from './ActivitiesMarks';
import ChangeTaskForm from './ChangeTaskForm';
import MigrateForm from './MigrateForm';


export default function Task({ task, setTask, onRemove, sourceCollection }) {
    const [isDone, setIsDone] = useState(false);

    const [migrateModalVisible, setMigrateModalVisible] = useState(false);

    const [changeModalVisible, setChangeModalVisible] = useState(false);

    const leftSwipeActions = () => {
        return (
            <TouchableOpacity
                disable={isDone}
                style={[
                    taskStyles.deleteButtonWrap, 
                    taskStyles.buttonWrap, 
                    sourceCollection === 'montlyplanner' ? {minHeight: 60}: {}
                ]} 
                onPress={() => onRemove(task.key)}
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
                    style={[
                        taskStyles.doneButtonWrap, 
                        taskStyles.buttonWrap, 
                        sourceCollection === 'montlyplanner' ? {minHeight: 60} : {}
                    ]} 
                    onPress={() => setIsDone(true)}
                >
                    <AntDesign name="checkcircleo" size={38} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity 
                    disable={isDone}
                    style={[
                        taskStyles.migrateButtonWrap, 
                        taskStyles.buttonWrap, 
                        sourceCollection === 'montlyplanner' ? {minHeight: 60} : {}
                    ]} 
                    onPress={() => isDone ? {} : setMigrateModalVisible(true)}
                >
                    <Feather name="arrow-right" size={38} color={'white'} />
                </TouchableOpacity>
                <MigrateForm 
                    modalVisible={migrateModalVisible} 
                    setModalVisible={setMigrateModalVisible}
                    sourceCollection={sourceCollection}
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
                sourceCollection === 'montlyplanner' ? {minHeight: 60} : {}
            ]}>
                <View style={taskStyles.penIconWrap}>
                    <ActivitiesMarks activityType={task.type}/>
                </View>
                <View style={taskStyles.textContainer}>
                    <Text style={[
                        sourceCollection === 'montlyplanner' ? taskStyles.monthlyTaskText : taskStyles.taskText, 
                        taskStyles.boxShadow, 
                        isDone ? taskStyles.isDone : {}]}>
                            {task.text}
                    </Text>
                </View>
                <TouchableOpacity
                    disable={isDone}
                    onPress={() => isDone ? {} : setChangeModalVisible(true)}
                >
                    <SimpleLineIcons name="pencil" size={24} color={'#7E869E'}/>
                </TouchableOpacity>
                <ChangeTaskForm
                    modalVisible={changeModalVisible}
                    setModalVisible={setChangeModalVisible}
                    setTask={setTask}
                    task={task}
                />
            </View>
        </Swipeable>
    );
}
