import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { Formik } from 'formik';

import { formStyles } from '../styles/FormStyles';
import { gStyles } from '../styles/GlobalStyles';


export default function AddProjectForm({ modalVisible, setModalVisible, setTask }) {
    const addTask = (task) => {
        setTask((list) => {
            task.key = (+list[list.length] + 1).toString();
            return [
                task,
                ...list
            ]
        });
        setModalVisible(false);
    };

    return (
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
                        <TouchableOpacity onPress={props.handleSubmit} style={[formStyles.addButton, gStyles.boxShadow]}>
                            <Text style={formStyles.buttonText}>Принять</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={[formStyles.cancelButton, gStyles.boxShadow]}>
                            <Text style={formStyles.buttonText}>Отмена</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
	);
}
