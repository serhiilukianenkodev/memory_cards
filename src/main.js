import { hideCards, showCards } from './js/cards/cards';
import { refs } from './js/constants/refs';
import { hideForm, showForm } from './js/form/form';
import { getWordsLS } from './js/localStorage/localStorage';

export const savedWords = getWordsLS() || [];
console.log('🚀 ~ savedWords:', savedWords);

refs.btnAddCards.addEventListener('click', onAddCardsBtnClick);
refs.btnStartQuiz.addEventListener('click', onStartQuizBtnClick);

function onStartQuizBtnClick() {
  console.log('start quiz');
  hideForm();
  showCards();
}

function onAddCardsBtnClick() {
  showForm();
  hideCards();

  console.log('add cards');
}
