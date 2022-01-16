export const getColorsMap = () => {
    const map = new Map();
    map.set('Физическая активность', 'rgba(255, 199, 219, 1)');
    map.set('Интеллектуальная активность', 'rgba(217, 230, 221, 1)');
    map.set('Творчество', 'rgba(255, 228, 199, 1)');
    map.set('Отдых', 'rgba(214, 228, 253, 1)');
    map.set('Коммуникации', 'rgba(255, 228, 199, 1)');
    map.set('Прием пищи', 'rgba(212, 202, 202, 1)');
    return map;
};

export const getDays = () => {
    return 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота'.split(',');
};

export const getMonth = () => {
    return '01,02,03,04,05,06,07,08,09,10,11,12'.split(',');
};

global.chronotype = 'bear';
