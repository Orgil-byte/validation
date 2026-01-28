"use client";

import DefaultLogo from "./DefaultLogo";
import UserInputs from "./UserInputs";
import ContinueButton from "./ContinueButton";
import useNameValid from "../hooks/useNameIsValid";

const StepOne = ({
  id,
  formData,
  setStep,
  onChange,
  errorChanges,
  setErrorChanges,
}) => {
  const onSubmit = () => {
    const { isValid, newError } = useNameValid(formData);

    if (isValid) {
      setStep((prevStep) => prevStep + 1);
    }

    setErrorChanges(newError);
  };

  return (
    <div className="flex flex-col w-120 h-163.75 bg-white rounded-lg p-8">
      <DefaultLogo
        textLogo="Join Us! 😎"
        textResponse="Please provide all current information accurately."
      />
      <div className="flex flex-col grow gap-3">
        <UserInputs
          value={formData.firstName}
          label={"First name"}
          name={"firstName"}
          type={"text"}
          placeholder={"Your first name"}
          onChange={onChange}
          error={errorChanges?.firstName}
        />
        <UserInputs
          value={formData.lastName}
          label={"Last name"}
          name={"lastName"}
          type={"text"}
          placeholder={"Your last name"}
          onChange={onChange}
          error={errorChanges?.lastName}
        />
        <UserInputs
          value={formData.userName}
          label={"Username"}
          name={"userName"}
          type={"text"}
          placeholder={"Your username"}
          onChange={onChange}
          error={errorChanges?.userName}
        />
      </div>
      <ContinueButton text="Continue" pageNum={`${id}/3`} onClick={onSubmit} />
    </div>
  );
};

export default StepOne;
