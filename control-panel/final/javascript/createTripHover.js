const CreateTripLink = document.querySelector('#create');
const addTripBtn = document.querySelector('#addTrip');
const searchButton = document.querySelector('.btn-secondary');
const carCards = document.querySelectorAll('.car-card');

CreateTripLink.addEventListener('mouseover', () => {
    CreateTripLink.style.backgroundColor = '#0b5cce';
    CreateTripLink.style.borderColor = '#0b5cce';
});

CreateTripLink.addEventListener('mouseout', () => {
    CreateTripLink.style.backgroundColor = '#1472ff';
    CreateTripLink.style.borderColor = '#1472ff';
});

searchButton.addEventListener('mouseover', () => {
    searchButton.style.backgroundColor = '#0b5cce';
});

searchButton.addEventListener('mouseout', () => {
    searchButton.style.backgroundColor = '#1472ff';
});

carCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#ccc';
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '#fff';
    });
});