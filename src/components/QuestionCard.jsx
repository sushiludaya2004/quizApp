import { useState } from "react";
import QuizLayout from "./QuizLayout";
import NextBtn from "./NextBtn";
import ShowScoreRestart from "./ShowScoreRestart";
import { quizQuestions } from "../data/quizQuestions";


const QuestionCard = () => {
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const calculateScore = (index, selectedOpt) => {
    if (
      quizQuestions[index].options[selectedOpt] === quizQuestions[index].answer
    ) {
      setScore((score) => score + 1);
    }
  };

  const handleClick = (i) => {
    console.log("handle clicked is called....", i);
    setSelectedOpt(i);
    console.log(quizQuestions[index].options[i]);
  };

  const handleNext = () => {
    const updatedAnswer = [
      ...userAnswer,
      { questionIndex: index, answerIndex: selectedOpt },
    ];
    setUserAnswer(updatedAnswer);
    setIndex((c) => c + 1);
    setSelectedOpt(null);
    calculateScore(index, selectedOpt);
  };

  const handleRestart = () => {
    setIndex(0);
    setUserAnswer([]);
    setSelectedOpt(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      {quizQuestions.length <= index ? (
        <>
          <ShowScoreRestart score={score} setShowScore={setShowScore} showScore={showScore} handleRestart={handleRestart} />
        </>
      ) : (
        <>
          <QuizLayout questionIndex={index} handleClick={handleClick} />
          <NextBtn selectedOpt={selectedOpt} handleNext={handleNext} />
          
        </>
      )}
    </div>
  );
}

export default QuestionCard