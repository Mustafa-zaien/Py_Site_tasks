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

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
    else{
        window.location.href = 'questions.html';
    }
});
