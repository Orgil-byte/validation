const Label = ({ label, error, type }) => {
  return (
    <div className="space-y-2">
      <p className=" block text-sm font-semibold leading-4 text-[#334155]">
        {label} <span className="text-[#e14942] text-[16px]">*</span>
      </p>
      <div className="flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-gray-100 h-45 border border-gray-300 rounded-md border-solid">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
          <img
            className="w-3 h-3 object-cover"
            src="/add-image-icon.svg"
            alt="img"
          />
        </div>
        <h4 className="text-sm text-center">Browse or Drop Image</h4>
        <input type={type} />
      </div>

      <p className="text-error text-xs text-red-500">{error}</p>
    </div>
  );
};

export default Label;
