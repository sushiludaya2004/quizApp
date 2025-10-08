// const NextBtn = ({selectedOpt, handleNext}) => {
//   return (
//     <div>
//       <button
//         disabled={selectedOpt == null}
//               className={`mt-2 bg-blue-500 text-white` + (selectedOpt == null ? " opacity-50 cursor-not-allowed" : " cursor-pointer")}
//         onClick={() => handleNext()}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default NextBtn;

const NextBtn = ({ selectedOpt, handleNext }) => {
  return (
    <div>
      <button
        disabled={selectedOpt == null}
        onClick={handleNext}
        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300
          ${selectedOpt == null
            ? "bg-blue-300 text-white opacity-60 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600 shadow-md"
          }`}
      >
        Next
      </button>
    </div>
  );
};

export default NextBtn;
