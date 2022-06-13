import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { gStyles } from "../../styles/GlobalStyles";
import { collections } from "../../Global";
import MontlyplannerTitle from "./MonthlyplannerTitle";

export default function MonthlyplannerHeader({ setModalVisible, navigation }) {
  return (
    <View>
      <View style={[styles.dailyplannerWrap, gStyles.boxShadowMain]}>
        <TouchableOpacity
          style={styles.touchableWrap}
          onPress={() => navigation.navigate("Dailyplanner")}
        >
          <Text style={styles.dailyplannerText}>
            {collections["dailyplanner"]}
          </Text>
        </TouchableOpacity>
      </View>
      <MontlyplannerTitle setModalVisible={setModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  dailyplannerWrap: {
    width: "100%",
    paddingTop: "11%",
    paddingBottom: "3%",
    backgroundColor: "rgba(255, 255, 255,1)",
  },
  touchableWrap: {
    justifyContent: "space-around",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(115, 88, 65, 1)",
    padding: 5,
    paddingLeft: 20,
    paddingRight: 15,
  },
  dailyplannerText: {
    marginRight: "1%",
    fontFamily: "roboto-reg",
    fontSize: 20,
    color: "rgba(115, 88, 65, 1)",
  },
});
