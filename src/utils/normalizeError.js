export const normalizeError = (payload) => {
  let errors = {};

  payload.errors.forEach((error) => {
    // jika error berasal dari body
    if (error.param) {
      errors[error.param] = error.msg;
    }

    // jika error berasal dari hal lain
    else {
      errors["other"] = error.msg;
    }
  });

  return errors;
};
