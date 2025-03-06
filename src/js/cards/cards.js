import { savedWords } from '../../main';
import { refs } from '../constants/refs';

export function showCards() {
  refs.cards.classList.remove('is-hidden');
  renderCards(savedWords);
}

export function hideCards() {
  refs.cards.classList.add('is-hidden');
}

function renderCards(cards) {
  const randCards = getRandCards(cards);
  const randomIndex = Math.floor(Math.random() * 4);
  const card = randCards[randomIndex];
  const itemsMarkup = randCards.map(cardTemplate).join('');
  const markup = `<ul class="cards">${itemsMarkup}</ul>
  <span class="target-card" data-id-target="${card.id}">${card.en}/${card.ua}</span>`;
  refs.cards.innerHTML = markup;
}

function cardTemplate({ en, ua, id }) {
  return `<li class="card" data-id="${id}"><span>${en}/${ua}</span></li>`;
}

function getRandCards(cards) {
  const randCards = [];
  while (randCards.length < 4) {
    const randCard = cards[Math.floor(Math.random() * cards.length)];
    if (!randCards.includes(randCard)) {
      randCards.push(randCard);
    }
  }
  return randCards;
}
