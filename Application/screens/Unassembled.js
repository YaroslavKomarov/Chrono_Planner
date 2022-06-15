import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { gStyles } from "../styles/GlobalStyles";
import AddTaskForm from "../components/common/AddTaskForm";
import CollectionTitle from "../components/common/CollectionTitle";
import TasksList from "../components/common/TasksList";
import { collections } from "../Global";

import { useNavigation } from "@react-navigation/native";
import DailyplannerLink from "../components/common/DailyplannerLink";

export default function Unassembled() {
  const navigation = useNavigation();
  
  const [tasks, setTasks] = useState([
    { text: "Починить кран", type: "physical", subtasks: [
      { text: "Купить сеситель", type: '', key: "1" },
    ], key: "0" },
    { text: "Начать заниматься спортом", type: "physical", subtasks: [], key: "1" },
    { text: "Выполнить ДЗ по шарпу", type: "intellectual", subtasks: [],key: "2" },
    { text: "Сходить в кино на Криминальное чтиво", type: "rest", subtasks: [], key: "4" },
    { text: "Встретиться со школьными друзьями", type: "communication", subtasks: [], key: "6" },
    { text: "Придумать идею для стартапа", type: "creative", subtasks: [], key: "9" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[gStyles.container, gStyles.back]}>
      <DailyplannerLink />
      <CollectionTitle
        title={collections["unassembled"]}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTask={setTasks}
      />
      <TasksList
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        tasks={tasks}
        setTasks={setTasks}
        sourceCollection="unassembled"
      />
      <AddTaskForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTask={setTasks}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  dailyplannerWrap: {
    width: "100%",
    paddingTop: "11%",
    paddingBottom: "3%",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  touchableWrap: {
    justifyContent: "space-around",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(115, 88, 65, 1)",
    padding: 5,
    paddingLeft: 20,
    paddingRight: 15,
  },
  dailyplannerText: {
    marginRight: "1%",
    fontFamily: "roboto-reg",
    fontSize: 20,
    color: "rgba(115, 88, 65, 1)",
  },
});
