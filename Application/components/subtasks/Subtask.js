import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ChangeTaskForm from '../common/ChangeTaskForm';
import { taskStyles } from '../../styles/GlobalStyles';
import SubtaskConfirmationForm from './SubtaskConfirmationForm'

export default function Subtask({ subtask, setSubtask, onRemove }) {
    const [changeModalVisible, setChangeModalVisible] = useState(false);
    
    const [confirmFormText, setConfirmFormText] = useState("");

    const [confirmFormType, setConfirmFormType] = useState("");

    const [confirmModalVisible, setConfirmModalVisible] = useState(false);

    const [isTaskDone, setIsTaskDone] = useState(false);

    return (
        <View style={taskStyles.swipeContainer}>
            <Modal visible={confirmModalVisible} transparent={true}>
                <SubtaskConfirmationForm
                    setModalVisible={setConfirmModalVisible}
                    confirmFormText={confirmFormText}
                    task={subtask}
                    setIsTaskDone={setIsTaskDone}
                    removeTask={onRemove}
                    confirmFormType={confirmFormType}
                />
            </Modal>
            <TouchableOpacity 
                disable={isTaskDone}
                style={styles.buttonWrap}
                onPress={isTaskDone ? () => {} : () => {
                    setConfirmFormText("Вы уверены, что хотите удалить подзадачу?");
                    setConfirmModalVisible(true);
                    setConfirmFormType("delete");
                }}
            >
                <AntDesign name="delete" size={30} color={isTaskDone ? '#7E869E' : "#FF6E84"}/>
            </TouchableOpacity>
            <View style={styles.textWrap}>
                <Text style={[taskStyles.boxShadow, 
                    taskStyles.taskText,
                    isTaskDone ? taskStyles.isDone : {}]}>
                    {subtask.text}
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => isTaskDone ? {} : setChangeModalVisible(true)}
                style={styles.buttonWrap}
            >
                <SimpleLineIcons name="pencil" size={22} color={'#7E869E'}/>
            </TouchableOpacity>
            <ChangeTaskForm
                modalVisible={changeModalVisible}
                setModalVisible={setChangeModalVisible}
                setTask={setSubtask}
                task={subtask}
            />
            <TouchableOpacity 
                disable={isTaskDone}
                style={styles.buttonWrap} 
                onPress={isTaskDone ? () => {} : () => {
                    setConfirmFormText("Вы уверены, что хотите завершить подзадачу?");
                    setConfirmModalVisible(true);
                    setConfirmFormType("complete");
                }}
            >
                <AntDesign name="checkcircleo" size={30} color={isTaskDone ? '#7E869E' : "#AAE2AA"} />
            </TouchableOpacity>
        </View>
    );
}

export const styles = StyleSheet.create({
    textWrap: {
        width: "60%",
        marginLeft: "4%",
        marginRight: "3%",
        marginVertical: '5%'
    },
    buttonWrap: {
        minHeight: 75,
        alignItems: "center",
        marginRight: '3%',
        justifyContent: "center",
    },
});
