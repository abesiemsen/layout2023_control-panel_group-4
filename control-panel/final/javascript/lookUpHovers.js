const lookUpTripLink = document.querySelector('#lookup');
const searchButton = document.querySelector('.btn-secondary');

lookUpTripLink.addEventListener('mouseover', () => {
    lookUpTripLink.style.backgroundColor = '#0b5cce';
    lookUpTripLink.style.borderColor = '#0b5cce';
});

lookUpTripLink.addEventListener('mouseout', () => {
    lookUpTripLink.style.backgroundColor = '#1472ff';
    lookUpTripLink.style.borderColor = '#1472ff';
});

searchButton.addEventListener('mouseover', () => {
    searchButton.style.backgroundColor = '#0b5cce';
});

searchButton.addEventListener('mouseout', () => {
    searchButton.style.backgroundColor = '#1472ff';
});