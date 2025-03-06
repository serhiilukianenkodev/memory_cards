import { nanoid } from 'nanoid';

import { refs } from '../constants/refs';
import { fetchTranslation } from '../translateAPI/translateAPI';
import { saveWordsLS } from '../localStorage/localStorage';
import { savedWords } from '../../main';

export function showForm() {
  console.log(refs);
  refs.form.classList.remove('is-hidden');

  refs.btnTranslate.addEventListener('click', onTranslateBtnClick);
  refs.btnSafe.addEventListener('click', onSafeBtnClick);
  refs.btnResert.addEventListener('click', onBtnResetClick);
  refs.form.addEventListener('submit', onFormSubmit);
}

export function hideForm() {
  refs.form.classList.add('is-hidden');

  refs.btnTranslate.removeEventListener('click', onTranslateBtnClick);
  refs.btnSafe.removeEventListener('click', onSafeBtnClick);
  refs.btnResert.removeEventListener('click', onBtnResetClick);
  refs.form.removeEventListener('submit', onFormSubmit);
}

function onBtnResetClick() {
  refs.form.reset();
}

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
