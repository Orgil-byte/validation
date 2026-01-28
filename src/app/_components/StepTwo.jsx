"use client";

import DefaultLogo from "./DefaultLogo";
import UserInputs from "./UserInputs";
import ContinueButton from "./ContinueButton";
import BackButton from "./BackButton";
import useEmailPassValid from "../hooks/useEmailPasswordValid";

const StepTwo = ({
  id,
  formData,
  handlePrev,
  setStep,
  onChange,
  errorChanges,
  setErrorChanges,
}) => {
  const onSubmit = () => {
    const { isValid, newError } = useEmailPassValid(formData);

    if (isValid) {
      setStep((prevStep) => prevStep + 1);
    }

    setErrorChanges(newError);
  };
  return (
    <div className="flex flex-col w-120 min-h-163.75 bg-white rounded-lg p-8">
      <DefaultLogo
        textLogo={"Join Us! 😎"}
        textResponse={"Please provide all current information accurately."}
      />
      <div className="flex flex-col grow gap-3 mb-5">
        <UserInputs
          value={formData.email}
          label={"Email"}
          name={"email"}
          type={"text"}
          placeholder={"Your email"}
          onChange={onChange}
          error={errorChanges?.email}
        />
        <UserInputs
          value={formData.phoneNumber}
          label={"Phone number"}
          name={"phoneNumber"}
          type={"text"}
          placeholder={"Your phone number"}
          onChange={onChange}
          error={errorChanges?.phoneNumber}
        />
        <UserInputs
          value={formData.password}
          label={"Password"}
          name={"password"}
          type={"password"}
          placeholder={"Your password"}
          onChange={onChange}
          error={errorChanges?.password}
        />
        <UserInputs
          value={formData.confirmPassword}
          label={"ConfirmPassword"}
          name={"confirmPassword"}
          type={"password"}
          placeholder={"Confirm password"}
          onChange={onChange}
          error={errorChanges?.confirmPassword}
        />
      </div>
      <div className="flex w-full gap-2 mt-auto">
        <BackButton text={"Back"} onClick={handlePrev} />
        <ContinueButton
          stepTwoThreeBtnFlex={"flex-1"}
          text="Continue"
          pageNum={`${id}/3`}
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default StepTwo;
