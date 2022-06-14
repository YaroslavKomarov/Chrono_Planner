import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Task from "./TaskForMonthlyplanner";

export default function TasksList({ tasks, setTasks, sourceCollection }) {
  const removeTask = (key) => {
    const newList = tasks.filter((item) => item.key !== key);
    setTasks(newList);
  };

  return (
    <View style={[taskListStyles1.listWrap]}>
      <FlatList
        persistentScrollbar={true}
        data={tasks}
        renderItem={({ item }) => (
          <View>
            <Task
              task={item}
              setTask={setTasks}
              removeTask={removeTask}
              sourceCollection={sourceCollection}
            />
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
export const taskListStyles1 = StyleSheet.create({
  listWrap: {
    flex: 2,
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
    marginTop: "25%",
    backgroundColor: "rgba(235, 216, 199, 1)",
    borderRadius: 20,
  },
});
