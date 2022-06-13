import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { activitiesColor, activities } from "../../Global";

export default function ActivityTag(props) {
  return (
    <TouchableOpacity
      style={[
        styles.element,
        { backgroundColor: activitiesColor[props.item.name] },
      ]}
      onPress={() => {
        props.selectItem(props.item.key);
        props.setTaskType(props.item.name);
      }}
    >
      <FontAwesome5
        name={props.item.isSelected ? "check-circle" : "circle"}
        size={20}
        style={styles.icon}
        color="rgba(0, 0, 0, 1)"
      />
      <Text style={{ marginTop: 3, fontSize: 15 }}>
        {activities[props.item.name]}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  element: {
    padding: "3%",
    margin: "1%",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 3,
  },
});
