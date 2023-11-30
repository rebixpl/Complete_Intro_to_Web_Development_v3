// Objects

const name = "Pedro";

const person = {
  name,
  age: 20,
  isMarried: false,
};

// Destructuring Objects (This way is correct, but there is a better way)
// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;

// Destructuring Objects (This way is better)
// const { name, age, isMarried } = person;

// person2 is a copy of person, but with the name "Jack"
const person2 = { ...person, name: "Jack" };

const names = ["Jessica", "Pedro", "Jack"];
const names2 = [...names, "Joel"];

// Fundamental functions (map, filter, reduce)
names.map((name) => {
  return name + "1";
});

names.map((name) => {
  return <h1>{name}</h1>;
});

names.filter((name) => {
  return name !== "Pedro";
});
