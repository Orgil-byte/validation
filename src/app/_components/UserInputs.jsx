const UserInputs = ({ label, type, placeholder, name, onChange, error }) => {
  const baseClasses =
    "w-full p-3 text-base leading-5 rounded-md focus:outline-[#0ca5e9] text-[#121316]";
  const errorClasses = error ? " outline-red-500" : "outline-[#cbd5e1]";

  return (
    <fieldset className="space-y-2">
      <p className=" block text-sm font-semibold leading-4 text-[#334155]">
        {label} <span className="text-[#e14942] text-[16px]">*</span>
      </p>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`${baseClasses} ${errorClasses} outline-2`}
        name={name}
      />
      {error && <p className="text-error text-xs text-red-500">{error}</p>}
    </fieldset>
  );
};

export default UserInputs;
