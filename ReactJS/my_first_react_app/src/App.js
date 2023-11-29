/// SOME BASICS OF REACTJS
// import "./App.css";

// // Person Component
// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastName}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   );
// };

// const App = () => {
//   const name = "User";
//   const isNameShown = true;

//   return (
//     <div className="App">
//       <Person name="John" lastName="Doe" age={25} />
//       {/* Thats how we use a component in ReactJS */}
//       <Person name="Jane" lastName="Yoo" age={41} />
//       <Person name="Adam" lastName="Noe" age={16} />
//       <br></br>
//       <br></br>
//       <h1>Hello, {isNameShown ? name : "React"}!</h1>
//       {name ? (
//         <>test</>
//       ) : (
//         <>
//           {/* React.Fragment - <> </> - It's a wrapper for multiple elements just like div in HTML */}
//           <h1>test</h1>
//           <h2>There is no name</h2>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

/// STATE IN REACTJS
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    /* This is a hook that is called every time the counter value changes */
    alert("You've changed the counter value to " + counter);
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
