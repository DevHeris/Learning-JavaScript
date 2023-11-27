// Create a new Map to store poll options and their initial vote counts
const poll = new Map();
poll.set("React", 0);
poll.set("Vue", 0);
poll.set("Angular", 0);
poll.set("Svelte", 0);
poll.set("Other", 0);

// Function to handle form submission
const submitForm = (event) => {
  event.preventDefault();

  // Get the selected poll option from the form
  const selectedOption = document.querySelector(
    "input[name='poll-option']:checked"
  );

  // Check if an option is selected
  if (!selectedOption) {
    alert("Please Select an Option");
    return;
  }

  // Update the vote count for the selected option
  const voteCount = poll.get(selectedOption.value);
  poll.set(selectedOption.value, voteCount + 1);

  // Render the updated poll results
  renderResults();

  // Disable all input elements to prevent further voting
  document.querySelectorAll("input").forEach((el) => {
    el.setAttribute("disabled", true);
  });
};

// Function to render the poll results in the HTML
const renderResults = () => {
  const results = document.getElementById("results");
  results.innerHTML = "";

  // Loop through the poll Map and create HTML elements for each option
  for (const [option, vote] of poll) {
    const optionEl = document.createElement("div");

    // Style the option element
    optionEl.classList.add(
      "border-bottom",
      "p-2",
      "justify-content-between",
      "d-flex"
    );

    // Set the inner HTML content with the option name and vote count
    optionEl.innerHTML = `<strong>${option}:</strong> ${vote} votes`;

    // Append the option element to the results container
    results.append(optionEl);
  }
};

// Add a submit event listener to the poll form
document.getElementById("poll-form").addEventListener("submit", submitForm);
