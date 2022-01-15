import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Modal,
} from "react-native";
import * as React from "react";
import RadioForm, { RadioButton, Ra } from "react-native-simple-radio-button";

import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from "../../styles/GlobalStyles";

import { taskListStyles } from "../../styles/TaskListStyles";

const DATA = [
  {
    title:
      "На следующий день у вас нет запланированных занятий и вы можете позволить себе спать столько, сколько захочется. Когда вы проснетесь?",
    id: "1",
    quethion: [
      { label: "До 6.30", value: 1 },
      { label: "Между 6.30 и 8.45", value: 2 },
      { label: "После 8.45", value: 3 },
    ],
  },
  {
    title: "Требуется ли вам будильник, чтобы встать в определенное время?",
    id: "2",
    quethion: [
      {
        label: "В этом нет необходимости. Вы сами проснетесь в нужное время",
        value: 1,
      },
      { label: "Да, используете, с одним повтором или без", value: 2 },
      {
        label: "Да, используете и ставите еще один запасной и много повторов",
        value: 3,
      },
    ],
  },
  {
    title: "Во сколько вы просыпаетесь в выходной день?",
    id: "3",
    quethion: [
      { label: "В то же время, что и в рабочий", value: 1 },
      { label: "На 45–90 минут позже, чем в рабочий день", value: 2 },
      { label: "На 90 или более минут позже, чем в рабочий день", value: 3 },
    ],
  },
  {
    title: ". Как вы переносите смену часовых поясов?",
    id: "4",
    quethion: [
      { label: "Тяжело, независимо от обстоятельств", value: 1 },
      { label: "Адаптируетесь в течение 48 часов", value: 2 },
      {
        label: "Адаптируетесь очень быстро, особенно перемещаясь на запад",
        value: 3,
      },
    ],
  },
  {
    title: "Ваш любимый прием пищи? (Имеет значение время, а не меню.)",
    id: "5",
    quethion: [
      { label: "Завтрак", value: 1 },
      { label: "Обед", value: 2 },
      { label: "Ужин", value: 3 },
    ],
  },
  {
    title:
      "Если бы вам снова предстояло сдавать экзамен, каким было бы предпочтительное время начала,чтобы сдать его с максимальными вниманием и концентрацией (а не просто как-нибудь)?",
    id: "6",
    quethion: [
      { label: "Рано утром", value: 1 },
      { label: "Вскоре после полудня", value: 2 },
      { label: "В середине дня", value: 3 },
    ],
  },
  {
    title: "Какое вы выбрали бы время для интенсивной физической нагрузки?",
    id: "7",
    quethion: [
      { label: "До 8.00", value: 1 },
      { label: "Между 8.00 и 16.00", value: 2 },
      { label: "После 16.00", value: 3 },
    ],
  },
  {
    title: "Когда вы наиболее активны?",
    id: "8",
    quethion: [
      { label: "Через час-два после пробуждения", value: 1 },
      { label: "Через два-четыре часа после пробуждения", value: 2 },
      { label: "Через четыре-шесть часов после пробуждения", value: 3 },
    ],
  },
  {
    title:
      "Если бы вы сами могли выбирать режим пятичасового рабочего дня, какой период времени вы быпредпочли?",
    id: "9",
    quethion: [
      { label: "С 4.00 до 9.00", value: 1 },
      { label: "С 9.00 до 14.00", value: 2 },
      { label: " С 16.00 до 21.00", value: 3 },
    ],
  },
  {
    title: "Вы считаете свой тип мышления…",
    id: "10",
    quethion: [
      {
        label: "Левополушарным – у вас аналитическое и стратегическое мышление",
        value: 1,
      },
      { label: "У вас сбалансированное мышление", value: 2 },
      {
        label: "Правополушарным – творческой личностью, склонной к озарениям",
        value: 3,
      },
    ],
  },
  {
    title: "Вы спите днем?",
    id: "11",
    quethion: [
      { label: "Никогда", value: 1 },
      { label: "Иногда в выходные", value: 2 },
      { label: "Если вы вздремнете, то потом не уснете всю ночь", value: 2 },
    ],
  },
  {
    title:
      "Если бы вам предстояло два часа заниматься тяжелым физическим трудом, например переставлять мебель или рубить дрова, в какой период времени вы были бы максимально эффективны, а занятие – безопасно (а не просто чтобы побыстрее покончить с ним)?",
    id: "12",
    quethion: [
      { label: "С 8.00 до 10.00", value: 1 },
      { label: "С 11.00 до 13.00", value: 2 },
      { label: "С 18.00 до 20.00", value: 3 },
    ],
  },
  {
    title: "С каким утверждением вы согласитесь?",
    id: "13",
    quethion: [
      { label: "«Я придерживаюсь здорового образа жизни всегда»", value: 1 },
      { label: "«Я принимаю подобные решения иногда»", value: 2 },
      { label: "«Здоровый образ жизни дается мне с трудом»", value: 3 },
    ],
  },
  {
    title: "Какой уровень риска для вас приемлем?",
    id: "14",
    quethion: [
      { label: "Низкий", value: 1 },
      { label: "Средний", value: 2 },
      { label: "Высокий", value: 3 },
    ],
  },
  {
    title: "Вы считаете, что…",
    id: "15",
    quethion: [
      {
        label: "Настроены на будущее, у вас большие планы и четкие цели",
        value: 1,
      },
      {
        label:
          "Вы набрались опыта, с надеждой смотрите в будущее, но предпочитаете жить здесь и сейчас",
        value: 2,
      },
      {
        label:
          "Вы ориентированы на настоящее. Имеет значение только то, что хорошо сейчас",
        value: 3,
      },
    ],
  },
  {
    title: "Как бы вы охарактеризовали себя как студента?",
    id: "16",
    quethion: [
      { label: "Блестящий", value: 1 },
      { label: "Усидчивый", value: 2 },
      { label: "Нерадивый", value: 3 },
    ],
  },
  {
    title: "Утром вы просыпаетесь…",
    id: "17",
    quethion: [
      { label: "Трезвомыслящим", value: 1 },
      { label: "В тумане, но соображаете", value: 2 },
      { label: "Усталым, веки будто свинцовые", value: 3 },
    ],
  },
  {
    title: "Какой у вас аппетит в течение получаса после пробуждения?",
    id: "18",
    quethion: [
      { label: "Сильный голод", value: 1 },
      { label: "Голод", value: 2 },
      { label: "Полное отсутствие голода", value: 3 },
    ],
  },
  {
    title: "Как часто вы испытываете симптомы бессонницы?",
    id: "19",
    quethion: [
      { label: "Редко, только при адаптации в другом часовом поясе", value: 1 },
      { label: "Во время жизненных трудностей или стресса", value: 2 },
      { label: "Хронически. Бывает периодами", value: 3 },
    ],
  },
  {
    title: "Насколько вы удовлетворены жизнью?",
    id: "20",
    quethion: [
      { label: "Совершенно удовлетворен", value: 1 },
      { label: "Вполне удовлетворен", value: 2 },
      { label: "Не удовлетворен", value: 3 },
    ],
  },
];
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

function addArr(str, val) {
  for (var i = 1; i < 21; i++) {
    if (i == val) arr[i] = str;
  }
}

const Item = ({ item }) => (
  <View style={[styles.quethion, gStyles.boxShadowMain]}>
    <Text style={styles.Text}>{item.title}</Text>
    <View>
      <RadioForm
        radio_props={item.quethion}
        initial={4}
        onPress={
          ((value) => {
            this.setState({ value: value });
          },
          (value) => addArr(value, item.id))
        }
        formHorizontal={false}
        labelHorizontal={true}
        style={styles.answer}
        buttonColor={"rgba(17, 18, 53, 0.5)"}
        selectedButtonColor={"rgba(170, 226, 170, 1)"}
        buttonSize={20}
        labelStyle={{ margin: 5, fontSize: 20, fontFamily: "PTSans-reg" }}
      />
    </View>
  </View>
);

class Test2 extends React.Component {
  checkArr(val) {
    var sum = 0;
    for (var i = 1; i < 21; i++) {
      if (val[i] == 0) {
        return alert("Не все ответы выбраны !");
      }
      sum += val[i];
    }
    if (sum > 19 && sum < 32) this.state.result = "Лев";
    else if (sum >= 33 && sum <= 47) this.state.result = "Медведь";
    else if (sum >= 48 && sum <= 61) this.state.result = "Волк";
    this.setModalOfREsult(true);
  }
  state = {
    modalOfResult: false,
    result: "",
  };
  setModalOfREsult(visible) {
    this.setState({ modalOfResult: visible });
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
          visible={this.state.modalOfResult}
          style
        >
          <View style={taskListStyles.modalView}>
            <View style={[taskListStyles.formContainer, gStyles.boxShadowMain]}>
              <Text style={taskListStyles.formTitle}>
                Ваш хронотип это {this.state.result}
              </Text>
              <TouchableOpacity
                onPress={
                  (() => this.setModalOfREsult(false),
                  () => this.props.navigation.navigate("Monthlyplanner"))
                }
                style={styles.touchableWrap}
              >
                <Text style={[styles.Button]}>Вернуться домой</Text>
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
        <TouchableOpacity
          onPress={() => this.checkArr(arr)}
          style={styles.touchableWrap}
        >
          <Text style={styles.Button}>Получить результат</Text>
        </TouchableOpacity>
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
  column: {
    flexDirection: "row",
    flexWrap: "nowrap",
    marginBottom: 5,
    marginTop: 5,
  },
  Button: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "PTSans-bold",
  },
  answer: {
    margin: 10,
    width: 300,
  },
  Text: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "PTSans-bold",
    margin: 5,
  },
  quethion: {
    textAlign: "center",
    margin: 10,
    borderWidth: 2,
    borderColor: "#FCE2D8",
    borderRadius: 20,
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

export default Test2;
