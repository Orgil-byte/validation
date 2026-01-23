"use client";

import DefaultLogo from "./DefaultLogo";
import UserInputs from "./UserInputs";
import ContinueButton from "./ContinueButton";
import BackButton from "./BackButton";
import { useState } from "react";

const StepTwo = ({ id }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberRegex = /^\+?\d{8}$/;
  const passwordRegex = /[A-Za-z\d]{6,}/;
  const passwordNum = /(?=.*\d)/;
  const passwordLetter = /[a-zA-Z]/;

  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errorChanges, setErrorChanges] = useState();

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const formValidation = () => {
    const newError = {};

    if (!formData.email.trim()) {
      newError.email = "Мэйл хаягаа оруулна уу";
    } else if (!emailRegex.test(formData.email)) {
      newError.email = "Please provide a valid email adress.";
    }

    if (!formData.phoneNumber.trim()) {
      newError.phoneNumber = "Утасны дугаараа оруулна уу.";
    } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
      newError.phoneNumber = "Please enter a valid phone number.";
    }

    if (!formData.password.trim()) {
      newError.password = "Нууц үгээ оруулна уу.";
    } else if (!passwordRegex.test(formData.password)) {
      newError.password = "Password should at least has 6 characters.";
    } else if (!passwordNum.test(formData.password)) {
      newError.password = "Password should include numbers.";
    } else if (!passwordLetter.test(formData.password)) {
      newError.password = "Password should include letters.";
    }

    if (!formData.confirmPassword.trim()) {
      newError.confirmPassword = "Нууц үгээ давтаж оруулна уу.";
    } else if (formData.password !== formData.confirmPassword) {
      newError.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
    }
    setErrorChanges(newError);
    console.log("This is the user infos", formData);
  };

  return (
    <div className="flex flex-col w-120 min-h-163.75 bg-white rounded-lg p-8">
      <DefaultLogo
        textLogo={"Join Us! 😎"}
        textResponse={"Please provide all current information accurately."}
      />
      <div className="flex flex-col grow gap-3 mb-5">
        <UserInputs
          label={"Email"}
          name={"email"}
          type={"text"}
          placeholder={"Your email"}
          onChange={onChange}
          error={errorChanges?.email}
        />
        <UserInputs
          label={"Phone number"}
          name={"phoneNumber"}
          type={"text"}
          placeholder={"Your phone number"}
          onChange={onChange}
          error={errorChanges?.phoneNumber}
        />
        <UserInputs
          label={"Password"}
          name={"password"}
          type={"text"}
          placeholder={"Your password"}
          onChange={onChange}
          error={errorChanges?.password}
        />
        <UserInputs
          label={"ConfirmPassword"}
          name={"confirmPassword"}
          type={"text"}
          placeholder={"Confirm password"}
          onChange={onChange}
          error={errorChanges?.confirmPassword}
        />
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

export default StepTwo;
