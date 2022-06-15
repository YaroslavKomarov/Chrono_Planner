export function formatTitle(title, titleLength) {
    return title.length > titleLength ? 
        title.slice(0, titleLength) + '...' : title;
};

export const getCurrentMonth = () => {
    const today = new Date();
    const month = getMonth();
    const currentMonth = month[today.getMonth()];
    return currentMonth;
};

export const getCurrentDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1; // Months start at 0!
  const dd = today.getDate();

  return dd + '/' + mm + '/' + yyyy;
};

const getMonth = () => {
    return "Январь,Февраль,Март,Апрель,Май,Июнь,Июль,Август,Сентябрь,Октябрь,Ноябрь,Декабрь".split(
      ","
    );
};

export const getMemoizedFunction = (() => {
    const memo = {};
    let accessKey = 0;
  
    const get = (key, persist) => {
      const value = memo[key];
      !persist && delete memo[key];
      return value;
    };
  
    const set = (callback) => {
      memo[accessKey += 1] = callback;
      return `${accessKey}`;
    };
  
    const memoizer = (
      input,
      persist,
    ) => {
      if (typeof input === 'string' && input in memo) {
        return get(input, persist) ?? input;
      } else if (typeof input === 'function') {
        return set(input);
      }
      return input;
    };
  
    return memoizer;
})();