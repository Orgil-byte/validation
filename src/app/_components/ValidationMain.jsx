"use client";

import { motion, AnimatePresence } from "framer-motion";
import Logics from "../hooks/useMain";

import DefaultLogo from "./DefaultLogo";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const ValidationPage = () => {
  const {
    formData,
    setFormData,
    step,
    setStep,
    handlePrev,
    framerMotionAnimate,
  } = Logics();

  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key={step}
            variants={framerMotionAnimate}
            intial="intial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <StepOne
              id={1}
              formData={formData}
              setFormData={setFormData}
              handlePrev={handlePrev}
              setStep={setStep}
            />
          </motion.div>
        ) : step === 2 ? (
          <motion.div
            key={step}
            variants={framerMotionAnimate}
            intial="intial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <StepTwo
              id={2}
              formData={formData}
              setFormData={setFormData}
              setStep={setStep}
              handlePrev={handlePrev}
            />
          </motion.div>
        ) : step === 3 ? (
          <motion.div
            key={step}
            variants={framerMotionAnimate}
            intial="intial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <StepThree
              id={3}
              formData={formData}
              setFormData={setFormData}
              handlePrev={handlePrev}
              setStep={setStep}
            />
          </motion.div>
        ) : step === 4 ? (
          <motion.div
            key={step}
            variants={framerMotionAnimate}
            intial="intial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <DefaultLogo
              padding={"p-8 w-120 rounded-lg"}
              textLogo={"You're All Set 🔥"}
              textResponse={"We've received your submission. Thank you!"}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ValidationPage;
