export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Field is required";
  }
  if (!values.area) {
    errors.area = "Field is required";
  }
  if (!values.location) {
    errors.location = "Field is required";
  }
  if (!values.image.includes("https")) {
    errors.image = "Invalid link";
  }
  return errors;
};

export const generateRandom = (arr) => {
  const id = Math.floor(Math.random() * 100);
  return arr.includes(id) ? generateRandom(arr) : id;
};
