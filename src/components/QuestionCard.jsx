// import { useEffect, useState } from "react";
// import QuizLayout from "./QuizLayout";
// import NextBtn from "./NextBtn";
// import ShowScoreRestart from "./ShowScoreRestart";
// import { quizQuestions } from "../data/quizQuestions";

// const QuestionCard = () => {
//   const [index, setIndex] = useState(0);
//   const [userAnswer, setUserAnswer] = useState([]);
//   const [selectedOpt, setSelectedOpt] = useState(null);
//   const [score, setScore] = useState(0);
// //   const [showScore, setShowScore] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(10);

//   useEffect(() => {
//     if (index >= quizQuestions.length) return;
//     setTimeLeft(10);

//     const timer = setInterval(() => {
//       setTimeLeft((p) => {
//         if (p > 0) {
//           return p - 1;
//         } else {
//           clearInterval(timer);
//           handleNext();
//           return 0;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [index]);

//   const calculateScore = (index, selectedOpt) => {
//     if (
//       quizQuestions[index].options[selectedOpt] === quizQuestions[index].answer
//     ) {
//       setScore((score) => score + 1);
//     }
//   };

//   const handleClick = (i) => {
//     setSelectedOpt(i);
//   };

//   const handleNext = () => {
//     const updatedAnswer = [
//       ...userAnswer,
//       { questionIndex: index, answerIndex: selectedOpt },
//     ];
//     setUserAnswer(updatedAnswer);
//     setIndex((c) => c + 1);
//     setSelectedOpt(null);

//     if (selectedOpt != null) {
//       calculateScore(index, selectedOpt);
//     }
//   };

//   const handleRestart = () => {
//     setIndex(0);
//     setUserAnswer([]);
//     setSelectedOpt(null);
//     setScore(0);
//     // setShowScore(false);
//     setTimeLeft(10);
//   };

//   return (
//     <div>
//       {quizQuestions.length <= index ? (
//         <>
//           <ShowScoreRestart
//             score={score}
//             handleRestart={handleRestart}
//           />
//         </>
//       ) : (
//         <>
//           <p>Time left : {timeLeft}</p>
//                       <QuizLayout questionIndex={index} handleClick={handleClick} selectedOpt={ selectedOpt} />
//           <NextBtn selectedOpt={selectedOpt} handleNext={handleNext} />
//         </>
//       )}
//     </div>
//   );
// };

// export default QuestionCard;

import { useEffect, useState } from "react";
import QuizLayout from "./QuizLayout";
import NextBtn from "./NextBtn";
import ShowScoreRestart from "./ShowScoreRestart";
import { quizQuestions } from "../data/quizQuestions";

const TIMER_DURATION = 30;


const QuestionCard = () => {
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);

  useEffect(() => {
    if (index >= quizQuestions.length) return;
    setTimeLeft(TIMER_DURATION);

    const timer = setInterval(() => {
      setTimeLeft((p) => {
        if (p > 0) return p - 1;
        clearInterval(timer);
        handleNext();
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [index]);

  const calculateScore = (index, selectedOpt) => {
    if (quizQuestions[index].options[selectedOpt] === quizQuestions[index].answer) {
      setScore((score) => score + 1);
    }
  };

  const handleClick = (i) => setSelectedOpt(i);

  const handleNext = () => {
    const updatedAnswer = [
      ...userAnswer,
      { questionIndex: index, answerIndex: selectedOpt },
    ];
    setUserAnswer(updatedAnswer);
    setIndex((c) => c + 1);
    setSelectedOpt(null);
    if (selectedOpt != null) calculateScore(index, selectedOpt);
  };

  const handleRestart = () => {
    setIndex(0);
    setUserAnswer([]);
    setSelectedOpt(null);
    setScore(0);
    setTimeLeft(TIMER_DURATION);
  };

  // Timer bar width percentage
  const timerWidth = (timeLeft / TIMER_DURATION) * 100;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-8">
      {quizQuestions.length <= index ? (
        <ShowScoreRestart score={score} handleRestart={handleRestart} />
      ) : (
        <>
          {/* Timer */}
          <div className="mb-5">
            <p className="text-gray-700 font-semibold mb-2">Time left: {timeLeft}s</p>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${timerWidth}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <QuizLayout
            questionIndex={index}
            handleClick={handleClick}
            selectedOpt={selectedOpt}
          />

          {/* Next button */}
          <div className="mt-6 flex justify-end">
            <NextBtn selectedOpt={selectedOpt} handleNext={handleNext} />
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionCard;
