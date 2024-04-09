// Select the form and the edit button
const form = document.querySelector("form");
const editButton = document.querySelector("#_edit");
const submit = document.querySelector("#_submit");
// Attach an event listener to the submit event of the form
// Attach an event listener to the click event of the submit button
submit.addEventListener("click", function (event) {
  // Prevent the form from being submitted to the server
  event.preventDefault();

  // Select all input elements
  var inputElements = form.querySelectorAll("input");

  // Initialize an empty object to store the answers
  var answers = {};

  // Iterate over the input elements
  inputElements.forEach(function (input) {
    // If the input is checked and is a checkbox and its name already exists in the answers object,
    // append the value to the existing array. Otherwise, create a new array with the value.
    if (input.checked && input.type === "checkbox") {
      if (answers[input.name]) {
        answers[input.name].push(input.value);
      } else {
        answers[input.name] = [input.value];
      }
    } else if (input.checked || input.type === "number") {
      // For checked radio buttons or number inputs, just store the value
      answers[input.name] = input.value;
    }

    // Disable the input element
    input.disabled = true;
  });

  // Save the answers to local storage
  localStorage.setItem("answers", JSON.stringify(answers));
});

// Attach an event listener to the click event of the edit button
editButton.addEventListener("click", function (event) {
  event.preventDefault();
  // Get the answers from local storage
  var answers = JSON.parse(localStorage.getItem("answers"));

  // Select all input elements
  var inputElements = form.querySelectorAll("input");

  // Enable all input elements and set their values according to the saved answers
  inputElements.forEach(function (input) {
    // Check the checkbox or radio button if its value is in the saved answers
    if (input.type === "checkbox") {
      if (answers[input.name] && answers[input.name].includes(input.value)) {
        input.checked = true;
      }
    } else if (input.type === "radio") {
      if (answers[input.name] === input.value) {
        input.checked = true;
      }
    } else if (input.type === "number") {
      if (answers[input.name]) {
        input.value = answers[input.name];
      }
    }

    // Enable the input element
    input.disabled = false;
  });
});
// Function to load saved answers and apply them to the form
function loadSavedAnswers() {
  // Get the answers from local storage
  var answers = JSON.parse(localStorage.getItem("answers"));

  // Select all input elements
  var inputElements = form.querySelectorAll("input");

  // If there are no saved answers, enable all input elements
  if (!answers) {
    inputElements.forEach(function (input) {
      input.disabled = false;
    });
    return;
  }

  // Set the values of the input elements according to the saved answers
  inputElements.forEach(function (input) {
    // Check the checkbox or radio button if its value is in the saved answers
    if (input.type === "checkbox") {
      if (answers[input.name] && answers[input.name].includes(input.value)) {
        input.checked = true;
      }
    } else if (input.type === "radio") {
      if (answers[input.name] === input.value) {
        input.checked = true;
      }
    } else if (input.type === "number") {
      if (answers[input.name]) {
        input.value = answers[input.name];
      }
    }
  });
}

// Run the function when the page loads
window.onload = loadSavedAnswers;

// Run the function when the page loads
window.onload = loadSavedAnswers;
