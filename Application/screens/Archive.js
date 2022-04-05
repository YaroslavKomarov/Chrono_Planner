import React, { useState } from 'react';
import { Animated } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from '../styles/GlobalStyles';
import CollectionTitle from '../components/common/CollectionTitle';
import ItemsList from '../components/common/ItemsList';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Archive() {
  const [tasks, setTasks] = useState([
    { text: 'Купить молоко', type: 'physical', key: '1' },
    { text: 'Починить кран', type: 'physical', key: '2' },
    { text: 'Сделать проект', type: 'physical', key: '3' },
    { text: 'Сходить в кино', type: 'physical', key: '4' },
    { text: 'Построить коммунизм', type: 'physical', key: '5' },
    { text: 'Больше не наливать деду', type: 'physical', key: '6' },
    { text: 'Купить кран', type: 'physical', key: '7' },
    { text: 'Починить молоко', type: 'physical', key: '8' },
    { text: 'Сделать деда', type: 'physical', key: '9' },
    { text: 'Сходить в коммунизм', type: 'physical', key: '10' }
  ]);
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <AnimatedLinearGradient 
      colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
      style={gStyles.container}
    >
      <CollectionTitle title='Архив' setModalVisible={setModalVisible} />
      <ItemsList
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        items={tasks}
        setItems={setTasks}
      />
    </AnimatedLinearGradient>
  );
}
