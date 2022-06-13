import React from "react";
import { View, FlatList } from "react-native";

import { gStyles, taskListStyles } from "../../styles/GlobalStyles";
import Task from "./Task";

export default function TasksList({ tasks, setTasks, sourceCollection }) {
  const removeTask = (key) => {
    const newList = tasks.filter((item) => item.key !== key);
    setTasks(newList);
  };

  return (
    <View style={[gStyles.boxShadowMain, taskListStyles.listWrap]}>
      <FlatList
        persistentScrollbar={true}
        data={tasks}
        renderItem={({ item }) => (
          <View style={taskListStyles.taskContainer}>
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
