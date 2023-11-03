const me = {
  name: {
    first: "Brian",
    last: "Holt",
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA",
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
    ${this.location.streetNumber} ${this.location.street}
    ${this.location.city} ${this.location.state} ${this.location.zipCode}
    ${this.location.country}`;
  },
};

console.log(me.getAddress());
console.log(this === window);
console.log(this.scrollY);
console.log(window.scrollY);

// Arrays
const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[6]);
const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(" | "));

const courses = [
  { teacher: "Will Sentance", course: "JavaScript: The Hard Parts" },
  { teacher: "Sarah Drasner", course: "Intro to Vue" },
  { teacher: "Brian Holt", course: "Complete Intro to React" },
  { teacher: "Steve Kinney", course: "Build Your Own Programming Language" },
  { teacher: "Scott Moss", course: "Intro to Node.js" },
];

console.log(courses);

courses.push({ teacher: "Jen Kramer", course: "Getting Started with CSS" });

console.log(courses);

courses[2] = { teacher: "Brian Holt", course: "Complete Intro to PHP" };

console.log(courses);

const jen = courses.pop();
console.log(jen.course + " dasdas");

console.log("====================================");
console.log(courses.shift());
courses.unshift(jen);
console.log(courses);
console.log("====================================");

const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

cities.forEach(function (city) {
  console.log(city);
});

function logCity(city) {
  console.log(city);
}

cities.forEach(logCity);

let string = "hi my name is Nig-guela";
let stringNew = "";
stringNew += string.substring(14, 17);
stringNew += string.substring(18, 19);
stringNew += string.substring(22);
console.log(stringNew);

// EVENT LISTENERS
const button = document.querySelector(".event-button");
button.addEventListener("click", function () {
  alert("Hey there!");
});

const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copy-to");
input.addEventListener("keyup", function () {
  paragraph.innerText = input.value;
});

const input2 = document.querySelector(".color-input");
const paragraph2 = document.querySelector(".color-box");

input2.addEventListener("change", function () {
  paragraph2.style.backgroundColor = input2.value;
});

// Event Delegation
document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    alert(`You clicked on button ${event.target.innerText}`);
  });
