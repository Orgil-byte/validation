"use client";

import DefaultLogo from "./DefaultLogo";
import UserInputs from "./UserInputs";
import ContinueButton from "./ContinueButton";
import { isEmpty, isLetter } from "../_utils/validation";

const StepOne = ({
  id,
  formData,
  setStep,
  onChange,
  errorChanges,
  setErrorChanges,
}) => {
  const { firstName, lastName, userName } = formData;

  const formValidation = () => {
    const newError = {};

    if (isEmpty(firstName)) {
      newError.firstName = "Нэрээ оруулна уу.";
    } else if (isLetter(firstName)) {
      newError.firstName =
        "First name cannot contain special characters or numbers.";
    }

    if (isEmpty(lastName)) {
      newError.lastName = "Овгоо оруулна уу.";
    } else if (isLetter(lastName)) {
      newError.lastName =
        "Last name cannot contain special characters or numbers.";
    }

    if (isEmpty(userName)) {
      newError.userName = "Хэрэглэгчийн нэрээ оруулна уу.";
    }
    setErrorChanges(newError);

    const ifNoError = Object.keys(newError);

    if (ifNoError.length === 0) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <div className="flex flex-col w-120 h-163.75 bg-white rounded-lg p-8">
      <DefaultLogo
        textLogo={"Join Us! 😎"}
        textResponse={"Please provide all current information accurately."}
      />
      <div className="flex flex-col grow gap-3">
        <UserInputs
          value={firstName}
          label={"First name"}
          name={"firstName"}
          type={"text"}
          placeholder={"Your first name"}
          onChange={onChange}
          error={errorChanges?.firstName}
        />
        <UserInputs
          value={lastName}
          label={"Last name"}
          name={"lastName"}
          type={"text"}
          placeholder={"Your last name"}
          onChange={onChange}
          error={errorChanges?.lastName}
        />
        <UserInputs
          value={userName}
          label={"Username"}
          name={"userName"}
          type={"text"}
          placeholder={"Your username"}
          onChange={onChange}
          error={errorChanges?.userName}
        />
      </div>
      <ContinueButton
        text="Continue"
        pageNum={`${id}/3`}
        onClick={formValidation}
      />
    </div>
  );
};

export default StepOne;
