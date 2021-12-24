import React, { useState } from 'react';
import { Animated } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from '../styles/GlobalStyles';
import CollectionTitle from '../components/CollectionTitle';
import TaskList from '../components/TaskList';
import Tapbar from '../components/Tapbar';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Archive() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <AnimatedLinearGradient 
        colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
        style={gStyles.container}
      >
            <CollectionTitle title='Архив' setModalVisible={setModalVisible} />
            <TaskList modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            <Tapbar />
      </AnimatedLinearGradient>
    );
}
