import React, { useState } from 'react';
import { Animated } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from '../styles/GlobalStyles';
import CollectionTitle from '../components/CollectionTitle';
import ProjectTaskList from '../components/ProjectTaskList';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Project({ route }) {
  const { projName } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <AnimatedLinearGradient 
      colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
      style={gStyles.container}
    >
      <CollectionTitle title={projName} setModalVisible={setModalVisible} />
      <ProjectTaskList modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </AnimatedLinearGradient>
  );
}
