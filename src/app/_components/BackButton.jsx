const BackButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex cursor-pointer items-center justify-center w-32 gap-x-3 rounded-md border border-[#CBD5E1] transition-all duration-300 hover:bg-gray-100"
    >
      <img
        className="w-4 h-4 object-cover"
        src="/icons8-back-30.png"
        alt="back arrow"
      />
      {text}
    </button>
  );
};

export default BackButton;
