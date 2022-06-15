import React, { useState } from "react";
import { View } from "react-native";

import { gStyles } from "../styles/GlobalStyles";
import AddTaskForm from "../components/common/AddTaskForm";
import CollectionTitle from "../components/common/CollectionTitle";
import TasksList from "../components/common/TasksList";
import { formatTitle } from "../utils/uiHandler";
import DailyplannerLink from "../components/common/DailyplannerLink";

export default function Project({ route }) {
  const { projName, tasksProps } = route.params;

  const [tasks, setTasks] = useState(tasksProps);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[gStyles.container, gStyles.back]}>
      <DailyplannerLink />
      <CollectionTitle title={formatTitle(projName, 28)} setModalVisible={setModalVisible} />
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
