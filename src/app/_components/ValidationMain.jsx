"use client";
import { useState } from "react";

import DefaultLogo from "./DefaultLogo";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const ValidationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    image: "",
  });

  const [step, setStep] = useState(3);

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
      {step === 1 ? (
        <StepOne
          id={1}
          formData={formData}
          setFormData={setFormData}
          handlePrev={handlePrev}
          setStep={setStep}
        />
      ) : step === 2 ? (
        <StepTwo
          id={2}
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
          handlePrev={handlePrev}
        />
      ) : step === 3 ? (
        <StepThree
          id={3}
          formData={formData}
          setFormData={setFormData}
          handlePrev={handlePrev}
          setStep={setStep}
        />
      ) : step === 4 ? (
        <DefaultLogo
          textLogo={"You're All Set"}
          textResponse={"We've received your submission. Thank you!"}
        />
      ) : null}
    </div>
  );
};

export default ValidationPage;
