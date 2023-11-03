const person = {
  name: "Adolf",
  age: 25,
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
};

console.log(person);
console.log(person.name);
console.log(person["name"]);

const person1 = {
  name: "Angie",
  ageRange: "25-35",
};
const person2 = {
  name: "Francesca",
  ageRange: "65-75",
};

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you will like Daft Punk.");
  } else if (person.ageRange === "65-75") {
    console.log("You are obviously going to like Johnny Cash.");
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}

suggestMusic(person1);
suggestMusic(person2);

const dog = {
  name: "dog",
  // Objects can even have their functions! Let's see that.
  speak() {
    console.log("woof woof");
  },
};

dog.speak();

// Objects can as well have nested objects inside of them.
const me = {
  name: {
    first: "Brian",
    last: "Holt",
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: {
      name: "Washington",
      abbreviation: "WA",
    },
    zipCode: 55555,
    country: "USA",
  },
};

console.log(me.location.streetNumber);
console.log(me.location.state.name);
console.log(me.name.first);
