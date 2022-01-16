import React, { useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import MonthlyplannerHeader from './MonthlyplannerHeader';
import ItemsList from '../../components/ItemsList';
import { gStyles } from '../../styles/GlobalStyles';
import MyCalendar from '../../components/Calendar';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Monthlyplanner({ navigation }) {
    const [tasks, setTasks] = useState([
        { text: 'Купить молоко', type: 'physical', key: '1' },
        { text: 'Починить кран', type: 'physical', key: '2' },
        { text: 'Сделать проект', type: 'physical', key: '3' },
        { text: 'Сходить в кино', type: 'physical', key: '4' },
        { text: 'Построить коммунизм', type: 'physical', key: '5' },
        { text: 'Больше не наливать деду', type: 'physical', key: '6' }
    ]);

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <AnimatedLinearGradient 
            colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
            style={gStyles.container}
        >
            <MonthlyplannerHeader
                title='Январь' 
                setModalVisible={setModalVisible} 
                navigation={navigation}
            />
            <MyCalendar />
            <ItemsList
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                items={tasks}
                setItems={setTasks}
                isMonthly={true}
            />
        </AnimatedLinearGradient>
    );
}
