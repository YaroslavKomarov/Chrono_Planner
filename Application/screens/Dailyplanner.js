import React from 'react';
import { Animated } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from '../styles/GlobalStyles';
import DailyplannerHeader from '../components/dailyplanner/DailyplannerHeader';
import Schedule from '../components/dailyplanner/Schedule';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Dailyplanner() {
    return (
        <AnimatedLinearGradient 
            colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
            style={gStyles.container}
        >
            <DailyplannerHeader />
            <Schedule />
        </AnimatedLinearGradient>
    );
}
