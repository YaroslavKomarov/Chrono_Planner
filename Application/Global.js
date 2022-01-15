export const getColorsMap = () => {
    const map = new Map();
    map.set('physical', 'rgba(255, 199, 219, 1)');
    map.set('intellectual', 'rgba(217, 230, 221, 1)');
    map.set('creative', 'rgba(255, 228, 199, 1)');
    map.set('rest', 'rgba(214, 228, 253, 1)');
    map.set('communication', 'rgba(255, 228, 199, 1)');
    map.set('mealtime', 'rgba(212, 202, 202, 1)');
    return map;
};

export let chronotype = 'dolphin';
