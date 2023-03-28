
    function resetOtherCards(card) {
        const tripList = document.getElementById('trip-list');
        const cards = tripList.querySelectorAll('.card');
        for (const otherCard of cards) {
            if (otherCard !== card) {
                otherCard.classList.remove('selected');
            }
        }
    }

    function toggleCardSelection(event) {
        const card = event.target.closest('.card');
        if (card) {
            resetOtherCards(card);
            card.classList.toggle('selected');
        }
    }

    function createTripCard() {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.style.backgroundColor = '#fff';
        card.addEventListener('click', toggleCardSelection);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title mb-3';
        cardTitle.textContent = 'Steve Laboni';

        const cardPhone = document.createElement('h6');
        cardPhone.className = 'card-subtitle mb-2 text-muted';
        cardPhone.textContent = 'phone# : (123)-456-7890';

        const cardDepartureDate = document.createElement('h6');
        cardDepartureDate.className = 'card-subtitle mb-2 text-muted';
        cardDepartureDate.textContent = 'Depature date: 12/31/2023';

        const cardVehicleType = document.createElement('h6');
        cardVehicleType.className = 'card-subtitle mb-2 text-muted';
        cardVehicleType.textContent = 'Vehicle type: Honda SUV';

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPhone);
        cardBody.appendChild(cardDepartureDate);
        cardBody.appendChild(cardVehicleType);
        card.appendChild(cardBody);

        return card;
    }

    function populateTripList() {
        const tripList = document.getElementById('trip-list');
        for (let i = 0; i < 10; i++) {
            tripList.appendChild(createTripCard());
        }
    }

    populateTripList();