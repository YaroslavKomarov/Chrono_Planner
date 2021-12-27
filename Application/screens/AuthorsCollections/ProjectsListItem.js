import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { taskStyles } from '../../styles/TaskStyles';
import { useNavigation } from '@react-navigation/native';
import MigrateForm from '../../components/MigrateForm';


export default function ProjectsListItem({ project, onRemove }) {
    const [isDone, setIsDone] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    const loadProject = () => {
        navigation.navigate('Project', { projName: project.projName });
    };

    const LeftSwipeActions = () => {
        return (
            <TouchableOpacity
                disable={isDone}
                style={[taskStyles.deleteButtonWrap, taskStyles.buttonWrap]} 
                onPress={() => onRemove(project.key)}
                >
                <AntDesign name="delete" size={38} color={'white'}/>
            </TouchableOpacity>
        );
    };

    const rightSwipeActions = () => {
        return (
            <TouchableOpacity style={taskStyles.btnsContainer}>
                <TouchableOpacity 
                    disable={isDone}
                    style={[taskStyles.doneButtonWrap, taskStyles.buttonWrap]} 
                    onPress={() => setIsDone(true)}
                >
                    <AntDesign name="checkcircleo" size={38} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity 
                    disable={isDone}
                    style={[taskStyles.migrateButtonWrap, taskStyles.buttonWrap]}
                    onPress={() => isDone ? {} : setModalVisible(true)}
                >
                    <Feather name="arrow-right" size={38} color={'white'} />
                </TouchableOpacity>
                <MigrateForm modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable
        renderLeftActions={LeftSwipeActions}
        renderRightActions={rightSwipeActions}
        >
            <View style={taskStyles.swipeContainer}>
                <View style={taskStyles.penIconWrap}>
                    <TouchableOpacity disable={isDone}>
                        <SimpleLineIcons name="pencil" size={24} color={'#7E869E'}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={taskStyles.textContainer} onPress={() => loadProject()}>
                    <Text style={[
                        taskStyles.taskText, taskStyles.boxShadow, 
                        isDone ? taskStyles.isDone : {}]}>
                            {project.projName}
                    </Text>
                </TouchableOpacity>
            </View>
        </Swipeable>
    );
}
