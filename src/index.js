import './style.css';
import { createHomeContent } from './home.js';
import { createMenuContent } from './menu.js';
import { createAboutContent } from './about.js';

class displayController {
  static #divContent = document.querySelector('#content');
  static #nav = document.querySelector('nav');
  static #homeButton = this.#nav.querySelector('button#home');
  static #menuButton = this.#nav.querySelector('button#menu');
  static #aboutButton = this.#nav.querySelector('button#about');

  static initializePage() {
    this.#loadContent(createHomeContent);
    
    this.#homeButton.addEventListener(
      'click', () => this.#loadContent(createHomeContent)
    );
    this.#menuButton.addEventListener(
      'click', () => this.#loadContent(createMenuContent)
    );
    this.#aboutButton.addEventListener(
      'click', () => this.#loadContent(createAboutContent)
    );
  }

  static #clearContent() {
    while(this.#divContent.firstChild){
      this.#divContent.removeChild(this.#divContent.firstChild);
    }
  }

  static #loadContent(contentCreator) {
    this.#clearContent();
    contentCreator(this.#divContent);
  }
};

displayController.initializePage();