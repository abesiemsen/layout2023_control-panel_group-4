// Get references to the radio buttons and forms
const radio1 = document.getElementById('btnradio1');
const radio2 = document.getElementById('btnradio2');
const radio3 = document.getElementById('btnradio3');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');

// Add event listeners to the radio buttons
radio1.addEventListener('click', () => {
    form1.style.display = 'flex';
    form2.style.display = 'none';
    form3.style.display = 'none';
});

radio2.addEventListener('click', () => {
    form1.style.display = 'none';
    form2.style.display = 'flex';
    form3.style.display = 'none';
});

radio3.addEventListener('click', () => {
    form1.style.display = 'none';
    form2.style.display = 'none';
    form3.style.display = 'flex';
});