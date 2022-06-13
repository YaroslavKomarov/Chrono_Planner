import React, { useState } from "react";
import { View } from "react-native";

import { gStyles } from "../styles/GlobalStyles";
import DailyplannerHeader from "../components/dailyplanner/DailyplannerHeader";
import Schedule from "../components/dailyplanner/Schedule";
import AddDailyTaskForm from "../components/dailyplanner/AddDailyTaskForm";

export default function Dailyplanner() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[gStyles.container, gStyles.back]}>
      <DailyplannerHeader setModalVisible={setModalVisible} />
      <Schedule />
      <AddDailyTaskForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
