"use client";

import { motion, AnimatePresence } from "framer-motion";
import useFormManagement from "../hooks/useMain";

import DefaultLogo from "./DefaultLogo";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const steps = [StepOne, StepTwo, StepThree, DefaultLogo];

const FormValidation = () => {
  const {
    formData,
    setFormData,
    step,
    setStep,
    handlePrev,
    onChange,
    errorChanges,
    setErrorChanges,
  } = useFormManagement();

  const Step = steps[step];

  return (
    <div>
      <FormWrapper>
        <Step
          id={step + 1}
          formData={formData}
          setFormData={setFormData}
          handlePrev={handlePrev}
          setStep={setStep}
          onChange={onChange}
          errorChanges={errorChanges}
          setErrorChanges={setErrorChanges}
        />
      </FormWrapper>
    </div>
  );
};

export default FormValidation;

const FormWrapper = ({ children }) => {
  const { step } = useFormManagement();

  const framerMotionAnimate = {
    intial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };
  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          variants={framerMotionAnimate}
          intial="intial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {children}
        </motion.div>
        {/* <motion.div
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
        </motion.div> */}
      </AnimatePresence>
    </div>
  );
};
