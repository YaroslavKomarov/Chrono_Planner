import React, { useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import MonthlyplannerHeader from '../components/MonthlyplannerHeader';
import { gStyles } from '../styles/GlobalStyles';
import MonthlyTaskList from '../components/MonthlyTaskList';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Monthlyplanner() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <AnimatedLinearGradient 
            colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
            style={gStyles.container}
        >
            <MonthlyplannerHeader title='Декабрь' setModalVisible={setModalVisible} />
            <View style={{ alignSelf: 'center', flex: 1, }}>
                <Text style={{ marginTop: '25%' }}>//Тут будет компонент календаря</Text>
            </View>
            <MonthlyTaskList modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </AnimatedLinearGradient>
    );
}
