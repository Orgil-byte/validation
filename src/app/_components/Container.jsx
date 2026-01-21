"use client";

import DefaultLogo from "./DefaultLogo";
import UserInputs from "./UserInputs";
import ContinueButton from "./Button";
import { useState } from "react";

const Container = () => {
  //UseState-uud
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [renderInput, setRenderInput] = useState([]);

  const [errorText, setErrorText] = useState("");
  //
  const getFirstName = (e) => {
    return setFirstName(e.target.value);
  };
  const getLastName = (e) => {
    return setLastName(e.target.value);
  };
  const getUserName = (e) => {
    return setUserName(e.target.value);
  };
  //
  const validatingName = (value, name) => {
    const stringValue = toString(value);
    if (stringValue.trim() === "") {
      if (name === firstName) {
        return setErrorText("Нэрээ оруулна уу");
      }
      if (name === lastName) {
        return setErrorText("Овгоо оруулна уу.");
      }
      if (name === userName) {
        return setErrorText("Хэрэглэгчийн нэрээ оруулна уу");
      }
    } else {
      if (stringValue.split().includes(Number)) {
        return setError(
          `${firstName.split(" ")} cannot contain special characters or numbers`,
        );
      }
    }
  };
  //
  const save = () => {
    const task = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
    };
    setRenderInput([...renderInput, task]);
  };
  console.log(renderInput);
  return (
    <div className="flex flex-col w-120 h-163.75 bg-white rounded-lg p-8">
      <DefaultLogo />
      <div className="flex flex-col grow gap-3">
        <UserInputs
          label={"First name"}
          name={"firstName"}
          type={"text"}
          placeholder={"Your first name"}
          getInput={getFirstName}
          onBlur={validatingName(getFirstName, firstName)}
          error={errorText}
        />
        <UserInputs
          label={"Last name"}
          name={"lastName"}
          type={"text"}
          placeholder={"Your last name"}
          getInput={getLastName}
          onBlur={validatingName}
          error={errorText}
        />
        <UserInputs
          label={"Username"}
          name={"userName"}
          type={"text"}
          placeholder={"Your username"}
          getInput={getUserName}
          onBlur={validatingName}
          error={errorText}
        />
      </div>
      <ContinueButton text="Continue" pageNum={"1/3"} onClick={save} />
    </div>
  );
};

export default Container;
