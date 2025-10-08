const NextBtn = ({selectedOpt, handleNext}) => {
  return (
    <div>
      <button
        disabled={selectedOpt == null}
              className={`cursor-pointer mt-2 bg-blue-500 text-white` + (selectedOpt == null ? " opacity-50 cursor-not-allowed" : "")}
        onClick={() => handleNext()}
      >
        Next
      </button>
    </div>
  );
};

export default NextBtn;
