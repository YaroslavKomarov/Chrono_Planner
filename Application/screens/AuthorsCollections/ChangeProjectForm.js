import React from 'react';
import { View, TouchableOpacity, TextInput, Text, Modal } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AntDesign } from '@expo/vector-icons';

import { formStyles } from '../../styles/FormStyles';
import { gStyles } from '../../styles/GlobalStyles';
import { taskListStyles } from '../../styles/TaskListStyles';


export default function ChangeProjectForm({ modalVisible, setModalVisible, setProject, project }) {
    const validate = Yup.object({
        projName: Yup.string().required('Это обязательное поле')
    });

    const addTask = (proj) => {
        setProject((list) => {
            const projIndex = list.findIndex((p => p.key === proj.key));
            list[projIndex] = proj;
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
                        initialValues={{  projName: project.projName, key: project.key }} 
                        validationSchema={validate}
                        onSubmit={(values, action) => {
                            addTask(values);
                            action.resetForm();
                        }}>
                        {(props) => (
                            <View>
                                <TextInput 
                                    style={[formStyles.inputText, gStyles.boxShadow]}
                                    value={props.values.projName} 
                                    placeholder='Введите название проекта...' 
                                    onChangeText={props.handleChange('projName')}
                                />
                                {(props.errors.projName) &&
                                    <View style={formStyles.errorWrap}>
                                        <Text style={formStyles.errorText}>{props.errors.projName}  </Text>
                                        <AntDesign name="exclamationcircleo" size={20} color="red" />
                                    </View>
                                }
                                <View style={formStyles.btnContainer}>
                                    <TouchableOpacity
                                        onPress={props.handleSubmit} 
                                        style={[formStyles.addButton, gStyles.boxShadow, formStyles.button]} 
                                    >
                                        <Text style={formStyles.buttonText}>Done</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                        onPress={() => setModalVisible(!modalVisible)} 
                                        style={[formStyles.cancelButton, gStyles.boxShadow, formStyles.button]}
                                    >
                                        <Text style={formStyles.buttonText}>Cancel</Text>
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
