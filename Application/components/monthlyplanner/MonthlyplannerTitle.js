import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { gStyles, collectionTitleStyles } from "../../styles/GlobalStyles";

const getMonth = () => {
  return "Январь,Февраль,Март,Апрель,Май,Июнь,Июль,Август,Сентябрь,Октябрь,Ноябрь,Декабрь".split(
    ","
  );
};

export default function MontlyplannerTitle({ setModalVisible }) {
  const getCurrentMonth = () => {
    const today = new Date();
    const month = getMonth();
    const currentMonth = month[today.getMonth()];
    return currentMonth;
  };

  return (
    <View style={styles.titleContainer}>
      <View style={collectionTitleStyles.textWrap}>
        <Text
          style={[collectionTitleStyles.collectionTitle, gStyles.boxShadow]}
        >
          {getCurrentMonth()}
        </Text>
      </View>
      <View style={collectionTitleStyles.btnWrap}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <AntDesign
            name="pluscircleo"
            size={25}
            style={{ color: "rgba(115, 88, 65, 1)" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: "5%",
    flexDirection: "row",
    maxHeight: 250,
  },
});
