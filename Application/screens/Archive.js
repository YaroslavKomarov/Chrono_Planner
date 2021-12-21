import React from 'react';
import { Animated } from 'react-native';

import TaskList from '../components/TaskList'
import { gStyles } from '../styles/GlobalStyles'
import { LinearGradient } from "expo-linear-gradient";
import { Head } from '../components/Title';
import { Tapbar } from '../components/Tapbar';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Archive() {
    return (
        <AnimatedLinearGradient 
            colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
            style={[gStyles.container]}
        >
            <Head title='Архив'/>
            <TaskList />
            <Tapbar />
        </AnimatedLinearGradient>
    );
}
