import React from 'react';
import { View, TouchableOpacity, TextInput, Text, Modal } from 'react-native';
import { Formik } from 'formik';

import { gStyles, formStyles } from '../../styles/GlobalStyles';


export default function AddProjectForm({ modalVisible, setModalVisible, setProject }) {
    const addTask = (proj) => {
        setProject((list) => {
            proj.key = (+list[list.length] + 1).toString();
            return [ proj, ...list ]
        });
        setModalVisible(false);
    };

    return (
        <Modal transparent={true} visible={modalVisible}>
            <View style={formStyles.modalView}>
                <View style={[formStyles.formContainer, gStyles.boxShadowMain]}>
                    <Text style={formStyles.formTitle} >Добавьте новый авторский проект</Text>
                    <Formik 
                        initialValues={{  projName: '' }} 
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
                                <View style={formStyles.btnContainer}>
                                    <TouchableOpacity
                                        onPress={props.handleSubmit} 
                                        style={[formStyles.addButton, gStyles.boxShadow, formStyles.button]}>
                                        <Text style={formStyles.buttonText}>Принять</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                        onPress={() => setModalVisible(!modalVisible)} 
                                        style={[formStyles.cancelButton, gStyles.boxShadow, formStyles.button]}>
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
