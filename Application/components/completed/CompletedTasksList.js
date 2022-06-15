import React from "react";
import { View, FlatList } from "react-native";

import { gStyles, taskListStyles } from "../../styles/GlobalStyles";
import CompletedTask from "./CompletedTask";

export default function CompletedTasksList({ tasks }) {
  return (
    <View style={[gStyles.boxShadowMain, taskListStyles.listWrap]}>
      <FlatList
        persistentScrollbar={true}
        data={tasks}
        renderItem={({ item }) => (
          <View style={taskListStyles.taskContainer}>
            <CompletedTask task={item} />
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
