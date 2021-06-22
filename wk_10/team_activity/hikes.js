// Example of using Classes and modules to organize the code needed to render our list of hikes. Not using MVC here.

//create an array of hikes
const hikeList = [{
    name: 'Bechler Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description: 'Beautiful short hike along the Bechler river to Bechler Falls',
    directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
  },
  {
    name: 'Teton Canyon',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description: 'Beautiful short (or long) hike through Teton Canyon.',
    directions: 'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
  },
  {
    name: 'Denanda Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '7 miles',
    difficulty: 'Moderate',
    description: 'Beautiful hike through Bechler meadows river to Denanda Falls',
    directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
  }
];

const imgBasePath = '//byui-cit.github.io/cit261/examples/';

export default class Hikes {
  constructor(id) {
    this.parentElement = document.getElementById(id);
    this.backButton = this.buildBackButton();
  }
  getAllHikes() {
    return hikeList;
  }

  getHikeByName(hikeName) {
    return this.getAllHikes().find(hike => hike.name === hikeName);
  }

  showHikeList() {
    this.parentElement.innerHTML = '';
    renderHikeList(this.parentElement, this.getAllHikes());
    this.addHikeListener();
    this.backButton.classList.add('hidden');
  }

  showOneHike(hikeName) {
    const hike = this.getHikeByName(hikeName);
    this.parentElement.innerHTML = '';
    this.parentElement.appendChild(renderOneHikeDetail(hike));
    this.backButton.classList.remove('hidden');
  }

  addHikeListener() {
    const hikeArray = Array.from(this.parentElement.children);
    hikeArray.forEach(hike => {
      hike.addEventListener('touchend', e => {
        this.showOneHike(e.currentTarget.dataset.name);
      });
      hike.addEventListener('click', e => {
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }

  buildBackButton() {
    const backButton = document.createElement('button');
    backButton.innerHTML = 'All Hikes';
    backButton.addEventListener('touchend', () => {
      this.showHikeList();
    });
    backButton.addEventListener('click', () => {
      this.showHikeList();
    });
    backButton.classList.add('hidden');
    this.parentElement.before(backButton);
    return backButton;
  }
}

function renderHikeList(parent, hikes) {
  hikes.forEach(hike => {
    parent.appendChild(renderOneHikeShort(hike));
  });
}

function renderOneHikeShort(hike) {
  const hikeBasic = document.createElement('li');
  hikeBasic.classList.add('light');
  hikeBasic.setAttribute('data-name', hike.name);
  let itemId = hike.name.replace(/\s/g, '');
  hikeBasic.setAttribute('id', itemId);
  hikeBasic.innerHTML = ` 
    <h2>${hike.name}</h2>
    <div class="image">
      <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
    </div>
    <div>
      <div>
          <h3>Distance</h3>
          <p>${hike.distance}</p>
      </div>
      <div>
          <h3>Difficulty</h3>
          <p>${hike.difficulty}</p>
      </div>
    </div>`;
  return hikeBasic;
}

function renderOneHikeDetail(hike) {
  const hikeDetailed = document.createElement('li');
  hikeDetailed.innerHTML = ` 
        <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
        <h2>${hike.name}</h2>
        <section>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>${hike.description}</p>
            </div>
            <div>
                <h3>How to get there</h3>
                <p>${hike.directions}</p>
            </div>
        <section>
    `;
  return hikeDetailed;
}