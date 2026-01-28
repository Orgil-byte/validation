"use client";
import DefaultLogo from "./DefaultLogo";
import UserInputs from "./UserInputs";
import ContinueButton from "./ContinueButton";
import BackButton from "./BackButton";
import Label from "./DragImg";
import useBirthdayValid from "../hooks/useBirthdayValid";

const StepThree = ({
  id,
  formData,
  setFormData,
  handlePrev,
  setStep,
  onChange,
  errorChanges,
  setErrorChanges,
}) => {
  const onSubmit = () => {
    const { isValid, newError } = useBirthdayValid(formData);

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
          value={formData.birthday}
          label={"Date of birth"}
          name={"birthday"}
          type={"date"}
          placeholder={"mm/dd/yyyy"}
          onChange={onChange}
          error={errorChanges?.birthday}
        />
        <Label
          setFormData={setFormData}
          formData={formData}
          value={formData.image}
          label={"Profile image"}
          error={errorChanges?.image}
          type={"file"}
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

export default StepThree;
