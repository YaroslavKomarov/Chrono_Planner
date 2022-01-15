import React, { useState } from 'react';
import { Animated, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from '../../styles/GlobalStyles';
import DailyplannerHeader from './DailyplannerHeader';
import Schedule from './Schedule';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Dailyplanner() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <AnimatedLinearGradient 
            colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
            style={gStyles.container}
        >
            <DailyplannerHeader 
                title={"Ежедневник"} 
                setModalVisible={setModalVisible}
            />
            <Schedule />
        </AnimatedLinearGradient>
    );
}
