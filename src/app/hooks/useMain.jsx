"use client";
import { useState } from "react";

const useFormManagement = () => {
  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
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

  const [step, setStep] = useState(0);

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const framerMotionAnimate = {
    intial: { x: "100%", opacity: 0 },
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
