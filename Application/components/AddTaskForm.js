import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { Formik } from 'formik';

import { formStyles } from '../styles/FormStyles';


export default function AddTaskForm({ modalVisible, setModalVisible, setTask }) {
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
            initialValues={{  text: '', type: ''}} 
            onSubmit={(values, action) => {
                addTask(values);
                action.resetForm();
            }}>
            {(props) => (
                <View>
                    <TextInput style={[formStyles.inputText, formStyles.boxShadow]}
                        value={props.values.text} 
                        placeholder='Введите текст задачи...' 
                        onChangeText={props.handleChange('text')}
                        />
                    <TextInput style={[formStyles.inputText, formStyles.boxShadow]}
                        value={props.values.type} 
                        placeholder='Выберите тип активности' 
                        onChangeText={props.handleChange('type')}
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
	);
}
