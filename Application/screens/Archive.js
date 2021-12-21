import React from 'react';
import { View, Text, Animated } from 'react-native';
import TaskList from '../components/TaskList'
import { gStyles } from '../styles/GlobalStyles'
import { LinearGradient } from "expo-linear-gradient";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Archive() {
    return (
        <AnimatedLinearGradient 
            colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
            style={[gStyles.container]}
        >
            <Text style={gStyles.title}>Тут будет компонент Эльдара</Text>
            <TaskList />
            <Text style={gStyles.title}>Тут будет компонент Эльдара</Text>
        </AnimatedLinearGradient>
    );
}
