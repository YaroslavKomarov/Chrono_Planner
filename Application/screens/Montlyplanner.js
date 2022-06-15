// import React, { useState } from "react";
// import { View } from "react-native";

// import MonthlyplannerTasksList from "../components/monthlyplanner/MontlyplannerTasksList";
// import AddTaskForm from "../components/common/AddTaskForm";
// import { gStyles } from "../styles/GlobalStyles";
// import MyCalendar from "../components/common/MyCalendar";
// import CollectionTitle from "../components/common/CollectionTitle";
// import { getCurrentMonth } from "../utils/uiHandler";
// import DailyplannerLink from "../components/common/DailyplannerLink";

// export default function Monthlyplanner({ navigation }) {
//   const [tasks, setTasks] = useState([
//     { text: "Купить молоко", type: "physical", subtasks: [], key: "1" },
//     { text: "Починить кран", type: "rest", subtasks: [], key: "2" },
//     { text: "Сделать проект", type: "intellectual", subtasks: [
//       { text: "Утвердить новые макеты", type: '', key: "1" },
//       { text: "Провести тесты UI", type: '', key: "2" },
//       { text: "Оставить себе ясные дни", type: '', key: "3" },
//     ], key: "3" },
//     { text: "Сходить в кино", type: "communication", subtasks: [], key: "4" },
//     { text: "Построить коммунизм", type: "creative", subtasks: [
//       { text: "Договориться с Зюгановым", type: '', key: "1" },
//       { text: "Посадить кукурузу", type: '', key: "2" },
//       { text: "Оставить себе ясные дни", type: '', key: "3" },
//     ], key: "5" },
//     { text: "Больше не наливать деду", type: "physical",subtasks: [], key: "6" },
//   ]);

//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View style={[gStyles.container, gStyles.back]}>
//       <DailyplannerLink />
//       <CollectionTitle title={getCurrentMonth()} setModalVisible={setModalVisible} />
//       <MyCalendar />
//       <MonthlyplannerTasksList
//         modalVisible={modalVisible}
//         setModalVisible={setModalVisible}
//         tasks={tasks}
//         setTasks={setTasks}
//       />
//       <AddTaskForm
//         modalVisible={modalVisible}
//         setModalVisible={setModalVisible}
//         setTask={setTasks}
//       />
//     </View>
//   );
// }


import React, { useState } from "react";
import { View, Text } from "react-native";

import MonthlyplannerTasksList from "../components/monthlyplanner/MontlyplannerTasksList";
import AddTaskForm from "../components/common/AddTaskForm";
import { gStyles } from "../styles/GlobalStyles";
import MyCalendar from "../components/common/MyCalendar";
import CollectionTitle from "../components/common/CollectionTitle";
import { getCurrentMonth } from "../utils/uiHandler";
import DailyplannerLink from "../components/common/DailyplannerLink";

export default function Monthlyplanner({ navigation }) {
  const [tasks, setTasks] = useState([
    { text: "Купить молоко", type: "physical", subtasks: [], key: "1" },
    { text: "Починить кран", type: "physical", subtasks: [], key: "2" },
    { text: "Сделать проект", type: "intellectual", subtasks: [
      { text: "Утвердить новые макеты", type: '', key: "1" },
      { text: "Провести тесты UI", type: '', key: "2" },
      { text: "Оставить себе ясные дни", type: '', key: "3" },
    ], key: "3" },
    { text: "Сходить в кино", type: "rest", subtasks: [], key: "4" },
    { text: "Построить коммунизм", type: "creative", subtasks: [
      { text: "Договориться с Зюгановым", type: '', key: "1" },
      { text: "Посадить кукурузу", type: '', key: "2" },
      { text: "Оставить себе ясные дни", type: '', key: "3" },
    ], key: "5" },
  ]);

  const [julyTasks, setJulyTasks] = useState([{ text: "Купить молоко", type: "physical", subtasks: [], key: "1" },]);

  const [otherTasks, setOtherTasks] = useState([]);

  const getMonth = () => {
    return "Январь,Февраль,Март,Апрель,Май,Июнь,Июль,Август,Сентябрь,Октябрь,Ноябрь,Декабрь".split(
      ","
    );
  };
  const [modalVisible, setModalVisible] = useState(false);

  const [month, setMonth] = useState(getCurrentMonth());

  const month1 = getMonth();

  return (
    <View style={[gStyles.container, gStyles.back]}>
      <DailyplannerLink />
      <CollectionTitle
        title={month1[month - 1]}
        setModalVisible={setModalVisible}
      />
      <MyCalendar set={setMonth} />
      {month1[month - 1] === 'Июнь' ? (
        <MonthlyplannerTasksList
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          tasks={tasks}
          setTasks={setTasks}
        />
      ) : (
        <View style={{flex: 1.5, alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontFamily: "PTSans-bold", color: "rgba(115, 88, 65, 1)"}}>
              Нет запланированных задач
          </Text>
      </View>
      )}
      <AddTaskForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTask={setTasks}
      />
    </View>
  );
}