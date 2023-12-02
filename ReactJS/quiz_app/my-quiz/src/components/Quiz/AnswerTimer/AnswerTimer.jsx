import "./AnswerTimer.scss";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

function AnswerTimer({ duration, onTimeUp }) {
  AnswerTimer.propTypes = {
    duration: PropTypes.number.isRequired,
    onTimeUp: PropTypes.func.isRequired,
  };

  const [counter, setCounter] = useState(0);
  const [progressLoaded, setProgressLoaded] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgressLoaded((counter / duration) * 100);

    if (counter === duration) {
      clearInterval(intervalRef.current);

      setTimeout(() => {
        onTimeUp();
      }, 1000); // setTimeout 1s, because the animation takes 1s to finish
    }
  }, [counter]);

  return (
    <div className="answer-timer-container">
      <div
        style={{
          width: `${progressLoaded}%`,
          backgroundColor: `${
            progressLoaded < 40
              ? "lightgreen"
              : progressLoaded < 70
              ? "orange"
              : "red"
          }`,
        }}
        className="progress"
      ></div>
    </div>
  );
}

export default AnswerTimer;
