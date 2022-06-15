import React, { useState } from "react";
import { View, FlatList, StyleSheet} from "react-native";

import Subtask from "../components/subtasks/Subtask";
import CollectionTitle from "../components/common/CollectionTitle";
import { formatTitle } from "../utils/uiHandler";
import AddSubtaskForm from "../components/subtasks/AddSubtaskForm";
import { gStyles, taskListStyles } from "../styles/GlobalStyles";
import DailyplannerLink from "../components/common/DailyplannerLink";

export default function Subtasks({ route }) {
    const [subtasks, setSubtasks] = useState([
        { text: "Утвердить новые макеты", type: '', key: "1" },
        { text: "Провести тесты UI", type: '', key: "2" },
        { text: "Оставить себе ясные дни", type: '', key: "3" },
    ]);

    const { title } = route.params;
    
    const [modalVisible, setModalVisible] = useState(false);

    const removeSubtask = (key) => {
        const newList = subtasks.filter((item) => item.key !== key);
        setSubtasks(newList);
    };

    return (
        <View style={[gStyles.container, gStyles.back]}>
            <DailyplannerLink />
            <CollectionTitle title={formatTitle(title, 28)} setModalVisible={setModalVisible} />
            <View style={[gStyles.boxShadowMain, taskListStyles.listWrap]}>
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
