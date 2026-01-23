import DefaultLogo from "./DefaultLogo";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const ValidationPage = () => {
  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
      <StepOne id={1} />
      <StepTwo id={2} />
      <StepThree id={3} />
      <DefaultLogo
        textLogo={"You're All Set"}
        textResponse={"We've received your submission. Thank you!"}
      />
    </div>
  );
};

export default ValidationPage;
