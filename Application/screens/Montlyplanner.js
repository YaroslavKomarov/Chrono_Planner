import React, { useState } from 'react';
import { Animated, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from '../styles/GlobalStyles';
import MonthlyTaskList from '../components/MonthlyTaskList';
import Tapbar from '../components/Tapbar';
import MonthlyplannerHeader from '../components/MonthlyplannerHeader';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Monthlyplanner() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <AnimatedLinearGradient 
            colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
            style={gStyles.container}
        >
            <MonthlyplannerHeader title='Ежемесячник' setModalVisible={setModalVisible} />
            <Text style={{ alignSelf: 'center', flex: 2 }}>Календарика компонент</Text>
            <MonthlyTaskList modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            <Tapbar />
      </AnimatedLinearGradient>
    );
}
