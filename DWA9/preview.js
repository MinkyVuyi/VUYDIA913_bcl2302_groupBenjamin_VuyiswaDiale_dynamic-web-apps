import { authors } from "./data.js";

class BookPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const bookData = this.getAttribute("data-book");
    const book = JSON.parse(bookData);

    if (book) {
      this.render(book);
    }
  }

  render(book) {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          padding: 10px;
          border: none;
          background-color: var(--color-light);
          border-bottom: 1px solid var(--color-dark);
        }

        .preview__image {
          width: 60px;
          height: 80px;
          object-fit: cover;
          margin-right: 10px;
        }

        .preview__info {
          flex: 1;
        }

        .preview__title {
          font-weight: bold;
          margin-bottom: 4px;
          color: rgba(var(--color-dark), 0.8);
        }

        .preview__author {
          color: rgba(var(--color-dark), 0.4);
        }
      </style>

      <button class="preview" data-book="${JSON.stringify(book)}">
        <img class="preview__image" src="${book.image}" />
        <div class="preview__info">
          <h3 class="preview__title">${book.title}</h3>
          <div class="preview__author">${authors[book.author]}</div>
        </div>
      </button>
    `;
  }
}

customElements.define("book-preview", BookPreview);
