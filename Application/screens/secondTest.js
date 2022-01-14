import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
import * as React from "react";
import { RadioButton } from "react-native-paper";

import { LinearGradient } from "expo-linear-gradient";

import { gStyles } from "../styles/GlobalStyles";

const DATA = [
  {
    title:
      "На следующий день у вас нет запланированных занятий и вы можете позволить себе спать столько, сколько захочется. Когда вы проснетесь?",
    id: "1",
    A: "До 6.30",
    B: "Между 6.30 и 8.45",
    C: "После 8.45",
  },
  {
    title: "Требуется ли вам будильник, чтобы встать в определенное время?",
    id: "2",
    A: "В этом нет необходимости. Вы сами проснетесь в нужное время",
    B: "Да, используете, с одним повтором или без",
    C: "Да, используете и ставите еще один запасной и много повторов",
  },
  {
    title: "Во сколько вы просыпаетесь в выходной день?",
    id: "3",
    A: "В то же время, что и в рабочий",
    B: "На 45–90 минут позже, чем в рабочий день",
    C: "На 90 или более минут позже, чем в рабочий день",
  },
  {
    title: ". Как вы переносите смену часовых поясов?",
    id: "4",
    A: "Тяжело, независимо от обстоятельств",
    B: "Адаптируетесь в течение 48 часов",
    C: "Адаптируетесь очень быстро, особенно перемещаясь на запад",
  },
  {
    title: "Ваш любимый прием пищи? (Имеет значение время, а не меню.)",
    id: "5",
    A: "Завтрак",
    B: "Обед",
    C: "Ужин",
  },
  {
    title:
      "Если бы вам снова предстояло сдавать экзамен, каким было бы предпочтительное время начала,чтобы сдать его с максимальными вниманием и концентрацией (а не просто как-нибудь)?",
    id: "6",
    A: "Рано утром",
    B: "Вскоре после полудня",
    C: "В середине дня",
  },
  {
    title: "Какое вы выбрали бы время для интенсивной физической нагрузки?",
    id: "7",
    A: "До 8.00",
    B: "Между 8.00 и 16.00",
    C: "После 16.00",
  },
  {
    title: "Когда вы наиболее активны?",
    id: "8",
    A: "Через час-два после пробуждения",
    B: "Через два-четыре часа после пробуждения",
    C: "Через четыре-шесть часов после пробуждения",
  },
  {
    title:
      "Если бы вы сами могли выбирать режим пятичасового рабочего дня, какой период времени вы быпредпочли?",
    id: "9",
    A: "С 4.00 до 9.00",
    B: "С 9.00 до 14.00",
    C: " С 16.00 до 21.00",
  },
  {
    title: "Вы считаете свой тип мышления…",
    id: "10",
    A: "Левополушарным – у вас аналитическое и стратегическое мышление",
    B: "У вас сбалансированное мышление",
    C: "Правополушарным – творческой личностью, склонной к озарениям",
  },
  {
    title: "Вы спите днем?",
    id: "11",
    A: "Никогда",
    B: "Иногда в выходные",
    C: "Если вы вздремнете, то потом не уснете всю ночь",
  },
  {
    title:
      "Если бы вам предстояло два часа заниматься тяжелым физическим трудом, например переставлять мебель или рубить дрова, в какой период времени вы были бы максимально эффективны, а занятие – безопасно (а не просто чтобы побыстрее покончить с ним)?",
    id: "12",
    A: "С 8.00 до 10.00",
    B: "С 11.00 до 13.00",
    C: "С 18.00 до 20.00",
  },
  {
    title: "С каким утверждением вы согласитесь?",
    id: "13",
    A: "«Я придерживаюсь здорового образа жизни всегда»",
    B: "«Я принимаю подобные решения иногда»",
    C: "«Здоровый образ жизни дается мне с трудом»",
  },
  {
    title: "Какой уровень риска для вас приемлем?",
    id: "14",
    A: "Низкий",
    B: "Средний",
    C: "Высокий",
  },
  {
    title: "Вы считаете, что…",
    id: "15",
    A: "Настроены на будущее, у вас большие планы и четкие цели",
    B: "Вы набрались опыта, с надеждой смотрите в будущее, но предпочитаете жить здесь и сейчас",
    C: "Вы ориентированы на настоящее. Имеет значение только то, что хорошо сейчас",
  },
  {
    title: "Как бы вы охарактеризовали себя как студента?",
    id: "16",
    A: "Блестящий",
    B: "Усидчивый",
    C: "Нерадивый",
  },
  {
    title: "Утром вы просыпаетесь…",
    id: "17",
    A: "Трезвомыслящим",
    B: "В тумане, но соображаете",
    C: "Усталым, веки будто свинцовые",
  },
  {
    title: "Какой у вас аппетит в течение получаса после пробуждения?",
    id: "18",
    A: "Сильный голод",
    B: "Голод",
    C: "Полное отсутствие голода",
  },
  {
    title: "Как часто вы испытываете симптомы бессонницы?",
    id: "19",
    A: "Редко, только при адаптации в другом часовом поясе",
    B: "Во время жизненных трудностей или стресса",
    C: "Хронически. Бывает периодами",
  },
  {
    title: "Насколько вы удовлетворены жизнью?",
    id: "20",
    A: "Совершенно удовлетворен",
    B: "Вполне удовлетворен",
    C: "Не удовлетворен",
  },
];
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

function addArr(str, val) {
  for (var i = 1; i < 21; i++) {
    if (i == val) arr[i] = str;
  }
}
function checkArr(val) {
  var sum = 0;
  for (var i = 1; i < 21; i++) {
    if (val[i] == 0) {
      return alert("Не все ответы выбраны !");
    }
    sum += val[i];
  }
  if (sum > 19 && sum < 32) alert("Вы Лев");
  else if (sum >= 33 && sum <= 47) alert("Вы Медведь");
  else if (sum >= 48 && sum <= 61) alert("Вы Волк");
}

const Item = ({ item }) => (
  <View style={styles.quethion}>
    <Text style={styles.Text}>{item.title}</Text>
    <View>
      <View style={styles.column}>
        <RadioButton value={item.A} onPress={() => addArr(1, item.id)} />
        <Text style={styles.answer}>{item.A}</Text>
      </View>

      <View style={styles.column}>
        <RadioButton value={item.B} onPress={() => addArr(2, item.id)} />
        <Text style={styles.answer}>{item.B}</Text>
      </View>
      <View style={styles.column}>
        <RadioButton value={item.C} onPress={() => addArr(3, item.id)} />
        <Text style={styles.answer}>{item.C}</Text>
      </View>
    </View>
  </View>
);

class Test2 extends React.Component {
  render() {
    const renderItem = ({ item }) => {
      const status = arr[item.id] === "да" ? "checked" : "unchecked";

      return <Item item={item} status={{ status }} />;
    };

    return (
      <AnimatedLinearGradient
        colors={["rgba(255, 154, 158, 1)", "rgba(250, 208, 196, 1)"]}
        style={gStyles.container}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.FlatList}
        />
        <TouchableOpacity
          onPress={() => checkArr(arr)}
          style={styles.touchableWrap}
        >
          <Text style={styles.Text}>Получить результат</Text>
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
    top: -5,
  },
  answer: {
    fontSize: 15,
    marginTop: 7,
    width: 300,
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

export default Test2;
