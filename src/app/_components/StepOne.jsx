"use client";

import DefaultLogo from "./DefaultLogo";
import UserInputs from "./UserInputs";
import ContinueButton from "./ContinueButton";
import { useState } from "react";

const StepOne = ({ id }) => {
  const lettersOnlyRegex = /^[a-zA-Z]+$/;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [errorChanges, setErrorChanges] = useState();

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const formValidation = () => {
    const newError = {};

    if (!formData.firstName.trim()) {
      newError.firstName = "Нэрээ оруулна уу.";
    } else if (!lettersOnlyRegex.test(formData.firstName)) {
      newError.firstName =
        "First name cannot contain special characters or numbers.";
    }

    if (!formData.lastName.trim()) {
      newError.lastName = "Овгоо оруулна уу.";
    } else if (!lettersOnlyRegex.test(formData.lastName)) {
      newError.lastName =
        "Last name cannot contain special characters or numbers.";
    }

    if (!formData.userName.trim()) {
      newError.userName = "Хэрэглэгчийн нэрээ оруулна уу.";
    }
    setErrorChanges(newError);
    console.log("This is the user infos", formData);
  };

  return (
    <div className="flex flex-col w-120 h-163.75 bg-white rounded-lg p-8">
      <DefaultLogo />
      <div className="flex flex-col grow gap-3">
        <UserInputs
          label={"First name"}
          name={"firstName"}
          type={"text"}
          placeholder={"Your first name"}
          onChange={onChange}
          error={errorChanges?.firstName}
        />
        <UserInputs
          label={"Last name"}
          name={"lastName"}
          type={"text"}
          placeholder={"Your last name"}
          onChange={onChange}
          error={errorChanges?.lastName}
        />
        <UserInputs
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
