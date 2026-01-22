"use client";

import DefaultLogo from "./DefaultLogo";
import UserInputs from "./UserInputs";
import ContinueButton from "./Button";
import { useState } from "react";

const Container = () => {
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

    if (!formData.firstName) {
      newError.firstName = "Нэрээ оруулна уу.";
    }
    if (!formData.lastName) {
      newError.lastName = "Овгоо оруулна уу.";
    }
    if (!formData.userName) {
      newError.userName = "Хэрэглэгчийн нэрээ оруулна уу.";
    }
    setErrorChanges(newError);

    return Object.keys(newError).length === 0;
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
          error={errorChanges}
        />
        <UserInputs
          label={"Last name"}
          name={"lastName"}
          type={"text"}
          placeholder={"Your last name"}
          onChange={onChange}
          error={errorChanges}
        />
        <UserInputs
          label={"Username"}
          name={"userName"}
          type={"text"}
          placeholder={"Your username"}
          onChange={onChange}
          error={errorChanges}
        />
      </div>
      <ContinueButton
        text="Continue"
        pageNum={"1/3"}
        onClick={formValidation}
      />
    </div>
  );
};

export default Container;
