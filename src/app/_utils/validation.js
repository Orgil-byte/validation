export const isEmpty = (value) => !value.trim();
export const isEmptyImage = (value) => !value;

export const isLetter = (value) => {
  const lettersOnlyRegex = /^[a-zA-Z]+$/;
  return !lettersOnlyRegex.test(value);
};

export const isEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(value);
};

export const isPhone = (value) => {
  const phoneNumberRegex = /^\+?\d{8}$/;
  return !phoneNumberRegex.test(value);
};

export const isPasswordSix = (value) => {
  const passwordRegex = /[A-Za-z\d]{6,}/;
  return !passwordRegex.test(value);
};

export const isPasswordHasNum = (value) => {
  const passwordNum = /(?=.*\d)/;
  return !passwordNum.test(value);
};

export const isPasswordHasLetter = (value) => {
  const passwordLetter = /[a-zA-Z]/;
  return !passwordLetter.test(value);
};

export const isEmptyObj = (object) => Object.keys(object).length === 0;
