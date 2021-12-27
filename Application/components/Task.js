import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { taskStyles } from '../styles/TaskStyles';
import MigrateForm from './MigrateForm';
import ChangeTaskForm from './ChangeTaskForm';


export default function Task({ task, setTask, onRemove, isMontly }) {
    const [isDone, setIsDone] = useState(false);

    const [migrateModalVisible, setMigrateModalVisible] = useState(false);

    const [changeModalVisible, setChangeModalVisible] = useState(false);

    const LeftSwipeActions = () => {
        return (
            <TouchableOpacity
                disable={isDone}
                style={taskStyles.deleteButtonWrap} 
                onPress={() => onRemove(task.key)}
                >
                <AntDesign name="delete" size={38} color={'white'}/>
            </TouchableOpacity>
        );
    };

    const rightSwipeActions = () => {
        return (
            <TouchableOpacity style={taskStyles.btnContainer}>
                <TouchableOpacity 
                    disable={isDone}
                    style={taskStyles.doneButtonWrap} 
                    onPress={() => setIsDone(true)}
                >
                    <AntDesign name="checkcircleo" size={38} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity 
                    disable={isDone}
                    style={taskStyles.migrateButtonWrap} 
                    onPress={() => isDone ? {} : setMigrateModalVisible(true)}
                >
                    <Feather name="arrow-right" size={38} color={'white'} />
                </TouchableOpacity>
                <MigrateForm modalVisible={migrateModalVisible} setModalVisible={setMigrateModalVisible}/>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable
            renderLeftActions={LeftSwipeActions}
            renderRightActions={rightSwipeActions}
        >
            <View style={taskStyles.swipeContainer}>
                <View style={taskStyles.penIconWrap}>
                    <TouchableOpacity
                        disable={isDone}
                        onPress={() => isDone ? {} : setChangeModalVisible(true)
                        }
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
                <View style={taskStyles.textContainer}>
                    <Text style={[
                        isMontly ? taskStyles.monthlyTaskText : taskStyles.taskText, 
                        taskStyles.boxShadow, 
                        isDone ? taskStyles.isDone : {}]}>
                            {task.text}
                    </Text>
                </View>
            </View>
        </Swipeable>
    );
}
