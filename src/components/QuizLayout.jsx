import { quizQuestions } from "../data/quizQuestions";

const QuizLayout = ({ questionIndex, handleClick }) => {
    

    
  return (
      <div>
           <h2>{quizQuestions[questionIndex].question}</h2>
          <div className="flex flex-col gap-2 items-start">
            {quizQuestions[questionIndex].options.map((items, idx) => {
              return (
                <button
                  key={idx}
                  className="cursor-pointer"
                  onClick={() => handleClick(idx)}
                >
                  {items}
                </button>
              );
            })}
          </div>
    </div>
  )
}

export default QuizLayout



        
          
