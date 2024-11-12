export const createMenuContent = (divContent) => {
  const menuContainer = document.createElement('div');

  menuContainer.textContent = 'MENU';

  divContent.appendChild(menuContainer);
};