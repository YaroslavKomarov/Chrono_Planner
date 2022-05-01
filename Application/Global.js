import bearSchedule from './chronotypeSchedule/chrono_bear.json';
import lionSchedule from './chronotypeSchedule/chrono_lion.json';
import wolfSchedule from './chronotypeSchedule/chrono_wolf.json';
import dolphinSchedule from './chronotypeSchedule/chrono_dolphin.json';


export const activitiesColor = {
    physical: 'rgba(255, 199, 219, 1)',
    intellectual: 'rgba(217, 230, 221, 1)',
    communication: 'rgba(255, 228, 199, 1)',
    creative: 'rgba(255, 228, 199, 1)',
    rest: 'rgba(214, 228, 253, 1)',
    mealtime: 'rgba(212, 202, 202, 1)'
};

export const activitiesMarkers = {
    physical: 'rgba(255, 199, 219, 1)',
    intellectual: 'rgba(217, 230, 221, 1)',
    communication: 'rgba(255, 228, 199, 1)',
    creative: 'rgba(255, 228, 199, 1)',
    rest: 'rgba(214, 228, 253, 1)',
    mealtime: 'rgba(212, 202, 202, 1)'
};

export const days = [
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
];

export const months = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
];

global.chronotype = 'bear';

export const schedule = (() => {
    switch (global.chronotype) {
        case 'bear':
            return bearSchedule;
        case 'dolphin':
            return dolphinSchedule;
        case 'wolf':
            return wolfSchedule;
        default:
            return lionSchedule;
    }
})();

export const activities = { 
    rest: 'Отдых' ,
    creative: 'Творчество',
    physical: 'Физическая активность',
    communication: 'Коммуникации',
    intellectual: 'Интеллектуальная активность',
    mealtime: 'Прием пищи'
};

export const collections = { 
    unassembled: 'Неразобранные',
    сompleted: 'Завершенные',
    monthlyplanner: 'Ежемесячник',
    dailyplanner: 'Ежедневник',
    projects: 'Проекты'
};
