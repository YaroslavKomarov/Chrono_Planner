import React, { useState } from 'react';
import { View, Text, Modal, FlatList, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useWindowDimensions } from 'react-native';

import { taskListStyles } from '../../styles/TaskListStyles';
import DailyplannerTask from './DailyplannerTask';
import { gStyles } from '../../styles/GlobalStyles';
import { getColorsMap } from '../../Global';
import AddTaskForm from '../../components/AddTaskForm'


export default function ScheduleBlock({ block }) {
    const { height, width } = useWindowDimensions();

    const [modalVisible, setModalVisible] = useState(false);

    const [addTaskVisible, setAddTaskVisible] = useState(false);

    const [tasks, setTasks] = useState([
        { text: 'Купить молоко', key: '1' },
        { text: 'Починить кран', key: '2' },
        { text: 'Сделать проект', key: '3' },
        { text: 'Сходить в кино', key: '4' },
        { text: 'Построить коммунизм', key: '5' },
        { text: 'Больше не наливать деду', key: '6' }
    ]);

    const handleRemove = (key) => {
        const newList = tasks.filter((item) => item.key !== key);
        setTasks(newList);
    };

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
        const oneHourSize = height / 8;
        const diffHours = endTime().getHours() - startTime().getHours();
        const diffMin = endTime().getMinutes() - startTime().getMinutes();
        return (diffHours + diffMin / 60) * oneHourSize;
    }

    const blockColor = () => {
        const map = getColorsMap();
        return map.get(block.ActivityType);
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.timeRangeWrap}>
                { block.key === '1' ? 
                    <View style={[{marginTop: '20%'}, styles.time]}>
                        <Text style={styles.timeText}>{block.StartTime}</Text>
                    </View> : <View></View>
                }
                <View style={[{marginBottom: '15%'}, styles.time]}>
                    <Text style={styles.timeText}>{block.EndTime}</Text>
                </View>
            </View>
            <View style={ [styles.scheduleBlock(blockSize(), blockColor()), styles.boxShadow]}>
                <View style={styles.headerWrap}>
                    <TouchableOpacity style={styles.blockTitle} onPress={() => setModalVisible(!modalVisible)}>
                        <AntDesign name="down" size={18} color="black" style={ { marginTop: '1%'} } />
                        <Text> {block.ActivityType}</Text>
                    </TouchableOpacity>
                    <View style={styles.btnWrap}>
                        <TouchableOpacity onPress={() => setAddTaskVisible(true)}>
                            <AntDesign name="pluscircleo" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
                { modalVisible ? 
                    <View style={styles.listWrap}>
                        <View style={{ 
                            borderBottomWidth: 1, 
                            borderColor: 'black',
                            marginBottom: '2%'
                        }}></View>
                        <FlatList
                            data={tasks}
                            renderItem={({ item }) => (
                                <View style={taskListStyles.taskContainer}>
                                    <DailyplannerTask 
                                        task={item} 
                                        setTask={setTasks}
                                        onRemove={handleRemove}
                                        taskColor={blockColor()}
                                    />
                                </View>
                            )}
                            keyExtractor={(item) => item.key}
                        />
                        <View style={{
                            borderBottomWidth: 1, 
                            borderColor: 'black', 
                            marginTop: '2%'
                        }}></View>
                    </View> : 
                        <View />
                }
                <Modal transparent={true} visible={addTaskVisible}>
                    <View style={taskListStyles.modalView}>
                        <View style={[taskListStyles.formContainer, gStyles.boxShadowMain]}>
                            <Text style={taskListStyles.formTitle} >Добавьте новую задачу</Text>
                            <AddTaskForm
                                modalVisible={addTaskVisible}
                                setModalVisible={setAddTaskVisible}
                                setTask={setTasks}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );  
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(97, 89, 89, 1)',
        marginHorizontal: '4%',
    },
    timeRangeWrap: {
        justifyContent: 'space-between',
    },
    time: {
        backgroundColor: 'rgba(135, 156, 255, 1)',
        padding: '2%',
        borderRadius: 10,
    },
    timeText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 12,
    },
    headerWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnWrap: {
        marginHorizontal: '5%' 
    },
    blockTitle: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: '3%',
        marginBottom: '2%'
    },
    scheduleBlock: (blockSize, blockColor) => {
        return {
            flex: 1,
            minHeight: blockSize,
            marginVertical: '3%',
            marginRight: '2%',
            marginLeft: '4%',
            paddingVertical: '6%',
            backgroundColor: blockColor,
            borderRadius: 18,
        }
    },
    listWrap: {
        flex: 1,
        paddingHorizontal: '2%',
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 0
    },
    blockTasksWrap: {
        minHeight: '80%',

    },
});
