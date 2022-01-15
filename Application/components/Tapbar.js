import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { tapbarStyles } from "../styles/TapbarStyles";
import { useNavigation } from "@react-navigation/native";

export default function Tapbar() {
  const navigation = useNavigation();

  const [isPressedArchive, setIsPressedArchive] = useState(false);

  const [isPressedHome, setIsPressedHome] = useState(false);

  const [isPressedAuthor, setIsPressedAuthor] = useState(false);

  const [isPressedTest, setIsPressedTest] = useState(false);

  const changeState = (mainSet) => {
    setIsPressedArchive(false);
    setIsPressedAuthor(false);
    setIsPressedHome(false);
    setIsPressedTest(false);
    mainSet(true);
  };

  const loadScreen = (mainSet, screenName) => {
    changeState(mainSet);
    navigation.navigate(screenName);
  };

  return (
    <View style={tapbarStyles.tapbar}>
      <TouchableOpacity
        onPress={() => loadScreen(setIsPressedArchive, "Archive")}
      >
        <View style={isPressedArchive ? tapbarStyles.isPressed : {}}>
          <AntDesign name="save" style={tapbarStyles.vectorIcons} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => loadScreen(setIsPressedHome, "Monthlyplanner")}
      >
        <View style={isPressedHome ? tapbarStyles.isPressed : {}}>
          <AntDesign name="home" style={tapbarStyles.vectorIcons} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => loadScreen(setIsPressedAuthor, "AuthorsCollections")}
      >
        <View style={isPressedAuthor ? tapbarStyles.isPressed : {}}>
          <AntDesign name="book" style={tapbarStyles.vectorIcons} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => loadScreen(setIsPressedTest, "Test1")}>
        <View style={isPressedTest ? tapbarStyles.isPressed : {}}>
          <AntDesign name="exception1" style={tapbarStyles.vectorIcons} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
