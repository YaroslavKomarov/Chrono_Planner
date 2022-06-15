import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ActivitiesMarks from '../common/ActivitiesMarks'
import CompletedSubtask from './CompletedSubtask';
import { AntDesign } from '@expo/vector-icons';

import { taskStyles, taskListStyles } from '../../styles/GlobalStyles';
import { getCurrentDate } from '../../utils/uiHandler';

export default function CompletedTask({ task }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <View style={[taskStyles.swipeContainer]}>
                <View style={[taskStyles.penIconWrap]}>
                    <ActivitiesMarks activityType={task.type}/>
                </View>
                <TouchableOpacity style={[taskStyles.textContainer, {width: '60%'}]} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={[taskStyles.taskText, taskStyles.boxShadow]}>
                        {task.text}
                    </Text>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                    <Text style={{color: '#7E869E', fontSize: 12}}>{getCurrentDate()}</Text>
                </View>
            </View>
            {modalVisible ? (
                <View style={styles.listWrap}>
                    <FlatList
                        data={task.subtasks}
                        renderItem={({ item }) => (
                        <View style={taskListStyles.taskContainer}>
                            <CompletedSubtask subtask={item}/>
                        </View>
                        )}
                        keyExtractor={(item) => item.key}
                    />
                </View>
            ) : (
                <View />
            )}
        </View>
    );
}

export const styles = StyleSheet.create({
    listWrap: {
        paddingHorizontal: '10%'
    },
});
