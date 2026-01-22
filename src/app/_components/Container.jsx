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

  const [error, setError] = useState();
  const [firstErrorClass, setFirstErrorClass] = useState({
    class: "outline-red-500",
    text: "",
  });
  const [lastErrorClass, setLastErrorClass] = useState({
    class: "outline-red-500",
    text: "",
  });
  const [userErrorClass, setUserErrorClass] = useState({
    class: "outline-red-500",
    text: "",
  });

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  console.log("formData", formData);
  console.log("=============================");

  const formValidation = () => {
    const isValid = {};

    if (!formData.firstName) {
      isValid.firstName = true;
      setFirstErrorClass({
        cla,
      });
    } else {
      isValid.firstName = false;
    }
    if (!formData.lastName) {
      isValid.lastName = true;
    } else {
      isValid.lastName = false;
    }
    if (!formData.userName) {
      isValid.userName = true;
    } else {
      isValid.userName = false;
    }
    setError(isValid);
  };

  console.log("error", error);

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
          // error={error.errorText}
          // errorClass={error.class}
        />
        <UserInputs
          label={"Last name"}
          name={"lastName"}
          type={"text"}
          placeholder={"Your last name"}
          onChange={onChange}
          // error={error.errorText}
          // errorClass={error.class}
        />
        <UserInputs
          label={"Username"}
          name={"userName"}
          type={"text"}
          placeholder={"Your username"}
          onChange={onChange}
          // error={error.errorText}
          // errorClass={error.class}
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
