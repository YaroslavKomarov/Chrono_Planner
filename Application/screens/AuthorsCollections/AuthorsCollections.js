import React, { useState } from 'react';
import { Animated } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from '../../styles/GlobalStyles';
import CollectionTitle from '../../components/CollectionTitle';
import ProjectsList from './ProjectsList';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function AuthorsCollections() {
  const [projects, setProjects] = useState([
    { projName: 'Приложение на react native', key: '1' },
    { projName: 'Проект на Arduino nano', key: '2' },
    { projName: 'Обучение немецкому языку', key: '3' }
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <AnimatedLinearGradient 
      colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
      style={gStyles.container}
    >
      <CollectionTitle title='Авторские коллекции' setModalVisible={setModalVisible} />
      <ProjectsList
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        projects={projects}
        setProjects={setProjects}
      />
    </AnimatedLinearGradient>
  );
}
