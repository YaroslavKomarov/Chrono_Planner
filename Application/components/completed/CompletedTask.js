import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ActivitiesMarks from '../common/ActivitiesMarks'
import CompletedSubtask from './CompletedSubtask';
import { AntDesign } from '@expo/vector-icons';

import { taskStyles, taskListStyles } from '../../styles/GlobalStyles';
import { getCurrentDate } from '../../utils/uiHandler';

export default function CompletedTask({ task }) {
    const [modalVisible, setModalVisible] = useState(false);

    const subtasks = [
        { text: "Утвердить новые макеты", type: '', key: "1" },
        { text: "Провести тесты UI", type: '', key: "2" },
        { text: "Оставить себе ясные дни", type: '', key: "3" },
    ];

    return (
        <View>
            <View style={taskStyles.swipeContainer}>
                <View style={taskStyles.penIconWrap}>
                    <ActivitiesMarks activityType={task.type}/>
                </View>
                <TouchableOpacity style={[taskStyles.textContainer, {width: '55%'}]} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={[taskStyles.taskText, taskStyles.boxShadow]}>
                        {task.text}
                    </Text>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                    <Text style={{color: '#7E869E', fontSize: 12}}>{getCurrentDate()}</Text>
                </View>
                {task.text === 'Сделать проект' || task.text === 'Больше не наливать деду' ? (
                    <AntDesign name="exclamation" style={{padding: 0, margin: 0}} size={24} color={'black'} />
                ) : (
                    <View />
                )}
            </View>
            {modalVisible ? (
                <View style={styles.listWrap}>
                    <FlatList
                        data={subtasks}
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
