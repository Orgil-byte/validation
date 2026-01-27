"use client";
import { useState } from "react";

const Logics = () => {
  const framerMotionAnimate = {
    intial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

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

  const [step, setStep] = useState(1);

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return {
    formData,
    setFormData,
    step,
    setStep,
    handlePrev,
    framerMotionAnimate,
  };
};

export default Logics;
