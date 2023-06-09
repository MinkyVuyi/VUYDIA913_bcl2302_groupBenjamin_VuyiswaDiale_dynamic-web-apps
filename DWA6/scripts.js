import { BOOKS_PER_PAGE, authors, books, genres } from "./data.js";

/**
 * Creates a book preview element.
 * @param {Object} book - The book object.
 * @returns {HTMLElement} - The created button element representing the book preview.
 */
function createBookPreviewElement(book) {
  const { author, id, image, title } = book;

  const element = document.createElement('button');
  element.classList = 'preview';
  element.setAttribute('data-preview', id);

  element.innerHTML = `
    <img class="preview__image" src="${image}" />
    
    <div class="preview__info">
      <h3 class="preview__title">${title}</h3>
      <div class="preview__author">${authors[author]}</div>
    </div>
  `;

  return element;
}

/**
 * Renders book previews on the page.
 */
function renderBookPreviews() {
  const starting = document.createDocumentFragment();
  const matches = books;

  for (const book of matches.slice(0, BOOKS_PER_PAGE)) {
    const element = createBookPreviewElement(book);
    starting.appendChild(element);
  }

  const listItemsContainer = document.querySelector('[data-list-items]');
  listItemsContainer.appendChild(starting);
}

/**
 * Creates HTML options for genres or authors.
 * @param {Object} data - The genres or authors data.
 * @returns {DocumentFragment} - The created HTML options as a document fragment.
 */
function createOptions(data) {
  const optionsFragment = document.createDocumentFragment();
  const firstOptionElement = document.createElement('option');
  firstOptionElement.value = 'any';
  firstOptionElement.innerText = 'All';
  optionsFragment.appendChild(firstOptionElement);

  for (const [id, name] of Object.entries(data)) {
    const optionElement = document.createElement('option');
    optionElement.value = id;
    optionElement.innerText = name;
    optionsFragment.appendChild(optionElement);
  }

  return optionsFragment;
}

// Populate genre options
/**
 * Creates an option element with the specified value and text.
 * @param {string} value - The value of the option.
 * @param {string} text - The text of the option.
 * @returns {HTMLOptionElement} - The created option element.
 */
function createOptionElement(value, text) {
  const optionElement = document.createElement('option');
  optionElement.value = value;
  optionElement.innerText = text;
  return optionElement;
}

/**
 * Renders options in the specified select element.
 * @param {Array} optionsData - The data for the options.
 * @param {string} selectElementSelector - The CSS selector for the select element.
 * @returns {void}
 */
function renderOptions(optionsData, selectElementSelector) {
  const selectElement = document.querySelector(selectElementSelector);

  if (!selectElement) {
    console.error(`Cannot find the select element with selector: ${selectElementSelector}`);
    return;
  }

  const optionsHtml = document.createDocumentFragment();
  const firstOptionElement = createOptionElement('any', `All ${selectElement.getAttribute('data-type')}`);
  optionsHtml.appendChild(firstOptionElement);

  for (const [id, name] of Object.entries(optionsData)) {
    const optionElement = createOptionElement(id, name);
    optionsHtml.appendChild(optionElement);
  }

  selectElement.appendChild(optionsHtml);
}

/**
 * Renders genre options in the search genres select element.
 * @returns {void}
 */
function renderGenreOptions() {
  renderOptions(genres, '[data-search-genres]');
}

/**
 * Renders author options in the search authors select element.
 * @returns {void}
 */
function renderAuthorOptions() {
  renderOptions(authors, '[data-search-authors]');
}


/**
 * Sets the theme and color variables based on the preferred color scheme.
 */
function setThemeBasedOnColorScheme() {
  const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'night'
    : 'day';

  const colorDark = theme === 'night' ? '255, 255, 255' : '10, 10, 20';
  const colorLight = theme === 'night' ? '10, 10, 20' : '255, 255, 255';

  document.querySelector('[data-settings-theme]').value = theme;
  document.documentElement.style.setProperty('--color-dark', colorDark);
  document.documentElement.style.setProperty('--color-light', colorLight);
}

/**
 * Initializes the page.
 */
function initializePage() {
  renderBookPreviews();
  renderGenreOptions();
  renderAuthorOptions();
  setThemeBasedOnColorScheme();

  const remainingBooks = Math.max(0, books.length - BOOKS_PER_PAGE);
  const listButton = document.querySelector('[data-list-button]');
  listButton.disabled = remainingBooks === 0;
  listButton.innerText = `List More (${remainingBooks})`;
}

/**
 * Adds event listeners to various elements.
 */
function addEventListeners() {
  const listButton = document.querySelector('[data-list-button]');
  listButton.addEventListener('click', () => {
    const starting = document.createDocumentFragment();
    const matches = books.slice(BOOKS_PER_PAGE);

    for (const book of matches.slice(0, BOOKS_PER_PAGE)) {
      const element = createBookPreviewElement(book);
      starting.appendChild(element);
    }

    const listItemsContainer = document.querySelector('[data-list-items]');
    listItemsContainer.appendChild(starting);

    const remainingBooks = Math.max(0, matches.length - BOOKS_PER_PAGE);
    listButton.disabled = remainingBooks === 0;
    listButton.innerText = `List More (${remainingBooks})`;
  });

  const searchForm = document.querySelector('[data-search-form]');
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTitleInput = document.querySelector('[data-search-title]');
    const searchAuthorSelect = document.querySelector('[data-search-authors]');
    const searchGenreSelect = document.querySelector('[data-search-genres]');

    const titleQuery = searchTitleInput.value.toLowerCase();
    const authorQuery = searchAuthorSelect.value;
    const genreQuery = searchGenreSelect.value;

    const filteredBooks = books.filter((book) => {
      const { title, author, genre } = book;
      const isTitleMatch = title.toLowerCase().includes(titleQuery);
      const isAuthorMatch = authorQuery === 'any' || author === authorQuery;
      const isGenreMatch = genreQuery === 'any' || genre === genreQuery;
      return isTitleMatch && isAuthorMatch && isGenreMatch;
    });

    const listItemsContainer = document.querySelector('[data-list-items]');
    listItemsContainer.innerHTML = '';

    for (const book of filteredBooks.slice(0, BOOKS_PER_PAGE)) {
      const element = createBookPreviewElement(book);
      listItemsContainer.appendChild(element);
    }
  });

  const settingsForm = document.querySelector('[data-settings-form]');
  settingsForm.addEventListener('change', () => {
    const themeSelect = document.querySelector('[data-settings-theme]');
    const selectedTheme = themeSelect.value;
    document.documentElement.setAttribute('data-theme', selectedTheme);
  });
}

// Entry point
document.addEventListener('DOMContentLoaded', () => {
  initializePage();
  addEventListeners();
});
