const ContinueButton = ({ text, pageNum, onClick, stepTwoThreeBtnFlex }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`flex ${stepTwoThreeBtnFlex} h-11 items-center justify-center mt-auto  gap-2 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80`}
    >
      {text} {pageNum}
      <img
        className="w-3 h-3 object-cover "
        src="/icons8-forward-12.png"
        alt=""
      />
    </button>
  );
};

export default ContinueButton;
