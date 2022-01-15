import React, { useState } from 'react'
import { View, Text,  } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { taskStyles } from '../../styles/TaskStyles';
import MigrateForm from '../../components/MigrateForm'
import ChangeTaskForm from '../../components/ChangeTaskForm';


export default function DailyplannerTask({ task, setTask }) {
    const [isDone, setIsDone] = useState(false);

    const [changeModalVisible, setChangeModalVisible] = useState(false);

    const [migrateModalVisible, setMigrateModalVisible] = useState(false);

    const onRemove = (key) => {
        const newList = items.filter((item) => item.key !== key);
        setItems(newList);
    };

    const LeftSwipeActions = () => {
        return (
            <TouchableOpacity
                disable={isDone}
                style={[taskStyles.deleteButtonWrap, taskStyles.buttonWrap]} 
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
                    style={[taskStyles.doneButtonWrap, taskStyles.buttonWrap]} 
                    onPress={() => setIsDone(true)}
                >
                    <AntDesign name="checkcircleo" size={38} color={'white'} />
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
                <View style={taskStyles.textContainer}>
                    <Text style={[
                        taskStyles.taskText, 
                        taskStyles.boxShadow, 
                        isDone ? taskStyles.isDone : {}]}>
                            {task.text}
                    </Text>
                </View>
            </View>
        </Swipeable>
    );
}
