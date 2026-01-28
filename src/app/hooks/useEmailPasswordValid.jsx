import {
  isEmpty,
  isEmail,
  isEmptyObj,
  isPhone,
  isPasswordSix,
  isPasswordHasLetter,
  isPasswordHasNum,
} from "../_utils/validation";

const useEmailPassValid = (formData) => {
  const { email, phoneNumber, password, confirmPassword } = formData;
  const newError = {};

  if (isEmpty(email)) {
    newError.email = "Мэйл хаягаа оруулна уу";
  } else if (isEmail(email)) {
    newError.email = "Please provide a valid email adress.";
  }

  if (isEmpty(phoneNumber)) {
    newError.phoneNumber = "Утасны дугаараа оруулна уу.";
  } else if (isPhone(phoneNumber)) {
    newError.phoneNumber = "Please enter a valid phone number.";
  }

  if (isEmpty(password)) {
    newError.password = "Нууц үгээ оруулна уу.";
  } else {
    if (isPasswordSix(password)) {
      newError.password = "Password should at least has 6 characters.";
    }
    if (isPasswordHasNum(password)) {
      newError.password = "Password should include numbers.";
    }
    if (isPasswordHasLetter(password)) {
      newError.password = "Password should include letters.";
    }
  }

  if (isEmpty(confirmPassword)) {
    newError.confirmPassword = "Нууц үгээ давтаж оруулна уу.";
  } else if (password !== confirmPassword) {
    newError.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
  }
  const isValid = isEmptyObj(newError);

  return {
    isValid,
    newError,
  };
};

export default useEmailPassValid;
