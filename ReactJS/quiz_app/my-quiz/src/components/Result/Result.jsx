import PropTypes from "prop-types";
import "./Result.scss";

const Result = ({ totalQuestions, result, onTryAgain }) => {
  Result.propTypes = {
    totalQuestions: PropTypes.number.isRequired,
    result: PropTypes.shape({
      score: PropTypes.number.isRequired,
      correctAnswers: PropTypes.number.isRequired,
      wrongAnswers: PropTypes.number.isRequired,
    }).isRequired,
    onTryAgain: PropTypes.func.isRequired,
  };

  return (
    <div className="result">
      <h3>Result</h3>
      <p>
        Total Questions: <span> {totalQuestions}</span>
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
  );
};

export default Result;
