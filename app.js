/* Imports */
const climateSelect = document.getElementById('climate-select');
const architectureSelect = document.getElementById('architecture-select');
const attractionsSelect = document.getElementById('attractions-select');
const climateImage = document.getElementById('climate-image');
const architectureImage = document.getElementById('architecture-image');
const attractionsImage = document.getElementById('attractions-image');
const sloganInput = document.getElementById('slogan-input');
const addButton = document.getElementById('add-button');
const sloganList = document.getElementById('slogan-list');
const nameInput = document.getElementById('name-input');
const nameList = document.getElementById('name-list');
/* Get DOM Elements */

/* State */
const destination = {
    names: [],
    climate: 'tropical',
    architecture: 'city',
    attractions: 'shrine',
    slogans: [],
};

/* Events */
nameInput.addEventListener('input', () => {
    destination.name = nameInput.value;

    displayDestination();
});
climateSelect.addEventListener('change', () => {
    destination.climate = climateSelect.value;
    displayDestination();
});

architectureSelect.addEventListener('change', () => {
    destination.architecture = architectureSelect.value;
    displayDestination();
});

attractionsSelect.addEventListener('change', () => {
    destination.attractions = attractionsSelect.value;
    displayDestination();
});
/* Display Functions */
function displayDestination() {
    climateImage.src = '/assets/city/' + destination.climate + '-climate.png';
    architectureImage.src = 'assets/city/' + destination.architecture + '-architecture.png';
    attractionsImage.src = 'assets/city/' + destination.attractions + '-attractions.png';
}

function displaySlogans() {
    sloganList.innerHTML = '';

    for (const slogan of destination.slogans) {
        const li = document.createElement('li');
        li.textContent = slogan;
        sloganList.append(li);
    }
}

addButton.addEventListener('click', () => {
    const slogan = sloganInput.value;
    if (slogan === '') {
        return;
    }
    destination.slogans.push(slogan);
    displaySlogans();

    sloganInput.value = '';
});
//below does not work gosh darn it
function displayName() {
    nameInput.innerHTML = '';
    for (const name of destination.names) {
        const p = document.createElement('p');
        p.textContent = name;
        nameList.append(p);
    }
}
displayDestination();
displaySlogans();
displayName();
// (don't forget to call any display functions you want to run on page load!)
