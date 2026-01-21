const UserInputs = ({
  label,
  type,
  placeholder,
  name,
  getInput,
  onBlur,
  errorText,
}) => {
  return (
    <fieldset className="space-y-2">
      <p className=" block text-sm font-semibold leading-4 text-[#334155]">
        {label} <span className="text-[#e14942] text-[16px]">*</span>
      </p>
      <input
        onBlur={onBlur(getInput, name)}
        onChange={getInput}
        type={type}
        placeholder={placeholder}
        className={`w-full p-3 text-base leading-5 rounded-md outline  focus:outline-[#0ca5e9] text-[#121316]`}
        name={name}
      />
      <p className="text-error text-xs text-red-500">{errorText}</p>
    </fieldset>
  );
};

export default UserInputs;
