import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AntDesign } from '@expo/vector-icons';

import TagList from './TagList';
import { gStyles, formStyles } from '../../styles/GlobalStyles';


export default function AddDailyTaskForm({ setModalVisible, setTask }) {
    const addTask = (task) => {
        setTask((list) => {
            //task.key = (+list[list.length - 1].key + 1).toString();
            task.key = Math.random().toString();
            return [ task, ...list ]
        });
        setModalVisible(false);
    };

    return (
        <Formik 
            initialValues={{  text: '', type: ''}}
            validationSchema={validate} 
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
                    {(props.errors.text) &&
                        <View style={formStyles.errorWrap}>
                            <Text style={formStyles.errorText}>{props.errors.text}  </Text>
                            <AntDesign name="exclamationcircleo" size={20} color="red" />
                        </View>
                    }
                    <View>
                        <Text></Text>
                    </View>
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
	);
}