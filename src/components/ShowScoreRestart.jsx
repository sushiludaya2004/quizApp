// const ShowScoreRestart = ({
//   score,
//   handleRestart,
// }) => {
//   return (
//     <div>
      
//       <p>Your score is {score}</p>
//       <button onClick={handleRestart} className="cursor-pointer">Restart</button>
//     </div>
//   );
// };

// export default ShowScoreRestart;

const ShowScoreRestart = ({ score, handleRestart }) => {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Quiz Completed!</h2>
      <p className="text-xl mb-6 text-gray-700">Your score is <span className="font-semibold text-blue-500">{score}</span></p>
      <button
        onClick={handleRestart}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 shadow-md transition-all duration-300"
      >
        Restart
      </button>
    </div>
  );
};

export default ShowScoreRestart;
