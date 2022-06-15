import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { gStyles } from "../styles/GlobalStyles";
import CompletedTitle from "../components/completed/CompletedTitle";

import { useNavigation } from "@react-navigation/native";
import DailyplannerLink from "../components/common/DailyplannerLink";
import CompletedTasksList from "../components/completed/CompletedTasksList";
import CompletedProjectsList from "../components/completed/CompletedProjectsList";

export default function Completed() {
    const navigation = useNavigation();

    const [screenState, setScreenState] = useState('tasks');

    const tasks = [
        { text: "Сделать проект", type: "intellectual", key: "1" },
        { text: "Сходить в кино", type: "rest", key: "2" }
    ];

    const projects = [
        { projName: "Приложение на react native", key: "1" },
        { projName: "Проект на Arduino nano", key: "2" },
        { projName: "Обучение немецкому языку", key: "3" },
    ];

    return (
        <View style={[gStyles.container, gStyles.back]}>
            <DailyplannerLink />
            <CompletedTitle setScreenState={setScreenState}/>
            {screenState === 'tasks' ? (
                <CompletedTasksList tasks={tasks} />
            ) : (
                <CompletedProjectsList projects={[]}/>
            )}
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
