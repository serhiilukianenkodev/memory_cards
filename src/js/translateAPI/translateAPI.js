import axios from 'axios';

const API_KEY = '7bd2b4e38fe673b406a4';
const BASE_URL = 'https://api.mymemory.translated.net/get';

// https://api.mymemory.translated.net/get?q=wall&langpair=en|uk&key=7bd2b4e38fe673b406a4

export async function fetchTranslation(text, targetLanguage = 'en|uk') {
  const options = {
    params: { q: text, langpair: targetLanguage, key: API_KEY },
  };

  try {
    const response = await axios.get(BASE_URL, options);
    // console.log('🚀 ~ fetchTranslation ~ response:', response);
    return response.data.responseData.translatedText;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
}
