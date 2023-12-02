import { useState } from "react";
import PropTypes from "prop-types";
import { resultInitialState } from "../../constants";
import "./Quiz.scss";
import AnswerTimer from "./AnswerTimer/AnswerTimer";

const Quiz = ({ questions }) => {
  Quiz.propTypes = {
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        choices: PropTypes.arrayOf(PropTypes.string).isRequired,
        correctAnswer: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState(true);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = (finalAnswer) => {
    setAnswerIdx(null);
    setShowAnswerTimer(false);
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 5, // score value is 5 for each correct answer
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0); // reached the end
      setShowResult(true);
    }

    setTimeout(() => {
      setShowAnswerTimer(true);
    });
  };

  const onTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
  };

  const handleTimeUp = () => {
    setAnswer(false);
    onClickNext(false);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          {showAnswerTimer && (
            <AnswerTimer duration={4} onTimeUp={handleTimeUp} />
            // && operator: if showAnswerTimer is true, then render AnswerTimer
          )}
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{questions.length}</span>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => {
                  onAnswerClick(answer, index);
                }}
                key={index}
                className={answerIdx === index ? "selected-answer" : null}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button
              onClick={() => onClickNext(answer)}
              disabled={answerIdx == null}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Questions: <span> {questions.length}</span>
          </p>
          <p>
            Total Score: <span> {result.score}</span>
          </p>
          <p>
            Correct Answers: <span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span> {result.wrongAnswers}</span>
          </p>
          <button onClick={onTryAgain}>Try again</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
