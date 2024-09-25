// Function to retrieve and parse the value from an input field by ID
function getInputFieldValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    console.log(inputValue); // Log for debugging
    return inputValue;
}

// Function to retrieve and parse the text content of an element by ID
function getTextFieldValueById(id) {
    return parseFloat(document.getElementById(id).innerText);
}

// Function to show a specific section by ID and hide others
function showSectionById(id) {
    // Hide both sections by default
    ['donation-collect', 'transaction-history'].forEach(section => {
        document.getElementById(section).classList.add('hidden');
    });

    // Display the targeted section
    document.getElementById(id).classList.remove('hidden');
}

