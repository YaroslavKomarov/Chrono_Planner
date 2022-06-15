import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';


import { activitiesColor } from "../../Global";
import { taskStyles } from '../../styles/GlobalStyles';
import ChangeTaskForm from '../common/ChangeTaskForm';


export default function DailyplannerTask({ task, setTask, onRemove, activityType }) {
    const [isDone, setIsDone] = useState(false);

    const [changeModalVisible, setChangeModalVisible] = useState(false);

    const leftSwipeActions = () => {
        return (
            <TouchableOpacity
                disable={isDone}
                style={[taskStyles.deleteButtonWrap, styles.buttonWrap]} 
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
                    style={[taskStyles.doneButtonWrap, styles.buttonWrap]} 
                    onPress={() => setIsDone(true)}
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
            <View style={[styles.swipeContainer, { backgroundColor: `${activitiesColor[activityType]}` }]}>
                <View style={taskStyles.textContainer}>
                    <Text style={[
                        styles.taskText, 
                        isDone ? taskStyles.isDone : {}]}>
                            {task.text}
                    </Text>
                </View>
                <View style={taskStyles.penIconWrap}>
                    <TouchableOpacity
                        disable={isDone}
                        onPress={() => isDone ? {} : setChangeModalVisible(true)}
                    >
                        <SimpleLineIcons name="pencil" size={22} color={'#7E869E'}/>
                    </TouchableOpacity>
                    <ChangeTaskForm
                        modalVisible={changeModalVisible}
                        setModalVisible={setChangeModalVisible}
                        setTask={setTask}
                        task={task}
                    />
                </View>
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    swipeContainer: {
        minHeight: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskText: {
        fontFamily: 'roboto-reg',
        fontSize: 14,
    },
    penIconWrap: {
        marginLeft: '4%',
    },
    buttonWrap: {
        flex: 1,
        minHeight: 50,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButtonWrap: {
        backgroundColor: '#FF6E84',
    },
    migrateButtonWrap: {
        backgroundColor: '#879CFF',
    },
    doneButtonWrap: {
        backgroundColor: '#AAE2AA',
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 3,
    },
    btnsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    textContainer: {
        marginLeft: '5%',
        marginRight: '12%'
    },
    isDone: {
        textDecorationLine: 'line-through',
        textDecorationColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(0, 0, 0, 0.35)',
    },
});
