import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { gStyles } from "../styles/GlobalStyles";
import AddTaskForm from "../components/common/AddTaskForm";
import CollectionTitle from "../components/common/CollectionTitle";
import TasksList from "../components/common/TasksList";
import { collections } from "../Global";

import { useNavigation } from "@react-navigation/native";

export default function Unassembled() {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([
    { text: "Купить молоко", type: "physical", key: "1" },
    { text: "Починить кран", type: "creative", key: "2" },
    { text: "Сделать проект", type: "intellectual", key: "3" },
    { text: "Сходить в кино", type: "rest", key: "4" },
    { text: "Построить коммунизм", type: "intellectual", key: "5" },
    { text: "Больше не наливать деду", type: "communication", key: "6" },
    { text: "Купить кран", type: "physical", key: "7" },
    { text: "Починить молоко", type: "physical", key: "8" },
    { text: "Сделать деда", type: "creative", key: "9" },
    { text: "Сходить в коммунизм", type: "rest", key: "10" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[gStyles.container, gStyles.back]}>
      <View style={[styles.dailyplannerWrap, gStyles.boxShadowMain]}>
        <TouchableOpacity
          style={styles.touchableWrap}
          onPress={() => navigation.navigate("Dailyplanner")}
        >
          <Text style={styles.dailyplannerText}>
            {collections["dailyplanner"]}
          </Text>
        </TouchableOpacity>
      </View>
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
