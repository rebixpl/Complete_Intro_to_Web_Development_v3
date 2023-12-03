import PropTypes from "prop-types";
import "./Result.scss";
import { useState, useEffect } from "react";

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

  const [name, setName] = useState("");
  const [highScores, setHighScores] = useState([]);
  const [showScores, setShowScores] = useState(false);

  useEffect(() => {
    setHighScores(JSON.parse(localStorage.getItem("highScores")) || []);
    // /\ we want to get the highScores from localStorage if it exists,
    // otherwise we want to set it to an empty array
  }, []);

  const handleSave = () => {
    const score = {
      name,
      score: result.score,
    };

    const newHighScores = [...highScores, score].sort(
      (a, b) => b.score - a.score
    );
    setHighScores(newHighScores);
    setShowScores(true);
    localStorage.setItem("highScores", JSON.stringify(newHighScores));
  };

  const handleTryAgain = () => {
    setHighScores([]);
    setShowScores(false);
    onTryAgain();
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
      <button onClick={handleTryAgain}>Try again</button>
      {!showScores ? (
        <>
          <h3>
            Enter your name below <br /> to save your score!
          </h3>
          <input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {highScores.map((score, index) => {
                return (
                  <tr key={`${score.score}${score.name}${index}`}>
                    <td>{index + 1}</td>
                    <td>{score.name}</td>
                    <td>{score.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Result;
