import './style.css';
import { createHomeContent } from './home.js';
import { createMenuContent } from './menu.js';
import { createAboutContent } from './about.js';
import logoSvg from './svg/ramen_dining_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';

class displayController {
  static #divContent = document.querySelector('#content');
  static #nav = document.querySelector('nav');
  static #logoIcon = document.querySelector('img#logo');
  static #homeButton = this.#nav.querySelector('button#home');
  static #menuButton = this.#nav.querySelector('button#menu');
  static #aboutButton = this.#nav.querySelector('button#about');

  static initializePage() {
    this.#logoIcon.src = logoSvg;
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