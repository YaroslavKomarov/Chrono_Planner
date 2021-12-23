import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { taskStyles } from '../styles/TaskStyles';


export default function ListItemTask({ task, onRemove }) {
    const [isDone, setIsDone] = useState(false);

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
                    onPress={() => console.log('left button clicked')}
                    >
                    <Feather name="arrow-right" size={38} color={'white'} />
                </TouchableOpacity>
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
                    <TouchableOpacity disable={isDone}>
                        <SimpleLineIcons name="pencil" size={24} color={'#7E869E'}/>
                    </TouchableOpacity>
                </View>
                <View style={taskStyles.textContainer}>
                    <Text style={[
                        taskStyles.taskText, taskStyles.boxShadow, 
                        isDone ? taskStyles.isDone : {}]}>
                            {task.text}
                    </Text>
                </View>
            </View>
        </Swipeable>
    );
}
