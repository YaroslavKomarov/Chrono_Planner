import React from "react";
import { View, FlatList, Text } from "react-native";

import { gStyles, taskListStyles } from "../../styles/GlobalStyles";
import CompletedProject from "./CompletedProject";

export default function CompletedProjectsList({ projects }) {
    return (
        <View style={[gStyles.boxShadowMain, taskListStyles.listWrap]}>
            {projects.length === 0 ? (
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontFamily: "PTSans-bold", color: "rgba(115, 88, 65, 1)"}}>
                        Пока нет завершенных проектов
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={projects}
                    renderItem={({ item }) => (
                    <View style={taskListStyles.taskContainer}>
                        <CompletedProject
                            project={item}
                        />
                    </View>
                    )}
                    keyExtractor={(item) => item.key}
                />
            )}
        </View>
    );
}
