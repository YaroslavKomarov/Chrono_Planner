import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { gStyles, taskListStyles } from "../../styles/GlobalStyles";
import Task from "../common/Task";

export default function MonthlyplannerTasksList({ tasks, setTasks }) {
  const removeTask = (key) => {
    const newList = tasks.filter((item) => item.key !== key);
    setTasks(newList);
  };

  return (
    <View style={[gStyles.back, styles.listWrap]}>
      <FlatList
        persistentScrollbar={true}
        data={tasks}
        renderItem={({ item }) => (
          <View style={taskListStyles.taskContainer}>
            <Task
              task={item}
              setTask={setTasks}
              removeTask={removeTask}
              sourceCollection='monthlyplanner'
            />
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
    listWrap: {
        flex: 1.5,
        marginHorizontal: "5%",
        marginBottom: '5%'
    }
});
