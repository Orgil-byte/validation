"use client";

import useFormManagement from "../hooks/useMain";

import SuccessText from "./SuccessText";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import FormWrapper from "./FormWrapper";
const steps = [StepOne, StepTwo, StepThree, SuccessText];

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
      <FormWrapper step={step}>
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
