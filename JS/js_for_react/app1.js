export default function DoSomething() {} // Exporting a default function named DoSomething

export const DoSomething2 = () => {}; // Exporting a constant arrow function named DoSomething2

const MyComponent = () => {
  // Declaring a constant arrow function named MyComponent
  return <div>Some JSX</div>; // Returning JSX code that represents a div element with the text "Some JSX"
};

<button
  onCLick={() => {
    // Adding an onClick event listener to the button
    console.log("clicked"); // Logging "clicked" to the console when the button is clicked
  }}
></button>; // A button element without any visible content

let age = 16;
// Terenary operator
let name = age > 10 ? "Pedro" : "Jack"; // Declaring a variable named name that is assigned the value "Pedro" if the variable age is greater than 10, otherwise it is assigned the value "Jack"

const Component = () => {
  return age > 10 ? <div>Jack</div> : <div> Pedro </div>;
};
