import React, { useState } from 'react';
import { View, Text, Modal, FlatList, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useWindowDimensions } from 'react-native';

import { taskListStyles } from '../../styles/TaskListStyles';
import DailyplannerTask from './DailyplannerTask';


export default function ScheduleBlock({ block }) {
    const { height, width } = useWindowDimensions();

    const [tasks, setTasks] = useState([
        { text: 'Купить молоко', key: '1' },
        { text: 'Починить кран', key: '2' },
        { text: 'Сделать проект', key: '3' },
        { text: 'Сходить в кино', key: '4' },
        { text: 'Построить коммунизм', key: '5' },
        { text: 'Больше не наливать деду', key: '6' }
    ]);
      

    const startTime = () => {
        const arr = block.StartTime.split(':');
        const result = new Date();
        result.setHours(arr[0], arr[1]);
        return result;
    }

    const endTime = () => {
        const arr = block.EndTime.split(':');
        const result = new Date();
        result.setHours(arr[0], arr[1]);
        return result;
    }

    const blockSize = () => {
        const oneHourSize = height / 16;
        const diffHours = endTime().getHours() - startTime().getHours();
        const diffMin = endTime().getMinutes() - startTime().getMinutes();
        return (diffHours + diffMin / 60) * oneHourSize;
    }

    return (
        <View style={ {height: { blockSize }, backgroundColor: 'rgba(214, 228, 253, 1)'}}>
            <View style={styles.blockHeader}>
                <AntDesign name="down" size={20} color="black" />
                <Text>{block.ActivityType}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={tasks}
                    renderItem={({ item }) => (
                        <View style={taskListStyles.taskContainer}>
                            <DailyplannerTask 
                                task={item} 
                                setTask={setTasks}
                            />
                        </View>
                    )}
                    keyExtractor={(item) => item.key}
                />
            </View>
        </View>
    );  
}

const styles = StyleSheet.create({
    blockHeader: {
        flexDirection: 'row',
        marginLeft: '3%',
    },
    scheduleBlock: {
		marginVertical: '5%',
        marginHorizontal: '10%',
        paddingVertical: '6%',
        backgroundColor: 'rgba(214, 228, 253, 1)',
        borderRadius: 18,
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 0
    },

});
