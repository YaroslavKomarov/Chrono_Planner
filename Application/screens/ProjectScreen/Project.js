import React, { useState } from 'react';
import { Animated } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from '../../styles/GlobalStyles';
import CollectionTitle from '../../components/CollectionTitle';
import ItemsList from '../../components/ItemsList';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function Project({ route }) {
  const [tasks, setTasks] = useState([
    { text: 'Валидация Formik', type: 'physical', key: '1' },
    { text: 'Адаптивная верстка', type: 'physical', key: '2' },
    { text: 'Почитать про использование hooks', type: 'physical', key: '3' },
    { text: 'Построить коммунизм', type: 'physical', key: '4' },
  ]);

  const { projName } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <AnimatedLinearGradient 
      colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
      style={gStyles.container}
    >
      <CollectionTitle title={projName} setModalVisible={setModalVisible} />
      <ItemsList 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        items={tasks}
        setItems={setTasks}
      />
    </AnimatedLinearGradient>
  );
}
