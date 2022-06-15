import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";
import * as React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import RadioForm from "react-native-simple-radio-button";

import { gStyles, formStyles, taskListStyles } from "../styles/GlobalStyles";

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

const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function addArr(str, val) {
  for (var i = 1; i < 21; i++) {
    if (i == val) arr[i] = str;
  }
}

export default function AdditionalTest() {
  const navigation = useNavigation();

  function checkArr(val) {
    var sum = 0;
    for (var i = 1; i < 21; i++) {
      if (val[i] == 0) {
        return alert("Не все ответы выбраны !");
      }
      sum += val[i];
    }
    if (sum >= 19 && sum <= 32) {
      setResult("Лев");
      global.CHRONOTYPE = "lion";
    } else if (sum >= 33 && sum <= 47) {
      setResult("Медведь");
      global.CHRONOTYPE = "bear";
    } else if (sum >= 48 && sum <= 61) {
      setResult("Волк");
      global.CHRONOTYPE = "wolf";
    }
    {
      setModalOfREsult(true);
    }
  }

  const [modalOfResult, setModalOfREsult] = useState(false);
  const [result, setResult] = useState("");

  const [modalOfHI, setModalVisibleHI] = useState(true);

  return (
    <Modal style={[gStyles.container, gStyles.back]} visible={modalOfHI}>
      <Modal animationType="slide" transparent={true} visible={modalOfResult}>
        <View style={formStyles.formContainer}>
          <View style={[taskListStyles.formContainer, gStyles.boxShadowMain]}>
            <Text style={taskListStyles.formTitle}>
              Ваш хронотип это {result}
            </Text>
            <View style={styles.touchableWrap}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisibleHI(false);
                  setModalOfREsult(false);
                  navigation.navigate("Monthlyplanner");
                }}
                style={[
                  formStyles.addButton,
                  gStyles.boxShadow,
                  formStyles.button,
                ]}
              >
                <Text style={formStyles.buttonText}>Вернуться домой</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
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
                selectedButtonColor={"rgba(135, 156, 255, 1)"}
                buttonSize={15}
                labelStyle={{
                  margin: 5,
                  fontSize: 20,
                  fontFamily: "PTSans-reg",
                  color: "rgba(115, 88, 65, 1)",
                }}
              />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.FlatList}
      />
      <View style={styles.touchableWrap}>
        <TouchableOpacity
          onPress={() => checkArr(arr)}
          style={[formStyles.addButton, gStyles.boxShadow, formStyles.button]}
        >
          <Text style={formStyles.buttonText}>Получить результат</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
    color: "rgba(115, 88, 65, 1)",
  },
  Text: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "PTSans-bold",
    margin: 5,
    color: "rgba(115, 88, 65, 1)",
  },
  quethion: {
    textAlign: "center",
    margin: 10,
    borderWidth: 2,
    borderColor: "rgba(253, 247, 241, 1)",
    borderRadius: 20,
    backgroundColor: "rgba(253, 247, 241, 1)",
  },
  FlatList: {
    marginTop: 20,
  },
  touchableWrap: {
    height: 60,
  },
});
