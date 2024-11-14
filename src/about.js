import phoneSvg from './svg/call.svg';
import mailSvg from './svg/mail.svg';
import addressSvg from './svg/location.svg';
import facebookSvg from './svg/facebook.svg';
import instaSvg from './svg/instagram.svg';

export const createAboutContent = (divContent) => {
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('section');

  const contactData = [
    {
      name: 'phone',
      text: '123-456-789',
      icon: phoneSvg,
    },
    {
      name: 'mail',
      text: 'Ramen@domain.com',
      icon: mailSvg,
    },
    {
      name: 'address',
      text: 'City | Street 53',
      icon: addressSvg,
    },  
  ];

  const socialIcons = [
    facebookSvg,
    instaSvg,
  ];

  const storyDiv = document.createElement('div');
  storyDiv.classList.add('sub-section');
  const storyHeader = document.createElement('h1');
  storyHeader.classList.add('section-header');
  storyHeader.textContent = 'Our Story';
  const storyText = document.createElement('p');
  storyText.textContent =
    'Raclette synth godard air plant, pickled seitan banh mi literally \
    veganpop-up jianbing marfa gentrify ugh authentic. Bodega boys keffiyeh \
    godard locavore typewriter, fashion axe neutral milk hotel wolf \
    post-ironic cronut meggings mumblecore. Street art direct trade \
    lumbersexual heirloom same. Yuccie lo-fi tacos viral church-key \
    fingerstache JOMO 3 wolf moon pop-up.';
  storyDiv.appendChild(storyHeader);
  storyDiv.appendChild(storyText);
  aboutContainer.appendChild(storyDiv);

  const findusSection = document.createElement('div');
  findusSection.classList.add('sub-section');

  const contactHeader = document.createElement('h1');
  contactHeader.classList.add('section-header');
  contactHeader.textContent = 'Contact';
  findusSection.appendChild(contactHeader);

  const contactSection = document.createElement('div');
  contactSection.classList.add('contact-section');

  contactData.forEach((entry) => {
    const entryDiv = document.createElement('div');
    const entryText = document.createElement('h2');
    entryText.textContent = entry.text;
    const entryIcon = document.createElement('img');
    entryIcon.src = entry.icon;
    entryIcon.classList.add('contact-icon');
    entryDiv.appendChild(entryIcon);
    entryDiv.appendChild(entryText);
    entryDiv.classList.add('contact-entry');
    contactSection.appendChild(entryDiv);
  });
  
  findusSection.appendChild(contactSection);

  const socialSection = document.createElement('div');
  socialSection.classList.add('social-section');

  socialIcons.forEach((entry) => {
    const entryIcon = document.createElement('img');
    entryIcon.src = entry;
    socialSection.appendChild(entryIcon);
  });

  findusSection.appendChild(socialSection);

  aboutContainer.appendChild(findusSection);

  divContent.appendChild(aboutContainer);
};