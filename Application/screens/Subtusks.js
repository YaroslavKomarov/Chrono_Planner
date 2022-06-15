import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

import Subtask from "../components/subtasks/Subtask";
import CollectionTitle from "../components/common/CollectionTitle";
import { formatTitle } from "../utils/uiHandler";
import AddSubtaskForm from "../components/subtasks/AddSubtaskForm";
import { gStyles, taskListStyles } from "../styles/GlobalStyles";
import DailyplannerLink from "../components/common/DailyplannerLink";

export default function Subtasks({ route }) {
    const { title, subtasksProp } = route.params;

    const [subtasks, setSubtasks] = useState(subtasksProp);
    
    const [modalVisible, setModalVisible] = useState(false);

    const removeSubtask = (key) => {
        const newList = subtasks.filter((item) => item.key !== key);
        setSubtasks(newList);
    };

    return (
        <View style={[gStyles.container, gStyles.back]}>
            <DailyplannerLink />
            <CollectionTitle title={formatTitle(title, 25)} setModalVisible={setModalVisible} />
            <View style={[gStyles.boxShadowMain, taskListStyles.listWrap]}>
                {subtasks.length === 0 ? (
                    <View style={{alignItems: 'center',}}>
                        <Text style={{textAlign: 'center', fontSize: 16, fontFamily: "PTSans-bold", color: "rgba(115, 88, 65, 1)"}}>
                            Пока нет подзадач. Добавьте новую подзадачу
                        </Text>
                    </View>
                ) : (
                    <FlatList
                        persistentScrollbar={true}
                        data={subtasks}
                        renderItem={({ item }) => (
                            <View style={taskListStyles.taskContainer}>
                                <Subtask
                                    subtask={item}
                                    setSubtask={setSubtasks}
                                    onRemove={removeSubtask}
                                />
                            </View>
                        )}
                        keyExtractor={(item) => item.key}
                    />
                )}
            </View>
            <AddSubtaskForm
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setTask={setSubtasks}
            />
        </View>
    );
}

export const styles = StyleSheet.create({
    listWrap: {
        flex: 1,
        margin: "5%",
    },
    taskContainer: {
        
    }
});
