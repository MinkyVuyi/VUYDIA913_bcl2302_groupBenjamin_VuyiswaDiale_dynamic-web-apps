import { BOOKS_PER_PAGE, authors, books, genres } from "./data.js";

let page = 1;
let matches = books;

/**
 * Create a book preview element.
 * @param {object} book - The book object.
 * @returns {HTMLElement} - The created book preview element.
 */
function createBookPreviewElement(book) {
  const { author, id, image, title } = book;

  const element = document.createElement('button');
  element.classList = 'preview';
  element.setAttribute('data-preview', id);

  element.innerHTML = `
    <img
      class="preview__image"
      src="${image}"
    />
    
    <div class="preview__info">
      <h3 class="preview__title">${title}</h3>
      <div class="preview__author">${authors[author]}</div>
    </div>
  `;

  return element;
}

/**
 * Render book previews.
 * @param {Array} bookPreviews - Array of book objects for rendering previews.
 */
function renderBookPreviews(bookPreviews) {
  const fragment = document.createDocumentFragment();

  for (const book of bookPreviews) {
    const element = createBookPreviewElement(book);
    fragment.appendChild(element);
  }

  document.querySelector('[data-list-items]').appendChild(fragment);
}

/**
 * Update the "Show more" button based on the current page and book matches.
 * @param {Array} bookMatches - Array of book objects that match the filters.
 * @param {number} currentPage - Current page number.
 */
function updateShowMoreButton(bookMatches, currentPage) {
  const remainingBooks = bookMatches.length - (currentPage * BOOKS_PER_PAGE);
  const showMoreButton = document.querySelector('[data-list-button]');
  const remainingText = ` (${remainingBooks > 0 ? remainingBooks : 0})`;

  showMoreButton.disabled = remainingBooks < 1;
  showMoreButton.innerHTML = `
    <span>Show more</span>
    <span class="list__remaining">${remainingText}</span>
  `;
}

/**
 * Handles the click event on the search form submit button.
 * @param {Event} event - The submit event.
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
  renderBookPreviews(result.slice(0, BOOKS_PER_PAGE));
  updateShowMoreButton(result, page);

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('[data-search-overlay]').open = false;
}

/**
 * Handles the click event on the "Show more" button.
 */
function handleShowMoreButtonClick() {
  const newBookPreviews = matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE);
  renderBookPreviews(newBookPreviews);
  page += 1;
  updateShowMoreButton(matches, page);
}

/**
 * Handles the click event on the book previews.
 * @param {Event} event - The click event.
 */
function handleBookPreviewClick(event) {
  const pathArray = Array.from(event.path || event.composedPath());
  let activeBook = null;

  for (const node of pathArray) {
    if (activeBook) break;

    if (node?.dataset?.preview) {
      for (const singleBook of books) {
        if (singleBook.id === node?.dataset?.preview) {
          activeBook = singleBook;
          break;
        }
      }
    }
  }

  if (activeBook) {
    document.querySelector('[data-list-active]').open = true;
    document.querySelector('[data-list-blur]').src = activeBook.image;
    document.querySelector('[data-list-image]').src = activeBook.image;
    document.querySelector('[data-list-title]').innerText = activeBook.title;
    document.querySelector('[data-list-subtitle]').innerText = `${authors[activeBook.author]} (${new Date(activeBook.published).getFullYear()})`;
    document.querySelector('[data-list-description]').innerText = activeBook.description;
  }
}

// Render initial book previews
renderBookPreviews(matches.slice(0, BOOKS_PER_PAGE));

// Populate genre options
/**
 * Renders options in the specified select element based on the provided data.
 * @param {Object} data - The data object containing the options.
 * @param {string} targetSelector - The CSS selector for the target select element.
 */
function renderOptions(data, targetSelector) {
  const optionsData = data;
  const optionsHtml = createOptions(optionsData);
  const selectElement = document.querySelector(targetSelector);
  selectElement.appendChild(optionsHtml);
}
renderOptions(genres, 'All genres');
renderOptions(authors, 'All authors');


// Check preferred color scheme and set theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector('[data-settings-theme]').value = 'night';
  document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
  document.documentElement.style.setProperty('--color-light', '10, 10, 20');
} else {
  document.querySelector('[data-settings-theme]').value = 'day';
  document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
  document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}

// Add event listeners
document.querySelector('[data-search-cancel]').addEventListener('click', () => {
  document.querySelector('[data-search-overlay]').open = false;
});

document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
  document.querySelector('[data-settings-overlay]').open = false;
});

document.querySelector('[data-header-search]').addEventListener('click', () => {
  document.querySelector('[data-search-overlay]').open = true;
  document.querySelector('[data-search-title]').focus();
});

document.querySelector('[data-header-settings]').addEventListener('click', () => {
  document.querySelector('[data-settings-overlay]').open = true;
});

document.querySelector('[data-list-close]').addEventListener('click', () => {
  document.querySelector('[data-list-active]').open = false;
});

document.querySelector('[data-search-form]').addEventListener('submit', handleSearchFormSubmit);
document.querySelector('[data-list-button]').addEventListener('click', handleShowMoreButtonClick);
document.querySelector('[data-list-items]').addEventListener('click', handleBookPreviewClick);
