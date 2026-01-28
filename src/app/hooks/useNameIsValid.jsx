import { isEmpty, isLetter, isEmptyObj } from "../_utils/validation";

const useNameValid = (formData) => {
  const { firstName, lastName, userName } = formData;
  const newError = {};

  if (isEmpty(firstName)) {
    newError.firstName = "Нэрээ оруулна уу.";
  } else if (isLetter(firstName)) {
    newError.firstName =
      "First name cannot contain special characters or numbers.";
  }

  if (isEmpty(lastName)) {
    newError.lastName = "Овгоо оруулна уу.";
  } else if (isLetter(lastName)) {
    newError.lastName =
      "Last name cannot contain special characters or numbers.";
  }

  if (isEmpty(userName)) {
    newError.userName = "Хэрэглэгчийн нэрээ оруулна уу.";
  }

  const isValid = isEmptyObj(newError);

  return {
    isValid,
    newError,
  };
};

export default useNameValid;
