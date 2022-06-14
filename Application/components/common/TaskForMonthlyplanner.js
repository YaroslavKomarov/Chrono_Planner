import React, { useState } from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableOpacity } from "react-native-gesture-handler";

import ConfirmationForm from "./ConfirmationForm";
import { taskStyles } from "../../styles/GlobalStyles";
import ActivitiesMarks from "./ActivitiesMarks";
import ChangeTaskForm from "./ChangeTaskForm";
import MigrateForm from "./MigrateForm";

export default function Task({ task, setTask, removeTask, sourceCollection }) {
  const [confirmFormText, setConfirmFormText] = useState("");

  const [isTaskDone, setIsTaskDone] = useState(false);

  const [confirmFormType, setConfirmFormType] = useState("");

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const [migrateModalVisible, setMigrateModalVisible] = useState(false);

  const [changeModalVisible, setChangeModalVisible] = useState(false);

  const leftSwipeActions = () => {
    return (
      <TouchableOpacity
        disable={isTaskDone}
        style={[
          taskStyles.deleteButtonWrap,
          taskStyles.buttonWrap,
          sourceCollection === "montlyplanner" ? { minHeight: 60 } : {},
        ]}
        onPress={() => {
          setConfirmFormText("Вы уверены, что хотите удалить задачу?");
          setConfirmModalVisible(true);
          setConfirmFormType("delete");
        }}
      >
        <AntDesign name="delete" size={38} color={"white"} />
      </TouchableOpacity>
    );
  };

  const rightSwipeActions = () => {
    return (
      <TouchableOpacity style={taskStyles.btnsContainer}>
        <TouchableOpacity
          disable={isTaskDone}
          style={[
            taskStyles.doneButtonWrap,
            taskStyles.buttonWrap,
            sourceCollection === "montlyplanner" ? { minHeight: 60 } : {},
          ]}
          onPress={() => {
            setConfirmFormText("Вы уверены, что хотите завершить задачу?");
            setConfirmModalVisible(true);
            setConfirmFormType("complete");
          }}
        >
          <AntDesign name="checkcircleo" size={38} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
          disable={isTaskDone}
          style={[
            taskStyles.migrateButtonWrap,
            taskStyles.buttonWrap,
            sourceCollection === "montlyplanner" ? { minHeight: 60 } : {},
          ]}
          onPress={() => (isTaskDone ? {} : setMigrateModalVisible(true))}
        >
          <Feather name="arrow-right" size={38} color={"white"} />
        </TouchableOpacity>
        <MigrateForm
          modalVisible={migrateModalVisible}
          setModalVisible={setMigrateModalVisible}
          sourceCollection={sourceCollection}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      renderLeftActions={leftSwipeActions}
      renderRightActions={rightSwipeActions}
    >
      <View
        style={[
          taskStyles1.swipeContainer,
          sourceCollection === "montlyplanner" ? { minHeight: 60 } : {},
        ]}
      >
        <Modal visible={confirmModalVisible} transparent={true}>
          <ConfirmationForm
            setModalVisible={setConfirmModalVisible}
            confirmFormText={confirmFormText}
            task={task}
            setIsTaskDone={setIsTaskDone}
            setMigrateModalVisible={setMigrateModalVisible}
            removeTask={removeTask}
            confirmFormType={confirmFormType}
          />
        </Modal>
        <View style={taskStyles.penIconWrap}>
          <ActivitiesMarks activityType={task.type} />
        </View>
        <View style={taskStyles.textContainer}>
          <Text
            style={[
              sourceCollection === "montlyplanner"
                ? taskStyles.monthlyTaskText
                : taskStyles.taskText,
              taskStyles.boxShadow,
              isTaskDone ? taskStyles.isTaskDone : {},
            ]}
          >
            {task.text}
          </Text>
        </View>
        <TouchableOpacity
          disable={isTaskDone}
          onPress={() => (isTaskDone ? {} : setChangeModalVisible(true))}
        >
          <SimpleLineIcons name="pencil" size={24} color={"#7E869E"} />
        </TouchableOpacity>
        <ChangeTaskForm
          modalVisible={changeModalVisible}
          setModalVisible={setChangeModalVisible}
          setTask={setTask}
          task={task}
        />
      </View>
    </Swipeable>
  );
}

export const taskStyles1 = StyleSheet.create({
  swipeContainer: {
    flex: 1,
    minHeight: 75,
    flexDirection: "row",
    marginHorizontal: "4%",
    backgroundColor: "rgba(235, 216, 199, 1)",
    alignItems: "center",
  },
});
