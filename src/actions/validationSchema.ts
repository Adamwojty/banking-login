import * as yup from "yup";
enum Fields {
  EMAIL = "email",
  PASSWORD = "password",
  PASSWORD_CONFIRMATION = "passwordConfirmation",
}
enum ErrorMessages {
  WRONG_EMAIL = "enter correct email",
  REQUIRED_EMAIL = "enter email",
  REQUIRED_PASSWORD = "enter password",
  MIN_LENGHT_PASSWORD = "password should be min 8 characters",
  MAX_LENGHT_PASSWORD = "password should be max 20 characters",
  SAME_PASSWORD = "passwords should't be different",
}

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label(Fields.EMAIL)
    .email(ErrorMessages.WRONG_EMAIL)
    .required(ErrorMessages.REQUIRED_EMAIL)
    .max(255),
  password: yup
    .string()
    .label(Fields.PASSWORD)
    .min(8, ErrorMessages.MIN_LENGHT_PASSWORD)
    .max(255)
    .required(ErrorMessages.REQUIRED_PASSWORD),
  passwordConfirmation: yup
    .string()
    .label(Fields.PASSWORD_CONFIRMATION)
    .min(8, ErrorMessages.MIN_LENGHT_PASSWORD)
    .max(255)
    .oneOf([yup.ref(Fields.PASSWORD)], ErrorMessages.SAME_PASSWORD)
    .required(ErrorMessages.REQUIRED_PASSWORD),
});
