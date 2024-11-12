import restaurantImg from './img/masahiro-miyagi-qZGo9mfTkXk-unsplash.jpg';

export const createHomeContent = (divContent) => {
  const heroContainer = document.createElement('div');
  const heroHeader = document.createElement('h1');

  heroContainer.style.backgroundImage = `url(${restaurantImg})`;
  heroContainer.classList.add('hero-container');

  heroHeader.textContent = 'Next stop, Ramen';

  divContent.appendChild(heroContainer);
  heroContainer.appendChild(heroHeader);
};