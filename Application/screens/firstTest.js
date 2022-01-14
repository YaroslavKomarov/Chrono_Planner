import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Animated,
} from "react-native";
import * as React from "react";
import { RadioButton } from "react-native-paper";

import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from "../styles/GlobalStyles";

import { taskListStyles } from "../styles/TaskListStyles";

const DATA = [
  {
    title: "Я не могу заснуть или просыпаюсь от малейшего звука или света",
    id: "1",
  },
  {
    title: "Еда – не самая большая моя страсть.",
    id: "2",
  },
  {
    title: "Обычно я просыпаюсь до будильника",
    id: "3",
  },
  {
    title: "Я не могу спать в самолете, даже в берушах и маске для сна",
    id: "4",
  },
  {
    title: " В состоянии усталости я больше раздражаюсь",
    id: "5",
  },
  {
    title: "Я слишком беспокоюсь по мелочам",
    id: "6",
  },
  {
    title: "У меня бессонница",
    id: "7",
  },
  {
    title: "В школе я переживал из-за оценок",
    id: "8",
  },
  {
    title:
      "Перед сном я перебираю случившееся в прошлом и возможные события будущего",
    id: "9",
  },
  {
    title: "Я перфекционист",
    id: "10",
  },
];

var arr = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

function addArr(str, val) {
  for (var i = 1; i < 11; i++) {
    if (i == val) arr[i] = str;
  }
}

const Item = ({ item }) => (
  <View style={styles.quethion}>
    <Text style={styles.Text}>{item.title}</Text>
    <View style={styles.row}>
      <Text style={styles.answer}>да</Text>
      <RadioButton value="да" onPress={() => addArr("да", item.id)} />
      <Text style={styles.answer}>нет</Text>
      <RadioButton value="нет" onPress={() => addArr("нет", item.id)} />
    </View>
  </View>
);

class Test1 extends React.Component {
  checkArr(val) {
    var count = 0;
    for (var i = 1; i < 11; i++) {
      if (val[i] == "0") {
        return alert("Не все ответы выбраны !");
      }
      if (val[i] == "да") {
        count += 1;
      }
    }
    if (count >= 7) this.setState({ modalVisibleHome: true });
    else this.setState({ modalVisible: true });
  }
  state = {
    modalVisible: false,
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
    this.props.navigation.navigate("Test2");
  }
  state = {
    modalVisibleHome: false,
  };
  setModalVisibleHome(visible) {
    this.setState({ modalVisibleHome: visible });
    this.props.navigation.navigate("Test1");
  }

  render() {
    const renderItem = ({ item }) => {
      return <Item item={item} />;
    };
    return (
      <AnimatedLinearGradient
        colors={["rgba(255, 154, 158, 1)", "rgba(250, 208, 196, 1)"]}
        style={gStyles.container}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          style
        >
          <View style={taskListStyles.modalView}>
            <View style={[taskListStyles.formContainer, gStyles.boxShadowMain]}>
              <Text style={taskListStyles.formTitle}>
                Просьба пройти еще один тест для более точного определения
                хронотипа
              </Text>
              <TouchableOpacity
                onPress={() => this.setModalVisible(false)}
                style={styles.touchableWrap}
              >
                <Text style={styles.Text}>Дополнительный тест</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisibleHome}
        >
          <View style={taskListStyles.modalView}>
            <View style={[taskListStyles.formContainer, gStyles.boxShadowMain]}>
              <Text style={taskListStyles.formTitle}>
                Ваш хронотип это дельфин
              </Text>
              <TouchableOpacity
                onPress={() => this.setModalVisibleHome(false)}
                style={styles.touchableWrap}
              >
                <Text style={styles.Text}>Вернуться домой</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.FlatList}
        />
        <View style={styles.Button}>
          <TouchableOpacity
            onPress={() => this.checkArr(arr)}
            style={styles.touchableWrap}
          >
            <Text style={styles.Text}>Получить результат</Text>
          </TouchableOpacity>
        </View>
      </AnimatedLinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF9A9E",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "34%",
  },
  Button: {
    top: -5,
  },
  answer: {
    marginTop: 7,
  },
  Text: {
    textAlign: "center",
    fontSize: 18,
  },
  quethion: {
    textAlign: "center",
    margin: 10,
    borderWidth: 2,
    borderColor: "#FCE2D8",
    borderRadius: 10,
    backgroundColor: "#FCE2D8",
  },
  FlatList: {
    marginTop: 20,
  },
  touchableWrap: {
    height: 30,
    margin: 5,
    marginBottom: 0,
    borderColor: "#AAE2AA",
    backgroundColor: "#AAE2AA",
    borderWidth: 3,
    borderRadius: 5,
  },
});

export default Test1;
