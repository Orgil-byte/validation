"use client";
import { useState } from "react";

const useFormManagement = () => {
  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrorChanges({ ...errorChanges, [event.target.name]: "" });
  };

  const [errorChanges, setErrorChanges] = useState();

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

  const [step, setStep] = useState(2);

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const framerMotionAnimate = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };
  return {
    formData,
    setFormData,
    step,
    setStep,
    handlePrev,
    onChange,
    errorChanges,
    setErrorChanges,
    framerMotionAnimate,
  };
};

export default useFormManagement;
