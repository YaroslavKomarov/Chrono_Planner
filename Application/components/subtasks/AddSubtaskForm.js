import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Text, Modal } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { AntDesign } from "@expo/vector-icons";

import { gStyles, formStyles } from "../../styles/GlobalStyles";

export default function AddSubtaskForm({
  modalVisible,
  setModalVisible,
  setTask,
}) {
  const validate = Yup.object().shape({
    text: Yup.string().required("Это обязательное поле"),
  });

  const addTask = (task) => {
    // Вызов БД для добавления вместо использования setTask
    // Вместо setTask следует передавать контекст, для определения коллекции добавления (Например, имя таблицы)
    setTask((list) => {
      task.key = Math.random().toString();
      return [task, ...list];
    });
    setModalVisible(false);
  };

  return (
    <Modal transparent={true} visible={modalVisible}>
      <View style={formStyles.modalView}>
        <View style={[formStyles.formContainer, gStyles.boxShadowMain]}>
          <Text style={formStyles.formTitle}>Добавьте новую подзадачу</Text>
          <Formik
            initialValues={{ text: "" }}
            validationSchema={validate}
            onSubmit={(values, action) => {
              addTask(values);
              action.resetForm();
            }}
          >
            {(props) => (
              <View>
                <TextInput
                  style={[formStyles.inputText, gStyles.boxShadow]}
                  value={props.values.text}
                  placeholder="Введите текст подзадачи..."
                  onChangeText={props.handleChange("text")}
                />
                {props.errors.text && (
                  <View style={formStyles.errorWrap}>
                    <Text style={formStyles.errorText}>
                      {props.errors.text}{" "}
                    </Text>
                    <AntDesign
                      name="exclamationcircleo"
                      size={20}
                      color="red"
                    />
                  </View>
                )}
                <View style={formStyles.btnContainer}>
                  <TouchableOpacity
                    onPress={props.handleSubmit}
                    style={[
                      formStyles.addButton,
                      gStyles.boxShadow,
                      formStyles.button,
                    ]}
                  >
                    <Text style={formStyles.buttonText}>Принять</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={[
                      formStyles.cancelButton,
                      gStyles.boxShadow,
                      formStyles.button,
                    ]}
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
