const ShowScoreRestart = ({
  score,
  setShowScore,
  showScore,
  handleRestart,
}) => {
  return (
    <div>
      <button onClick={() => setShowScore(s => !s)}>Show score</button>
      {showScore && <p>Your score is {score}</p>}
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default ShowScoreRestart;
