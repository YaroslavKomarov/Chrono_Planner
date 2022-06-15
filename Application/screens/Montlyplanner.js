import React, { useState } from "react";
import { View } from "react-native";

import MonthlyplannerTasksList from "../components/monthlyplanner/MontlyplannerTasksList";
import AddTaskForm from "../components/common/AddTaskForm";
import { gStyles } from "../styles/GlobalStyles";
import MyCalendar from "../components/common/MyCalendar";
import CollectionTitle from "../components/common/CollectionTitle";
import { getCurrentMonth } from "../utils/uiHandler";
import DailyplannerLink from "../components/common/DailyplannerLink";

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
      <DailyplannerLink />
      <CollectionTitle title={getCurrentMonth()} setModalVisible={setModalVisible} />
      <MyCalendar />
      <MonthlyplannerTasksList
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        tasks={tasks}
        setTasks={setTasks}
      />
      <AddTaskForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTask={setTasks}
      />
    </View>
  );
}
