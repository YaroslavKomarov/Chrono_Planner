import React from 'react';
import { View, TouchableOpacity, TextInput, Text, Modal } from 'react-native';
import { Formik } from 'formik';

import { formStyles } from '../styles/FormStyles';
import { taskListStyles } from '../styles/TaskListStyles';
import { gStyles } from '../styles/GlobalStyles';


export default function MigrateModal({ modalVisible, setModalVisible }) {
    return (
        <Modal transparent={true} visible={modalVisible}>
            <View style={taskListStyles.modalView}>
                <View style={[taskListStyles.formContainer, gStyles.boxShadowMain]}>
                    <Text style={taskListStyles.formTitle} >Выберите коллекцию для перемещения задачи</Text>
                    <Formik 
                        initialValues={{  text: '' }} 
                        onSubmit={(values, action) => {
                            //addTask(values);
                            action.resetForm();
                        }}>
                        {(props) => (
                            <View>
                                <TextInput 
                                    style={[formStyles.inputText, formStyles.boxShadow]}
                                    value={props.values.text} 
                                    placeholder='Введите текст задачи...' 
                                    onChangeText={props.handleChange('text')}
                                    />
                                <View style={formStyles.btnContainer}>
                                    <TouchableOpacity onPress={props.handleSubmit} style={[formStyles.addButton, formStyles.boxShadow]}>
                                        <Text style={formStyles.buttonText}>Создать</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={[formStyles.cancelButton, formStyles.boxShadow]}>
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
