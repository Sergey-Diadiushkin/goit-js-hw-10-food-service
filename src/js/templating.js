import itemsTemplate from '../templates/gallery-items.hbs';
import items from '../menu.json';

const markup = itemsTemplate(items);

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);
