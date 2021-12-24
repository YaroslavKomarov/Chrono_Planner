import React, { useState } from 'react';
import { Animated } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from '../styles/GlobalStyles';
import CollectionTitle from '../components/CollectionTitle';
import AuthorsProjectList from '../components/AuthorsProjectList';
import Tapbar from '../components/Tapbar';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function AuthorsCollections() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <AnimatedLinearGradient 
        colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
        style={gStyles.container}
      >
            <CollectionTitle title='Авторские коллекции' setModalVisible={setModalVisible} />
            <AuthorsProjectList modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            <Tapbar />
      </AnimatedLinearGradient>
    );
}
