import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { gStyles, taskListStyles } from "../../styles/GlobalStyles";
import ScheduleBlock from "./ScheduleBlock";
import { schedule } from "../../Global";

export default function Schedule() {
  return (
    <View style={[styles.list, gStyles.boxShadowMain]}>
      <FlatList
        data={schedule}
        renderItem={({ item }) => (
          <View style={taskListStyles.taskContainer}>
            <ScheduleBlock block={item} />
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    margin: "5%",
    paddingVertical: "6%",
    backgroundColor: "rgba(253, 247, 241, 1)",
    borderRadius: 25,
  },
});
