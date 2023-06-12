/**
 * @typedef {Object} Book
 * @property {string} author - The author of the book.
 * @property {string} image - The URL of the book's image.
 * @property {string} title - The title of the book.
 * @property {string} id - The unique ID of the book.
 * @property {string} description - The description of the book.
 * @property {string} published - The publication date of the book.
 * @property {string[]} genres - The genres of the book.
 */

/**
 * @typedef {Object} Author
 * @property {string} id - The unique ID of the author.
 * @property {string} name - The name of the author.
 */

/**
 * @typedef {Object} Genre
 * @property {string} id - The unique ID of the genre.
 * @property {string} name - The name of the genre.
 */

/**
 * @typedef {Object} CSS
 * @property {string} dark - The dark color value.
 * @property {string} light - The light color value.
 */

/**
 * @typedef {Object} Filters
 * @property {string} title - The title filter.
 * @property {string} genre - The genre filter.
 * @property {string} author - The author filter.
 */

/**
 * @typedef {Object} SettingsFormElement
 * @property {HTMLFormElement} form - The settings form element.
 * @property {HTMLSelectElement} theme - The theme select element.
 * @property {HTMLButtonElement} cancel - The cancel button element.
 */

/**
 * @typedef {Object} SearchFormElement
 * @property {HTMLFormElement} form - The search form element.
 * @property {HTMLButtonElement} cancel - The cancel button element.
 */

/**
 * @typedef {Object} PreviewElement
 * @property {HTMLButtonElement} element - The preview button element.
 * @property {string} id - The ID of the book.
 * @property {string} title - The title of the book.
 * @property {string} image - The URL of the book's image.
 * @property {string} subtitle - The subtitle of the book.
 * @property {string} description - The description of the book.
 * @property {string[]} genres - The genres of the book.
 */

/**
 * @typedef {Object} ThemeOverlayElement
 * @property {HTMLDialogElement} overlay - The theme overlay element.
 * @property {HTMLButtonElement} cancel - The cancel button element.
 */

/**
 * @typedef {Object} ListActiveElement
 * @property {HTMLDialogElement} active - The active list item overlay element.
 * @property {HTMLImageElement} image - The book image element.
 * @property {HTMLElement} blur - The blurred background element.
 * @property {HTMLElement} title - The book title element.
 * @property {HTMLElement} subtitle - The book subtitle element.
 * @property {HTMLElement} description - The book description element.
 */

/**
 * @typedef {Object} MoreBooksElement
 * @property {HTMLButtonElement} button - The "Show More" button element.
 * @property {number} showMore - The number of books currently shown.
 */

/**
 * @typedef {Object} SearchFilterElement
 * @property {HTMLElement} items - The list items container element.
 * @property {HTMLElement} message - The search result message element.
 * @property {HTMLElement} remaining - The remaining books count element.
 * @property {HTMLButtonElement} cancel - The cancel search button element.
 */

/**
 * @typedef {Object} DataElements
 * @property {HTMLElement} listItems - The list items container element.
 * @property {HTMLButtonElement} listButton - The "Show More" button element.
 * @property {HTMLElement} searchOverlay - The search overlay element.
 * @property {HTMLElement} headerSearch - The header search element.
 * @property {HTMLFormElement} searchForm - The search form element.
 * @property {HTMLSelectElement} searchGenres - The search genres select element.
 * @property {HTMLSelectElement} searchAuthors - The search authors select element.
 * @property {HTMLButtonElement} headerSettings - The header settings button element.
 * @property {HTMLFormElement} settingsForm - The settings form element.
 * @property {HTMLElement} listActive - The active list item overlay element.
 * @property {HTMLButtonElement} listClose - The close button element.
 * @property {HTMLElement} listImage - The book image element.
 * @property {HTMLElement} listBlur - The blurred background element.
 * @property {HTMLElement} listTitle - The book title element.
 * @property {HTMLElement} listSubtitle - The book subtitle element.
 * @property {HTMLElement} listDescription - The book description element.
 * @property {HTMLElement} searchCancel - The cancel search button element.
 * @property {HTMLElement} searchForm - The search form element.
 * @property {HTMLSelectElement} searchGenres - The search genres select element.
 * @property {HTMLSelectElement} searchAuthors - The search authors select element.
 * @property {HTMLFormElement} settingsForm - The settings form element.
 * @property {HTMLSelectElement} settingsTheme - The settings theme select element.
 * @property {HTMLButtonElement} settingsCancel - The cancel button element.
 */

/**
 * The books per page constant.
 * @type {number}
 */
const BOOKS_PER_PAGE = 36;

/**
 * The list of authors.
 * @type {Author[]}
 */
const authors = [
  // author objects
];

/**
 * The list of books.
 * @type {Book[]}
 */
const books = [
  // book objects
];

/**
 * The list of genres.
 * @type {Genre[]}
 */
const genres = [
  // genre objects
];

/**
 * The CSS color values for themes.
 * @type {CSS}
 */
const css = {
  day: {
    dark: '10, 10, 20',
    light: '255, 255, 255',
  },
  night: {
    dark: '255, 255, 255',
    light: '10, 10, 20',
  },
};

/**
 * Get the initial theme based on the user's OS theme preference.
 * @returns {string} The initial theme.
 */
function getInitialTheme() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDarkMode ? 'night' : 'day';
}

/**
 * Set the CSS variables for the selected theme.
 * @param {string} theme - The selected theme.
 */
function setTheme(theme) {
  document.documentElement.style.setProperty('--color-dark', css[theme].dark);
  document.documentElement.style.setProperty('--color-light', css[theme].light);
}

/**
 * Create and append preview elements for the given books.
 * @param {Book[]} books - The books to create previews for.
 * @returns {DocumentFragment} The document fragment containing the previews.
 */
function createPreviewElements(books) {
  const fragment = document.createDocumentFragment();
  for (const { author, id, image, title } of books) {
    const preview = createPreview({ author, id, image, title });
    fragment.appendChild(preview);
  }
  return fragment;
}

/**
 * Create a preview element for a book.
 * @param {BookPreview} book - The book object.
 * @returns {HTMLElement} The created preview element.
 */
function createPreview({ author, id, image, title }) {
  const element = document.createElement('button');
  element.classList.add('preview');
  element.dataset.preview = id;

  element.innerHTML = `
    <img class="preview__image" src="${image}" alt="book pic" />
    <div class="preview__info">
      <dt class="preview__title">${title}</dt>
      <dt class="preview__author">By ${authors[author]}</dt>
    </div>
  `;

  return element;
}

/**
 * Filter the books based on the search form inputs.
 * @param {FormData} formData - The form data.
 * @returns {Book[]} The filtered books.
 */
function filterBooks(formData) {
  const title = formData.get('title');
  const genre = formData.get('genre');
  const author = formData.get('author');

  return books.filter((book) => {
    const matchesTitle = title === '' || book.title.toLowerCase().includes(title.toLowerCase());
    const matchesGenre = genre === 'any' || book.genres.includes(genre);
    const matchesAuthor = author === 'any' || book.author === author;
    return matchesTitle && matchesGenre && matchesAuthor;
  });
}

/**
 * Display the filtered books on the page.
 * @param {Book[]} filteredBooks - The filtered books.
 * @param {DataElements} elements - The data elements.
 */
function displayFilteredBooks(filteredBooks, elements) {
  const listItems = elements.listItems;
  listItems.style.display = 'none';

  const messageArea = document.querySelector('[data-list-message]');
  messageArea.innerHTML = '';

  if (filteredBooks.length > 0) {
    const fragment = createPreviewElements(filteredBooks);
    const listButton = elements.listButton;
    listItems.appendChild(fragment);
    listButton.disabled = true;
    messageArea.style.marginTop = '-125px';
  } else {
    messageArea.innerText = 'No results found. Your filters might be too narrow.';
    const listButton = elements.listButton;
    listButton.disabled = true;
  }
}

/**
 * Add options to a dropdown select element.
 * @param {HTMLElement} parentElement - The parent element to append the options to.
 * @param {Object} options - The options object.
 * @param {string} defaultOption - The default option label.
 */
function createDropdownOptions(parentElement, options, defaultOption) {
  const defaultOptionElement = document.createElement('option');
  defaultOptionElement.value = 'any';
  defaultOptionElement.innerText = defaultOption;
  parentElement.appendChild(defaultOptionElement);

  for (const [id, name] of Object.entries(options)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    parentElement.appendChild(element);
  }
}

// Get data elements
const dataElements = {
  listItems: document.querySelector('[data-list-items]'),
  listButton: document.querySelector('[data-list-button]'),
  searchOverlay: document.querySelector('[data-search-overlay]'),
  headerSearch: document.querySelector('[data-header-search]'),
  searchForm: document.querySelector('[data-search-form]'),
  searchGenres: document.querySelector('[data-search-genres]'),
  searchAuthors: document.querySelector('[data-search-authors]'),
  headerSettings: document.querySelector('[data-header-settings]'),
  settingsForm: document.querySelector('[data-settings-form]'),
  listActive: document.querySelector('[data-list-active]'),
  listClose: document.querySelector('[data-list-close]'),
  listImage: document.querySelector('[data-list-image]'),
  listBlur: document.querySelector('[data-list-blur]'),
  listTitle: document.querySelector('[data-list-title]'),
  listSubtitle: document.querySelector('[data-list-subtitle]'),
  listDescription: document.querySelector('[data-list-description]'),
  searchCancel: document.querySelector('[data-search-cancel]'),
  searchForm: document.querySelector('[data-search-form]'),
  searchGenres: document.querySelector('[data-search-genres]'),
  searchAuthors: document.querySelector('[data-search-authors]'),
  settingsForm: document.querySelector('[data-settings-form]'),
  settingsTheme: document.querySelector('[data-settings-theme]'),
  settingsCancel: document.querySelector('[data-settings-cancel]'),
};

// Create dropdown options
createDropdownOptions(dataElements.searchGenres, genres, 'Any Genre');
createDropdownOptions(dataElements.searchAuthors, authors, 'Any Author');

// Display initial books on page load
const initialBooks = filterBooks(new FormData(dataElements.searchForm));
displayFilteredBooks(initialBooks, dataElements);

// Event listeners
dataElements.searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filteredBooks = filterBooks(formData);
  displayFilteredBooks(filteredBooks, dataElements);
});

dataElements.searchCancel.addEventListener('click', () => {
  dataElements.headerSearch.classList.remove('is-active');
  dataElements.searchOverlay.classList.remove('is-active');
});

dataElements.headerSearch.addEventListener('click', () => {
  dataElements.headerSearch.classList.add('is-active');
  dataElements.searchOverlay.classList.add('is-active');
});

dataElements.headerSettings.addEventListener('click', () => {
  dataElements.settingsForm.classList.add('is-active');
});

dataElements.settingsCancel.addEventListener('click', () => {
  dataElements.settingsForm.classList.remove('is-active');
});

dataElements.listItems.addEventListener('click', (event) => {
  const previewButton = event.target.closest('.preview');
  if (previewButton) {
    const previewId = previewButton.dataset.preview;
    const book = books.find((book) => book.id === previewId);
    if (book) {
      dataElements.listActive.classList.add('is-active');
      dataElements.listImage.src = book.image;
      dataElements.listTitle.textContent = book.title;
      dataElements.listSubtitle.textContent = `By ${authors[book.author]}`;
      dataElements.listDescription.textContent = book.description;
      dataElements.listBlur.classList.add('is-blurred');
    }
  }
});

dataElements.listClose.addEventListener('click', () => {
  dataElements.listActive.classList.remove('is-active');
  dataElements.listBlur.classList.remove('is-blurred');
});
