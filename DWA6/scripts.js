import { BOOKS_PER_PAGE, authors, books, genres } from "./data.js";

let page = 1;
let matches = books;

/**
 * Renders the book previews based on the current matches and page.
 */
function renderBookPreviews() {
  const fragment = document.createDocumentFragment();

  for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
    const element = createPreviewElement(id, image, title, author);
    fragment.appendChild(element);
  }

  document.querySelector('[data-list-items]').appendChild(fragment);
}

/**
 * Creates a book preview element.
 * @param {string} id - The book ID.
 * @param {string} image - The URL of the book image.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @returns {HTMLElement} - The created preview element.
 */
function createPreviewElement(id, image, title, author) {
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
 * Renders the remaining book previews based on the current matches and page.
 */
function renderRemainingBookPreviews() {
  const fragment = document.createDocumentFragment();

  for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
    const element = createPreviewElement(id, image, title, author);
    fragment.appendChild(element);
  }

  document.querySelector('[data-list-items]').appendChild(fragment);
  page += 1;
  updateShowMoreButton();
} 
  document.querySelector('[data-search-form]').addEventListener('submit', handleSearchFormSubmit);


function loadMoreBooks() {
  const fragment = document.createDocumentFragment();

  for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
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

    fragment.appendChild(element);
  }

  document.querySelector('[data-list-items]').appendChild(fragment);
  page += 1;
  updateShowMoreButton();
}

/**
 * Updates the "Show more" button based on the remaining matches and page.
 */
function updateShowMoreButton() {
  const remainingMatches = matches.length - (page * BOOKS_PER_PAGE);
  const showMoreButton = document.querySelector('[data-list-button]');
  showMoreButton.disabled = remainingMatches < 1;
  showMoreButton.innerHTML = `
    <span>Show More</span>
    <span class="list__remaining"> (${remainingMatches > 0 ? remainingMatches : 0})</span>
  `;
}

/**
 * Toggles the search overlay.
 */
function toggleSearchOverlay() {
  document.querySelector('[data-search-overlay]').open = true;
  document.querySelector('[data-search-title]').focus();
}

/**
 * Closes the search overlay.
 */
function closeSearchOverlay() {
  document.querySelector('[data-search-overlay]').open = false;
}

/**
 * Handles the form submission in the search overlay.
 * @param {Event} event - The form submission event.
 */
function handleSearchFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  for (const book of books) {
    let genreMatch = filters.genre === 'any';

    for (const singleGenre of book.genres) {
      if (genreMatch) break;
      if (singleGenre === filters.genre) {
        genreMatch = true;
      }
    }

    if (
      (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.author === 'any' || book.author === filters.author) &&
      genreMatch
    ) {
      result.push(book);
    }
  }

  page = 1;
  matches = result;

  const listMessage = document.querySelector('[data-list-message]');
  if (result.length < 1) {
    listMessage.classList.add('list__message_show');
  } else {
    listMessage.classList.remove('list__message_show');
  }

  document.querySelector('[data-list-items]').innerHTML = '';
  renderBookPreviews();
  updateShowMoreButton();

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeSearchOverlay();
}

/**
 * Handles the click event on book previews.
 * @param {Event} event - The click event.
 */
function handleBookPreviewClick(event) {
  const previewButton = event.target.closest('[data-preview]');
  if (previewButton) {
    const bookId = previewButton.getAttribute('data-preview');
    // Handle the book preview click event
    console.log('Book preview clicked:', bookId);
  }
}

/**
 * Initializes the page.
 */
function initializePage() {
  renderBookPreviews();

  const genreHtml = document.createDocumentFragment();
  const firstGenreElement = document.createElement('option');
  firstGenreElement.value = 'any';
  firstGenreElement.innerText = 'All Genres';
  genreHtml.appendChild(firstGenreElement);

  for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    genreHtml.appendChild(element);
  }

  document.querySelector('[data-search-genres]').appendChild(genreHtml);

  const authorsHtml = document.createDocumentFragment();
  const firstAuthorElement = document.createElement('option');
  firstAuthorElement.value = 'any';
  firstAuthorElement.innerText = 'All Authors';
  authorsHtml.appendChild(firstAuthorElement);

  for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    authorsHtml.appendChild(element);
  }

  document.querySelector('[data-search-authors]').appendChild(authorsHtml);

  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const settingsTheme = document.querySelector('[data-settings-theme]');
  if (prefersDarkMode) {
    settingsTheme.value = 'night';
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
  } else {
    settingsTheme.value = 'day';
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
  }

  document.querySelector('[data-list-button]').innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;

  document.querySelector('[data-search-button]').addEventListener('click', toggleSearchOverlay);
  document.querySelector('[data-search-form]').addEventListener('submit', handleSearchFormSubmit);
  document.querySelector('[data-list-items]').addEventListener('click', handleBookPreviewClick);
  document.querySelector('[data-list-button]').addEventListener('click', loadMoreBooks);
}

initializePage();
