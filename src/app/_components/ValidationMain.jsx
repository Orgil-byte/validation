import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const ValidationPage = () => {
  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
      <StepOne id={1} />
      <StepTwo id={2} />
    </div>
  );
};

export default ValidationPage;
