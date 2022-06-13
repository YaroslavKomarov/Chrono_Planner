import React, { useState } from "react";
import { View } from "react-native";

import { gStyles } from "../styles/GlobalStyles";
import AddTaskForm from "../components/common/AddTaskForm";
import CollectionTitle from "../components/common/CollectionTitle";
import TasksList from "../components/common/TasksList";

export default function Project({ route }) {
  const [tasks, setTasks] = useState([
    { text: "Валидация Formik", type: "physical", key: "1" },
    { text: "Адаптивная верстка", type: "physical", key: "2" },
    { text: "Почитать про использование hooks", type: "physical", key: "3" },
    { text: "Построить коммунизм", type: "physical", key: "4" },
  ]);

  const { projName } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[gStyles.container, gStyles.back]}>
      <CollectionTitle title={projName} setModalVisible={setModalVisible} />
      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        sourceCollection="projects"
      />
      <AddTaskForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTask={setTasks}
      />
    </View>
  );
}
