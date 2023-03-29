// The number of car cards to create
const numberOfCards = 10;

// A reference to the car-list element
const carList = document.querySelector('.car-list');

// Function that creates a car card
function createCarCard() {
    const cardTemplate = `
        <li class="ms-1 me-2 car-card py-3 d-flex flex-column justify-content-center align-items-center" style="border-radius: 20px; background:#fff; width:300px; display:inline-flex;">
            <img src="assets/hondaSUV.png" class="" alt="car" style="width: 75%">
            <div class="w-100 mt-5 d-flex flex-column justify-content-between align-items-center">
                <p class="fs-5 fw-bold mb-1">Honda CRV</p>
                <p class="mb-1">Gas Milage: 28 MPG</p>
                <p class="mb-1">Plate#: AUV-123</p>
                <div class="d-flex">
                    <i class="fa-solid fa-person"></i>
                    <i class="fa-solid fa-person"></i>
                    <i class="fa-solid fa-person"></i>
                    <i class="fa-solid fa-person"></i>
                    <i class="fa-solid fa-person"></i>
                    <i class="fa-solid fa-person"></i>
                </div>
            </div>
        </li>
    `;
    return cardTemplate;
}

// Populate the car list with car cards
for (let i = 0; i < numberOfCards; i++) {
    carList.innerHTML += createCarCard();
}
