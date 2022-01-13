import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { Formik } from 'formik';
import RNPickerSelect from 'react-native-picker-select';

import TagList from './TagList';
import { formStyles } from '../styles/FormStyles';
import { gStyles } from '../styles/GlobalStyles';


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
                    <TextInput 
                        style={[formStyles.inputText, gStyles.boxShadow]}
                        value={props.values.text} 
                        placeholder='Введите текст задачи...' 
                        onChangeText={props.handleChange('text')}
                        />
                    <TagList/>
                    {/* <RNPickerSelect
                        style={[formStyles.inputText, formStyles.boxShadow]}
                        value={props.values.type} 
                        placeholder={{
                            label: 'Выберите тип активности',
                            value: null,
                        }}
                        onValueChange={props.handleChange('type')}
                        items={[
                            { label: 'Football', value: 'football' },
                            { label: 'Baseball', value: 'baseball' },
                            { label: 'Hockey', value: 'hockey' },
                        ]} 
                    /> */}
                    <View style={formStyles.btnContainer}>
                        <TouchableOpacity onPress={props.handleSubmit} style={[formStyles.addButton, gStyles.boxShadow]}>
                            <Text style={formStyles.buttonText}>Создать</Text>
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
