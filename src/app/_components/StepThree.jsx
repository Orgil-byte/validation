"use client";
import DefaultLogo from "./DefaultLogo";
import UserInputs from "./UserInputs";
import ContinueButton from "./ContinueButton";
import BackButton from "./BackButton";
import { useState } from "react";
import Label from "./DragImg";

const StepThree = ({ id, formData, setFormData }) => {
  const [errorChanges, setErrorChanges] = useState();

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const formValidation = () => {
    const newError = {};

    if (!formData.birthday) {
      newError.birthday = "Төрсөн өдрөө оруулна уу";
      newError.image = "Профайл зурагаа оруулна уу";
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
          label={"Date of birth"}
          name={"birthday"}
          type={"date"}
          placeholder={"mm/dd/yyyy"}
          onChange={onChange}
          error={errorChanges?.birthday}
        />
        <Label label={"Profile image"} error={errorChanges?.image} />
      </div>
      <div className="flex w-full gap-2 mt-auto">
        <BackButton text={"Back"} />
        <ContinueButton
          stepTwoThreeBtnFlex={"flex-1"}
          text="Continue"
          pageNum={`${id}/3`}
          onClick={formValidation}
        />
      </div>
    </div>
  );
};

export default StepThree;
