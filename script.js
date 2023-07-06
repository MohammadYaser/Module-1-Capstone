/* eslint-disable linebreak-style */
const popMenu = () => {
  const burger = document.querySelector('.humberger');
  const nav = document.querySelector('.navbar');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  document.querySelectorAll('.links').forEach((n) => {
    n.addEventListener('click', () => {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};
popMenu();
// Speakers Section
const speakers = [
  {
    photo: 'assets/images/pic1.png',
    altText: 'Sophi Mendez image',
    name: 'Sophi Mendez',
    profession: 'Computer Engineer',
    details: 'Benkler studied commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    photo: 'assets/images/pic2.png',
    altText: 'Yasmin Adi image',
    name: 'Yasmin Adi',
    profession: 'Web Developer',
    details: 'Helped bring the software to Asia and is an outspoken advocate for the open web and digital commons. In 2020, he was inducted into the inaugural class of the Software Society.',
  },
  {
    photo: 'assets/images/pic3.jpg',
    altText: 'Yochai Benkler image',
    name: 'Yochai Benkler',
    profession: 'Designer',
    details: 'As the main venue for new media art production, Benkler promotes cross-disciplinary collaboration and understanding among science, technology, humanities, and the arts.',
  },
  {
    photo: 'assets/images/pic4.jpg',
    altText: 'Julia Leda image',
    name: 'Julia Leda',
    profession: 'President of Young Pirates of Europe',
    details: "European integration, political democracy, and participation of youth through online as her major concern. Reda's report outlining potential changes to EU copyright law was approved by the Parliament in August.",
  },
  {
    photo: 'assets/images/pic5.jpg',
    altText: 'Kilnam Chon image',
    name: 'Kilnam Chon',
    profession: 'Executive Director of the Wikimedia',
    details: 'Chon is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. It is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    photo: 'assets/images/pic6.jpg',
    altText: 'Ryan Merkley image',
    name: 'Ryan Merkley',
    profession: 'CEO of Creative Commons',
    details: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source movement.',
  },
];

const featuredSpeakerSection = document.querySelector('#featured-speaker');
const header = document.createElement('div');
header.className = 'titlesection';
header.innerHTML = `
  <h2 class="title">Featured Speaker</h2>
  <hr/>
`;
featuredSpeakerSection.appendChild(header);

const speakersSection = document.querySelector('#speakers');
speakers.forEach((speaker, index) => {
  const gridItem = document.createElement('div');
  gridItem.className = 'grid-item';

  const image = document.createElement('img');
  image.src = speaker.photo;
  image.alt = speaker.altText;

  const speakerDetails = document.createElement('div');
  speakerDetails.className = 'speaker';

  const name = document.createElement('h4');
  name.textContent = speaker.name;

  const profession = document.createElement('p');
  profession.className = 'profession';
  profession.textContent = speaker.profession;

  const divider = document.createElement('div');
  divider.className = 'divider';

  const description = document.createElement('p');
  description.className = 'description';
  description.textContent = speaker.details;

  speakerDetails.append(name, profession, divider, description);
  gridItem.append(image, speakerDetails);
  speakersSection.appendChild(gridItem);

});
