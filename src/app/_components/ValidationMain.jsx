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
  console.log("This is user info", formData);

  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
      <StepOne id={1} formData={formData} setFormData={setFormData} />
      <StepTwo id={2} formData={formData} setFormData={setFormData} />
      <StepThree id={3} formData={formData} setFormData={setFormData} />
      <DefaultLogo
        textLogo={"You're All Set"}
        textResponse={"We've received your submission. Thank you!"}
      />
    </div>
  );
};

export default ValidationPage;
