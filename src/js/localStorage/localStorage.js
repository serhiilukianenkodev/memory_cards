const LS_KEY_SAVED_WORDS = 'savedWords';

const saveToLS = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error);
  }
};

const getFromLS = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error);
    return undefined;
  }
};

export const saveWordsLS = words => saveToLS(LS_KEY_SAVED_WORDS, words);
export const getWordsLS = () => getFromLS(LS_KEY_SAVED_WORDS);
