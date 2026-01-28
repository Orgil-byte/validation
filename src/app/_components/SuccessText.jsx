const SuccessText = () => {
  return (
    <div className={`space-y-2 mb-7 bg-white p-8 w-120 rounded-lg`}>
      <div className="flex">
        <img
          className="w-15 h-15 object-cover"
          src="/pinecone-logo.svg"
          alt="Pinecone Logo"
        />
      </div>
      <h2 className="text-[26px] text-foreground font-semibold">
        You're All Set 🔥
      </h2>
      <p className="text-[19px] whitespace-nowrap text-[#8e8e8e]">
        We've received your submission. Thank you!
      </p>
    </div>
  );
};

export default SuccessText;
