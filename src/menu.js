import ramen1Img from './img/mae-mu-en4qp-aK1h4-unsplash.jpg';
import ramen2Img from './img/no-revisions-YRSRQpBfsj4-unsplash.jpg';
import ramen3Img from './img/caleb-wright-i6Mb2EzQ4hM-unsplash.jpg';
import ramen4Img from './img/sharon-chen-L1ZhjK-R6uc-unsplash.jpg';

export const createMenuContent = (divContent) => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const ramenData = [
    {
      name: 'Tasty Ramen',
      img: `url(${ramen1Img})`,
    },
    {
      name: 'Vegan Ramen',
      img: `url(${ramen2Img})`,
    },
    {
      name: 'Cozy Ramen',
      img: `url(${ramen3Img})`,
    },
    {
      name: 'Deluxe Ramen',
      img: `url(${ramen4Img})`,
    },
  ];

  ramenData.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const menuItemHeader = document.createElement('div');
    menuItemHeader.classList.add('menu-item-header');

    const menuItemName = document.createElement('h2');
    menuItemName.textContent = item.name;

    const menuItemImg = document.createElement('div');
    menuItemImg.classList.add('menu-item-img');
    menuItemImg.style.backgroundImage = item.img;
    
    menuItemHeader.appendChild(menuItemName);
    menuItem.appendChild(menuItemHeader);
    menuItem.appendChild(menuItemImg);
    menuContainer.appendChild(menuItem);
  });

  divContent.appendChild(menuContainer);
};