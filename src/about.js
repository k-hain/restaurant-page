export const createAboutContent = (divContent) => {
  const aboutContainer = document.createElement('div');

  aboutContainer.textContent = 'ABOUT';

  divContent.appendChild(aboutContainer);
};