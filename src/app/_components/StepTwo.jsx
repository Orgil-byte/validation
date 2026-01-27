"use client";

import DefaultLogo from "./DefaultLogo";
import UserInputs from "./UserInputs";
import ContinueButton from "./ContinueButton";
import BackButton from "./BackButton";
import {
  isEmpty,
  isEmail,
  isPhone,
  isPasswordSix,
  isPasswordHasLetter,
  isPasswordHasNum,
} from "../_utils/validation";
import { useState } from "react";

const StepTwo = ({ id, formData, setFormData, handlePrev, setStep }) => {
  const { email, phoneNumber, password, confirmPassword } = formData;

  const [errorChanges, setErrorChanges] = useState();

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const formValidation = () => {
    const newError = {};

    if (isEmpty(email)) {
      newError.email = "Мэйл хаягаа оруулна уу";
    } else if (isEmail(email)) {
      newError.email = "Please provide a valid email adress.";
    }

    if (isEmpty(phoneNumber)) {
      newError.phoneNumber = "Утасны дугаараа оруулна уу.";
    } else if (isPhone(phoneNumber)) {
      newError.phoneNumber = "Please enter a valid phone number.";
    }

    if (isEmpty(password)) {
      newError.password = "Нууц үгээ оруулна уу.";
    } else {
      if (isPasswordSix(password)) {
        newError.password = "Password should at least has 6 characters.";
      }
      if (isPasswordHasNum(password)) {
        newError.password = "Password should include numbers.";
      }
      if (isPasswordHasLetter(password)) {
        newError.password = "Password should include letters.";
      }
    }

    if (isEmpty(confirmPassword)) {
      newError.confirmPassword = "Нууц үгээ давтаж оруулна уу.";
    } else if (password !== confirmPassword) {
      newError.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
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
          value={email}
          label={"Email"}
          name={"email"}
          type={"text"}
          placeholder={"Your email"}
          onChange={onChange}
          error={errorChanges?.email}
        />
        <UserInputs
          value={phoneNumber}
          label={"Phone number"}
          name={"phoneNumber"}
          type={"text"}
          placeholder={"Your phone number"}
          onChange={onChange}
          error={errorChanges?.phoneNumber}
        />
        <UserInputs
          value={password}
          label={"Password"}
          name={"password"}
          type={"password"}
          placeholder={"Your password"}
          onChange={onChange}
          error={errorChanges?.password}
        />
        <UserInputs
          value={confirmPassword}
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
          onClick={formValidation}
        />
      </div>
    </div>
  );
};

export default StepTwo;
