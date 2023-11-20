// Array of people profiles
const people = [
  {
    name: "Jamie Williams",
    age: 26,
    gender: "female",
    location: "Los Angeles, CA",
    imageURL: "https://randomuser.me/api/portraits/women/1.jpg",
    looking: "Female looking for male",
  },
  {
    name: "John Smith",
    age: 35,
    gender: "male",
    location: "New York, NY",
    imageURL: "https://randomuser.me/api/portraits/men/1.jpg",
    looking: "Male looking for female",
  },
  {
    name: "Bob Johnson",
    age: 42,
    gender: "male",
    location: "Chicago, IL",
    imageURL: "https://randomuser.me/api/portraits/men/2.jpg",
    looking: "Male looking for male",
  },
  {
    name: "Shannon Jackson",
    age: 29,
    gender: "female",
    location: "Los Angeles, CA",
    imageURL: "https://randomuser.me/api/portraits/women/2.jpg",
    looking: "Female looking for female",
  },
];

// DOM elements
const nextBtn = document.getElementById("next");
const profileInfo = document.querySelector(".profile-info");
const img = document.querySelector("img");

// Generator function to create an iterator over the people array
function* createPeopleIterator(people) {
  let index = 0;
  while (true) {
    // Yield the next person, cycling through the people array
    yield people[index++ % people.length];
  }
}

// Create an iterator using the generator function
const iterator = createPeopleIterator(people);

// Event listener for the "Next" button
nextBtn.addEventListener("click", () => {
  // Get the next person from the iterator
  const person = iterator.next().value;

  // Update the DOM with the information from the current person
  img.src = person.imageURL;
  profileInfo.firstElementChild.textContent = person.name;
  profileInfo.querySelectorAll("p")[0].textContent = `${person.age} Years Old`;
  profileInfo.querySelectorAll("p")[1].textContent = `From ${person.location}`;
  profileInfo.querySelectorAll("p")[2].textContent = person.looking;
});

// Trigger a click on the "Next" button immediately when the page loads
nextBtn.click();
