"use client";

import DefaultLogo from "./DefaultLogo";
import UserInputs from "./UserInputs";
import ContinueButton from "./Button";
import { useState } from "react";

const Container = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [renderInput, setRenderInput] = useState([]);
  const [errorText, setErrorText] = useState();
  const [errorOutline, setErrorOutline] = useState("outline-[#cbd5e1]");

  const getFirstName = (e) => {
    return setFirstName(e.target.value);
  };
  const getLastName = (e) => {
    return setLastName(e.target.value);
  };
  const getUserName = (e) => {
    return setUserName(e.target.value);
  };
  const save = () => {
    firstName === ""
      ? setErrorOutline("outline-red-500")
      : setErrorOutline("outline-[#cbd5e1]");
    firstName === "" ? setErrorText("bwcwecyebc") : setErrorText("");

    const task = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
    };
    console.log(errorOutline);
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
          errorText={errorText}
          errorOutline={errorOutline}
        />
        <UserInputs
          label={"Last name"}
          name={"lastName"}
          type={"text"}
          placeholder={"Your last name"}
          getInput={getLastName}
          errorText={errorText}
          errorOutline={errorOutline}
        />
        <UserInputs
          label={"Username"}
          name={"userName"}
          type={"text"}
          placeholder={"Your username"}
          getInput={getUserName}
          errorText={errorText}
          errorOutline={errorOutline}
        />
      </div>
      <ContinueButton text="Continue" pageNum={"1/3"} onClick={save} />
    </div>
  );
};

export default Container;
