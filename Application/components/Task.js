import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { taskStyles } from '../styles/TaskStyles';


export default function ListItemTask({ task }) {
    const LeftSwipeActions = () => {
        return (
            <TouchableOpacity 
                style={taskStyles.deleteButtonWrap} 
                onPress={() => console.log('left button clicked')}
                >
                <AntDesign name="delete" size={38} color={'white'}/>
            </TouchableOpacity>
        );
    };

    const rightSwipeActions = () => {
        return (
            <TouchableOpacity style={taskStyles.btnContainer}>
                <TouchableOpacity 
                    style={taskStyles.doneButtonWrap} 
                    onPress={() => console.log('left button clicked')}
                    >
                    <AntDesign name="checkcircleo" size={38} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={taskStyles.migrateButtonWrap} 
                    onPress={() => console.log('left button clicked')}
                    >
                    <Feather name="arrow-right" size={38} color={'white'} />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    const swipeFromLeftOpen = () => {
    };

    const swipeFromRightOpen = () => {
        console.log('Swipe from right');
    };

    const dynamicChangeStyles = () => {
        return StyleSheet.create({
            backgroundColor: '#111235',
            boxShadow: styles.boxShadow
        })
    };

    return (
        <Swipeable
        renderLeftActions={LeftSwipeActions}
        renderRightActions={rightSwipeActions}
        onSwipeableRightOpen={swipeFromRightOpen}
        onSwipeableLeftOpen={swipeFromLeftOpen}
        >
            <View style={[taskStyles.swipeContainer, dynamicChangeStyles]}>
                <View style={taskStyles.penIconWrap}>
                    <TouchableOpacity>
                        <SimpleLineIcons name="pencil" size={24} color={'#7E869E'}/>
                    </TouchableOpacity>
                </View>
                <Text style={[taskStyles.taskText, taskStyles.boxShadow]}>{task.text}</Text>
            </View>
        </Swipeable>
    );
}
