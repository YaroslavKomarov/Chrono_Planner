import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

import ActivitiesMarks from "../common/ActivitiesMarks";
import DailyplannerTask from "./DailyplannerTask";
import { taskListStyles } from "../../styles/GlobalStyles";
import { activitiesColor, activities } from "../../Global";
import Stripe from "./Stripe";

export default function ScheduleBlock({ block }) {
  const { height, width } = useWindowDimensions();

  const [modalVisible, setModalVisible] = useState(false);

  const [tasks, setTasks] = useState([
    { text: "Купить молоко", key: "1" },
    { text: "Починить кран", key: "2" },
    { text: "Сделать проект", key: "3" },
    { text: "Сходить в кино", key: "4" },
    { text: "Построить коммунизм", key: "5" },
    { text: "Больше не наливать деду", key: "6" },
  ]);

  const handleRemove = (key) => {
    const newList = tasks.filter((item) => item.key !== key);
    setTasks(newList);
  };

  const startTime = () => {
    const arr = block.StartTime.split(":");
    const result = new Date();
    result.setHours(arr[0], arr[1]);
    return result;
  };

  const endTime = () => {
    const arr = block.EndTime.split(":");
    const result = new Date();
    result.setHours(arr[0], arr[1]);
    return result;
  };

  const blockSize = (endTimeHours, endTimeMinutes) => {
    const oneHourSize = height / 8;
    const diffHours = endTimeHours - startTime().getHours();
    const diffMin = endTimeMinutes - startTime().getMinutes();
    return (diffHours + diffMin / 60) * oneHourSize;
  };

  let datetimeNow = new Date();
  let hoursNow = datetimeNow.getHours();
  let minutesNow = datetimeNow.getMinutes();

  const updateTime = () => {
    hoursNow = datetimeNow.getHours();
    minutesNow = datetimeNow.getMinutes();
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.timeRangeWrap}>
        {(startTime() - datetimeNow <= 0
            && endTime() - datetimeNow > 0) ? (<Stripe sizefunc={blockSize} hoursNow={hoursNow} minutesNow={minutesNow}
            /*style={[{marginTop: blockSize(hoursNow, minutesNow)}]}*//>) : (null)}
        {block.key === "1" ? (
          <View style={[{ marginTop: "15%", width: 40 }, styles.time]}>
            <Text style={styles.timeText}>{block.StartTime}</Text>
          </View>
        ) : (
          <View></View>
        )}
        <View style={[{ marginBottom: "15%", width: 40 }, styles.time]}>
          <Text style={styles.timeText}>{block.EndTime}</Text>
        </View>
      </View>
      <View
        style={[
          styles.scheduleBlock,
          styles.boxShadow,
          {
            minHeight: blockSize(endTime().getHours(), endTime().getMinutes()),
            backgroundColor: activitiesColor[block.ActivityType],
          },
        ]}
      >
        <View style={styles.headerWrap}>
          <TouchableOpacity
            style={styles.blockTitle}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <AntDesign
              name="down"
              size={18}
              color="black"
              style={{ marginTop: "1%" }}
            />
            <Text> {activities[block.ActivityType]}</Text>
          </TouchableOpacity>
          <ActivitiesMarks
            style={styles.headerMark}
            activityType={block.ActivityType}
          />
        </View>
        {modalVisible ? (
          <View style={styles.listWrap}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <View style={taskListStyles.taskContainer}>
                  <DailyplannerTask
                    task={item}
                    setTask={setTasks}
                    onRemove={handleRemove}
                  />
                </View>
              )}
              keyExtractor={(item) => item.key}
            />
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "rgba(97, 89, 89, 1)",
    marginHorizontal: "4%",
  },
  timeRangeWrap: {
    justifyContent: "space-between",

    borderRightWidth: 1,
  },
  time: {
    padding: "2%",
    borderRadius: 10,
  },
  timeText: {
    color: "rgba(97, 89, 89, 1)",
    alignSelf: "center",
    fontSize: 12,
  },
  headerWrap: {
    flexDirection: "row",
  },
  headerMark: {
    marginLeft: "auto",
  },
  blockTitle: {
    width: "80%",
    flexDirection: "row",
    marginHorizontal: "3%",
    marginBottom: "2%",
  },
  scheduleBlock: {
    flex: 1,
    marginVertical: "3%",
    marginRight: "2%",
    marginLeft: "4%",
    paddingVertical: "6%",
    borderRadius: 18,
  },
  listWrap: {
    flex: 1,
    paddingHorizontal: "2%",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 0,
  },
  blockTasksWrap: {
    minHeight: "80%",
  },
});
