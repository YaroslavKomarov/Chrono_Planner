import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { gStyles } from "../styles/GlobalStyles";
import CollectionTitle from "../components/common/CollectionTitle";
import ProjectsList from "../components/projects/ProjectsList";
import AddProjectForm from "../components/projects/AddProjectForm";
import { collections } from "../Global";

import { useNavigation } from "@react-navigation/native";

export default function Projects() {
  const navigation = useNavigation();

  const [projects, setProjects] = useState([
    { projName: "Приложение на react native", key: "1" },
    { projName: "Проект на Arduino nano", key: "2" },
    { projName: "Обучение немецкому языку", key: "3" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[gStyles.container, gStyles.back]}>
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
      <CollectionTitle
        title={collections["projects"]}
        setModalVisible={setModalVisible}
      />
      <ProjectsList projects={projects} setProjects={setProjects} />
      <AddProjectForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setProject={setProjects}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  dailyplannerWrap: {
    width: "100%",
    paddingTop: "11%",
    paddingBottom: "3%",
    backgroundColor: "rgba(255, 255, 255, 1)",
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
