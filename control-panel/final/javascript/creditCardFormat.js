const cardNumberInput = document.getElementById('ccn');

cardNumberInput.addEventListener('input', (event) => {
    const input = event.target;
    const { value } = input;

    // Remove all non-numeric characters from the input value
    const formattedValue = value.replace(/\D/g, '');

    // Add a space after every 4 digits
    const newValue = formattedValue.replace(/(\d{4})/g, '$1 ');

    // Set the input value to the formatted value
    input.value = newValue.trim();
});