"use client";
import DefaultLogo from "./DefaultLogo";
import UserInputs from "./UserInputs";
import ContinueButton from "./ContinueButton";
import BackButton from "./BackButton";
import { useState } from "react";
import Label from "./DragImg";
import { isEmpty, isEmptyImage } from "../_utils/validation";

const StepThree = ({ id, formData, setFormData, handlePrev, setStep }) => {
  const { birthday, image } = formData;

  const [errorChanges, setErrorChanges] = useState();

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const formValidation = () => {
    const dateObject = new Date(formData.birthday);
    const currentDate = new Date();
    let ageYear = currentDate.getFullYear() - dateObject.getFullYear();
    let ageMonth = currentDate.getMonth() - dateObject.getMonth();
    let ageDay = currentDate.getDay() - dateObject.getDay();

    const newError = {};
    console.log("This is user info", formData);

    if (isEmpty(birthday)) {
      newError.birthday = "Төрсөн өдрөө оруулна уу";
    } else {
      if (dateObject > currentDate) {
        newError.birthday = "Төрсөн өдөр одоогийн огнооноос өмнө байх ёстой.";
      }
      if (ageYear < 18) {
        newError.birthday = "Та 18 ба түүнээс дээш настай байх ёстой.";
      }
      if (ageYear === 18 && ageMonth < 0) {
        newError.birthday = "Та 18 ба түүнээс дээш настай байх ёстой.";
      }
      if (ageYear === 18 && ageMonth === 0 && ageDay < 0) {
        newError.birthday = "Та 18 ба түүнээс дээш настай байх ёстой.";
      }
    }

    if (isEmptyImage(image)) {
      newError.image = "Профайл зурагаа оруулна уу";
    }

    setErrorChanges(newError);

    const ifNoError = Object.keys(newError);

    if (ifNoError.length === 0) {
      setStep((prevStep) => prevStep + 1);
    }
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
          onClick={formValidation}
        />
      </div>
    </div>
  );
};

export default StepThree;
