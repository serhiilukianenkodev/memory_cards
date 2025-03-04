import { nanoid } from 'nanoid';

import { refs } from './js/constants/refs';
import { fetchTranslation } from './js/translateAPI/translateAPI';
import { getWordsLS, saveWordsLS } from './js/localStorage/localStorage';

const savedWords = getWordsLS() || [];
console.log('🚀 ~ savedWords:', savedWords);

refs.btnTarnslate.addEventListener('click', onTranslateBtnClick);
refs.btnSafe.addEventListener('click', onSafeBtnClick);
refs.btnResert.addEventListener('click', () => refs.form.reset());
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const target = event.target;
  console.log('🚀 ~ onFormSubmit ~ target:', target);
}

async function onTranslateBtnClick() {
  const textEN = refs.fieldWordEN.value;
  const textUA = refs.fieldWordUA.value;

  if (textEN) {
    const translation = await fetchTranslation(textEN);
    refs.fieldWordUA.value = translation.toLowerCase();
    return;
  }

  if (textUA) {
    const translation = await fetchTranslation(textUA, 'uk|en');
    refs.fieldWordEN.value = translation.toLowerCase();
    return;
  }
}

function onSafeBtnClick() {
  savedWords.push({
    id: nanoid(),
    en: refs.fieldWordEN.value,
    ua: refs.fieldWordUA.value,
  });
  refs.form.reset();
  saveWordsLS(savedWords);
  console.table(savedWords);
}
