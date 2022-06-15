import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { gStyles, formStyles } from "../../styles/GlobalStyles";

export default function ConfirmationForm({
  setModalVisible,
  confirmFormText,
  task,
  removeTask,
  confirmFormType,
}) {
  const isWarning =
    task.subtasks.length !== 0 && confirmFormType === "complete";

  const title = isWarning
    ? "Невозможно выполнить задачу. Остались незавершенные подзадачи"
    : confirmFormText;

  return (
    <View style={[formStyles.modalView]}>
      <View style={[gStyles.boxShadowMain, formStyles.formContainer]}>
        <Text style={[formStyles.formTitle]}>{title}</Text>
        <View
          style={[
            formStyles.btnContainer,
            isWarning ? { alignSelf: "center" } : {},
          ]}
        >
          {isWarning ? (
            <View />
          ) : (
            <Button
              style={[
                formStyles.addButton,
                gStyles.boxShadow,
                formStyles.button,
              ]}
              onPress={() => {
                setModalVisible(false);
                if (confirmFormType === "delete") {
                  removeTask(task.key);
                } else if (confirmFormType === "complete") {
                  task.subtasks.length === 0 ? removeTask(task.key) : {};
                }
              }}
              title="Принять"
              color={"rgba(170, 226, 170, 1)"}
            />
          )}
          <Button
            onPress={() => setModalVisible(false)}
            style={[
              formStyles.cancelButton,
              gStyles.boxShadow,
              formStyles.button,
            ]}
            title="Отмена"
            color={"rgba(255, 154, 158, 1)"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    marginLeft: "2%",
    marginTop: 5,
  },
  button1: {
    width: 100,
    marginTop: "-11.6%",
    marginLeft: "64%",
    marginBottom: 10,
  },
});
