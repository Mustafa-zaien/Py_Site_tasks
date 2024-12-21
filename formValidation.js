// Select the form, inputs, and dropdown
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const subjectSelect = document.querySelector('#subject');
const submitButton = document.querySelector('#submitButton');

// Create error message elements
const nameError = document.createElement('p');
nameError.style.color = 'red';
nameError.style.fontSize = '0.9rem';
nameError.style.marginTop = '0.5rem';
nameError.style.display = 'none'; // Hidden by default

const subjectError = document.createElement('p');
subjectError.style.color = 'red';
subjectError.style.fontSize = '0.9rem';
subjectError.style.marginTop = '0.5rem';
subjectError.style.display = 'none'; // Hidden by default

// Append error messages to the DOM
nameInput.insertAdjacentElement('afterend', nameError);
subjectSelect.insertAdjacentElement('afterend', subjectError);

// Add an event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default submission
    let isValid = true;

    // Validate name input
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name.';
        nameError.style.display = 'block';
        nameInput.focus();
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validate subject dropdown
    if (subjectSelect.value === '') {
        subjectError.textContent = 'Please select a subject.';
        subjectError.style.display = 'block';
        if (isValid) subjectSelect.focus();
        isValid = false;
    } else {
        subjectError.style.display = 'none';
    }

    // If valid, save name to localStorage and navigate to questions page with selected subject
    if (isValid) {
        const selectedSubject = subjectSelect.value;
        const userName = nameInput.value.trim();

        // Save name to localStorage
        localStorage.setItem('userName', userName);

        // Navigate to the questions page
        window.location.href = `questions.html?subject=${selectedSubject}`;
    }
});

// Script for the `questions.html` page
if (window.location.pathname.includes('questions.html')) {
    // Define available sections with their corresponding IDs
    const sections = [
        'intro-python',
        'data-types',
        'control-flow',
        'functions-modules',
        'oop',
        'file-handling',
        'error-handling'
    ];

    // Get the selected subject from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedSubject = urlParams.get('subject');

    // Retrieve user name from localStorage
    const userName = localStorage.getItem('userName');
    if (userName) {
        const header = document.querySelector('header');
        const welcomeMessage = document.createElement('p');
        welcomeMessage.style.fontSize = '1.2rem';
        welcomeMessage.style.marginTop = '1rem';
        welcomeMessage.textContent = `Welcome, ${userName}! Good luck with your questions.`;
        header.appendChild(welcomeMessage);
    }

    // Show only the selected section, hide others
    sections.forEach(sectionId => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            if (sectionId === selectedSubject) {
                sectionElement.style.display = 'block'; // Show selected section
            } else {
                sectionElement.style.display = 'none'; // Hide others
            }
        }
    });
}
