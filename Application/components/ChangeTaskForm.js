import React from 'react';
import { View, TouchableOpacity, TextInput, Text, Modal } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AntDesign } from '@expo/vector-icons';

import { formStyles } from '../styles/FormStyles';
import { taskListStyles } from '../styles/TaskListStyles';
import { gStyles } from '../styles/GlobalStyles';


export default function ChangeTaskForm({ modalVisible, setModalVisible, setTask, task}) {
    const validate = Yup.object({
        text: Yup.string().required('Это обязательное поле')
    });

    const changeTask = (task) => {
        setTask((list) => {
            const taskIndex = list.findIndex((t => t.key === task.key));
            list[taskIndex] = task;
            return [...list];
        });
        setModalVisible(false);
    };

    return (
        <Modal transparent={true} visible={modalVisible}>
            <View style={taskListStyles.modalView}>
                <View style={[taskListStyles.formContainer, gStyles.boxShadowMain]}>
                    <Text style={taskListStyles.formTitle} >Измените задачу</Text>
                    <Formik 
                        initialValues={{  text: task.text, type: task.type, key: task.key}} 
                        validationSchema={validate}
                        onSubmit={(values, action) => {
                            changeTask(values);
                            action.resetForm();
                        }}>
                        {(props) => (
                            <View>
                                <TextInput 
                                    style={[formStyles.inputText, gStyles.boxShadow]}
                                    value={props.values.text} 
                                    onChangeText={props.handleChange('text')}
                                />
                                {(props.errors.text) &&
                                    <View style={formStyles.errorWrap}>
                                        <Text style={formStyles.errorText}>{props.errors.text}  </Text>
                                        <AntDesign name="exclamationcircleo" size={20} color="red" />
                                    </View>
                                }
                                <View style={formStyles.btnContainer}>
                                    <TouchableOpacity 
                                        onPress={props.handleSubmit} 
                                        style={[formStyles.addButton, gStyles.boxShadow, formStyles.button]}
                                    >
                                        <Text style={formStyles.buttonText}>Принять</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                        onPress={() => setModalVisible(!modalVisible)} 
                                        style={[formStyles.cancelButton, gStyles.boxShadow, formStyles.button]}
                                    >
                                        <Text style={formStyles.buttonText}>Отмена</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </Modal>
	);
}
