import React, { useState } from "react";
import { View } from "react-native";

import MonthlyplannerHeader from "../components/monthlyplanner/MonthlyplannerHeader";
import AddTaskForm from "../components/common/AddTaskForm";
import TasksList from "../components/common/TasksListMonthlyPlanner";
import { gStyles } from "../styles/GlobalStyles";
import MyCalendar from "../components/common/MyCalendar";

export default function Monthlyplanner({ navigation }) {
  const [tasks, setTasks] = useState([
    { text: "Купить молоко", type: "physical", key: "1" },
    { text: "Починить кран", type: "rest", key: "2" },
    { text: "Сделать проект", type: "intellectual", key: "3" },
    { text: "Сходить в кино", type: "communication", key: "4" },
    { text: "Построить коммунизм", type: "creative", key: "5" },
    { text: "Больше не наливать деду", type: "physical", key: "6" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[gStyles.container, gStyles.back]}>
      <MonthlyplannerHeader
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
      <MyCalendar />
      <TasksList
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        tasks={tasks}
        setTasks={setTasks}
        sourceCollection="monthlyplanner"
      />
      <AddTaskForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTask={setTasks}
      />
    </View>
  );
}
