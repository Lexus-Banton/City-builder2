/* Imports */
const climateSelect = document.getElementById('climate-select');
const architectureSelect = document.getElementById('architecture-select');
const attractionsSelect = document.getElementById('attractions-select');
const climateImage = document.getElementById('climate-image');
const architectureImage = document.getElementById('architecture-image');
const attractionsImage = document.getElementById('attractions-image');
const sloganInput = document.getElementById('slogan-input');
const addButton = document.getElementById('add-button');
const phraseList = document.getElementById('phrase-list');
/* Get DOM Elements */

/* State */
const destination = {
    climate: 'tropical',
    architecture: 'city',
    attractions: 'shrine',
    slogan: [],
};

/* Events */
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

// (don't forget to call any display functions you want to run on page load!)
