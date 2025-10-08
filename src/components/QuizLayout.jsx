import { quizQuestions } from "../data/quizQuestions";

const QuizLayout = ({ questionIndex, handleClick, selectedOpt }) => {
  const { question, options, type, code } = quizQuestions[questionIndex];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg select-none">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>

      {type === "code" && (
        <div className="bg-gray-800 text-gray-100 p-4 mb-4 rounded-md overflow-x-auto select-none">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {options.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className={`text-left px-4 py-2 rounded-md font-medium border transition-colors duration-200 
              ${
                selectedOpt === idx
                  ? "bg-blue-500 text-white border-blue-600 shadow-md"
                  : "bg-gray-100 hover:bg-gray-200 border-gray-300"
              }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizLayout;
