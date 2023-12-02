import Quiz from "./components/Quiz/Quiz";
import { jsQuizz } from "./constants";
import { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const response = await fetch(
        "https://644982a3e7eb3378ca4ba471.mockapi.io/questions"
      );
      const questionsResponse = await response.json();
      setQuestions(questionsResponse);
    } catch (error) {
      console.log(error);
    }
  };

  // return <Quiz questions={jsQuizz.questions} />; // hardcoded questions
  return questions.length && <Quiz questions={questions} />; // fetched questions
}

export default App;
