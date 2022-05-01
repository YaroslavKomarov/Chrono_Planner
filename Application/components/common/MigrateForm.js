import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import TagList from '../common/TagList';
import { gStyles, formStyles } from '../../styles/GlobalStyles';


export default function MigrateForm({ modalVisible, setModalVisible, sourceCollection }) {
    const [collectionType, setCollectionType] = useState('');

    const getTagNames = () => { 
        const initTags = ['unassembled', 'monthlyplanner', 'dailyplanner', 'projects'];
        if (sourceCollection !== 'projects') {
            const index = initTags.indexOf(sourceCollection);
            initTags.splice(index, 1);   
        }
        return initTags;
    };

    const addTask = (task) => {
        // Вызов БД для добавления вместо использования setTask
        // Вместо setTask следует передавать контекст, для определения коллекции добавления (Например, имя таблицы)
        const today = new Date();
        const currentDate = today.getDate();
        const currentTime = today.getHours() + ":" + today.getMinutes();

        setTask((list) => {
            task.key = Math.random().toString();
            return [ task, ...list ]
        });
        setModalVisible(false);
    };

    return (
        <Modal transparent={true} visible={modalVisible}>
            <View style={formStyles.modalView}>
                <View style={[formStyles.formContainer, gStyles.boxShadowMain]}>
                    <Text style={formStyles.formTitle} >Выберите коллекцию для перемещения задачи</Text>
                    <Formik 
                        initialValues={{  type: '' }} 
                        onSubmit={(values, action) => {
                            //addTask(values);
                            action.resetForm();
                        }}>
                        {(props) => (
                            <View>
                                <TagList 
                                    tagNames={getTagNames()} 
                                    setType={setCollectionType}
                                    formType='migrate'
                                />
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
