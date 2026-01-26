const DefaultLogo = ({ textLogo, textResponse, padding }) => {
  return (
    <div className={`space-y-2 mb-7 bg-white ${padding}`}>
      <div className="flex">
        <img
          className="w-15 h-15 object-cover"
          src="/pinecone-logo.svg"
          alt="Pinecone Logo"
        />
      </div>
      <h2 className="text-[26px] text-foreground font-semibold">{textLogo}</h2>
      <p className="text-[19px] whitespace-nowrap text-[#8e8e8e]">
        {textResponse}
      </p>
    </div>
  );
};

export default DefaultLogo;
