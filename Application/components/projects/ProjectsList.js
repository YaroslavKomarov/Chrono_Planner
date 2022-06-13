import React from "react";
import { View, FlatList } from "react-native";

import { gStyles, taskListStyles } from "../../styles/GlobalStyles";
import ProjectsListItem from "./ProjectsListItem";

export default function ProjectsList({ projects, setProjects }) {
  const handleRemove = (key) => {
    const newList = projects.filter((item) => item.key !== key);
    setProjects(newList);
  };

  return (
    <View style={[gStyles.boxShadowMain, taskListStyles.listWrap]}>
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <View style={taskListStyles.taskContainer}>
            <ProjectsListItem
              project={item}
              setProject={setProjects}
              onRemove={handleRemove}
            />
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
