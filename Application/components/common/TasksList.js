import React from "react";
import { View, FlatList, Text } from "react-native";

import { gStyles, taskListStyles } from "../../styles/GlobalStyles";
import Task from "./Task";

export default function TasksList({ tasks, setTasks, sourceCollection }) {
  const removeTask = (key) => {
    const newList = tasks.filter((item) => item.key !== key);
    setTasks(newList);
  };

  const isEmptyProj = sourceCollection === 'projects' && tasks.length === 0;

  return (
    <View style={[gStyles.boxShadowMain, taskListStyles.listWrap]}>
      {isEmptyProj ? (
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontFamily: "PTSans-bold", color: "rgba(115, 88, 65, 1)"}}>
              У проекта нет внутренних задач
          </Text>
        </View>
      ) : (
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
      )}
    
    </View>
  );
}
