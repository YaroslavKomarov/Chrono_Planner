import React, { useState } from 'react';
import { Animated } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from '../styles/GlobalStyles';
import AddTaskForm from '../components/common/AddTaskForm';
import CollectionTitle from '../components/common/CollectionTitle';
import TasksList from '../components/common/TasksList';
import { collections } from '../Global';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Unassembled() {
    const [tasks, setTasks] = useState([
        { text: 'Купить молоко', type: 'physical', key: '1' },
        { text: 'Починить кран', type: 'creative', key: '2' },
        { text: 'Сделать проект', type: 'intellectual', key: '3' },
        { text: 'Сходить в кино', type: 'rest', key: '4' },
        { text: 'Построить коммунизм', type: 'intellectual', key: '5' },
        { text: 'Больше не наливать деду', type: 'communication', key: '6' },
        { text: 'Купить кран', type: 'physical', key: '7' },
        { text: 'Починить молоко', type: 'physical', key: '8' },
        { text: 'Сделать деда', type: 'creative', key: '9' },
        { text: 'Сходить в коммунизм', type: 'rest', key: '10' }
    ]);
    
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <AnimatedLinearGradient 
        colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
        style={gStyles.container}
        >
            <CollectionTitle 
                title={collections['unassembled']}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible} 
                setTask={setTasks}
            />
            <TasksList
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                tasks={tasks}
                setTasks={setTasks}
                sourceCollection='unassembled'
            />
            <AddTaskForm 
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setTask={setTasks}
            />
        </AnimatedLinearGradient>
    );
}
