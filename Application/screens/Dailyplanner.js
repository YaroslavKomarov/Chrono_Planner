import React, { useState } from 'react';
import { Animated } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from '../styles/GlobalStyles';
import DailyplannerHeader from '../components/dailyplanner/DailyplannerHeader';
import Schedule from '../components/dailyplanner/Schedule';
import AddDailyTaskForm from '../components/dailyplanner/AddDailyTaskForm'


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Dailyplanner() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <AnimatedLinearGradient 
            colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
            style={gStyles.container}
        >
            <DailyplannerHeader setModalVisible={setModalVisible} />
            <Schedule />
            <AddDailyTaskForm
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </AnimatedLinearGradient>
    );
}
