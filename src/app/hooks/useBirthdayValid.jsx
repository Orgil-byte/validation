import { isEmpty, isEmptyImage, isEmptyObj } from "../_utils/validation";

const useBirthdayValid = (formData) => {
  const { birthday, image } = formData;

  const dateObject = new Date(formData.birthday);
  const currentDate = new Date();
  let ageYear = currentDate.getFullYear() - dateObject.getFullYear();
  let ageMonth = currentDate.getMonth() - dateObject.getMonth();
  let ageDay = currentDate.getDay() - dateObject.getDay();

  const newError = {};
  console.log("This is user info", formData);

  if (isEmpty(birthday)) {
    newError.birthday = "Төрсөн өдрөө оруулна уу";
  } else {
    if (dateObject > currentDate) {
      newError.birthday = "Төрсөн өдөр одоогийн огнооноос өмнө байх ёстой.";
    }
    if (ageYear < 18) {
      newError.birthday = "Та 18 ба түүнээс дээш настай байх ёстой.";
    }
    if (ageYear === 18 && ageMonth < 0) {
      newError.birthday = "Та 18 ба түүнээс дээш настай байх ёстой.";
    }
    if (ageYear === 18 && ageMonth === 0 && ageDay < 0) {
      newError.birthday = "Та 18 ба түүнээс дээш настай байх ёстой.";
    }
  }

  if (isEmptyImage(image)) {
    newError.image = "Профайл зурагаа оруулна уу";
  }
  const isValid = isEmptyObj(newError);

  return { isValid, newError };
};

export default useBirthdayValid;
