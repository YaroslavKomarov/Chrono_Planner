import bearSchedule from "./chronotypeSchedule/chrono_bear.json";
import lionSchedule from "./chronotypeSchedule/chrono_lion.json";
import wolfSchedule from "./chronotypeSchedule/chrono_wolf.json";
import dolphinSchedule from "./chronotypeSchedule/chrono_dolphin.json";

export const activitiesColor = {
  physical: "rgba(164, 223, 235, 1)",
  intellectual: "rgba(235, 176, 201, 1)",
  communication: "rgba(255, 228, 199, 1)",
  creative: "rgba(211, 235, 212, 1)",
  rest: "rgba(214, 228, 253, 1)",
  mealtime: "rgba(212, 202, 202, 1)",
};

export const activitiesMarkers = {
  physical: "rgba(164, 223, 235, 1)",
  intellectual: "rgba(235, 176, 201, 1)",
  communication: "rgba(255, 228, 199, 1)",
  creative: "rgba(211, 235, 212, 1)",
  rest: "rgba(214, 228, 253, 1)",
  mealtime: "rgba(212, 202, 202, 1)",
};

export const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

export const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

export const schedule = (() => {
  switch (global.chronotype) {
    case "bear":
      return bearSchedule;
    case "dolphin":
      return dolphinSchedule;
    case "wolf":
      return wolfSchedule;
    default:
      return lionSchedule;
  }
})();

export const activities = {
  rest: "Отдых",
  creative: "Творчество",
  physical: "Физическая активность",
  communication: "Коммуникации",
  intellectual: "Интеллектуальная активность",
  mealtime: "Прием пищи",
};

export const collections = {
  unassembled: "Неразобранные",
  сompleted: "Завершенные",
  monthlyplanner: "Ежемесячник",
  dailyplanner: "Ежедневник",
  projects: "Проекты",
};

global.CHRONOTYPE = "bear";

// Временные меры, до введения БД
global.DAYCHECK = "";
global.DAYNAME = "";
global.TOR = false;

global.PROJ_DEL = false;

export const getDailyplannerTitle = () => {
  let currentDate = new Date();

  if (TOR) {
    TOR = false;
    currentDate = new Date(DAYNAME);
    return `${days[currentDate.getDay()]},  ${DAYCHECK}.${
      months[currentDate.getMonth()]
    }`;
  } else {
    return `${days[currentDate.getDay()]},  ${currentDate.getDate()}.${
      months[currentDate.getMonth()]
    }`;
  }
};
