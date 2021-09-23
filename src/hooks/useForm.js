import { useState } from "react";

const useForm = (data, validate) => {
  const [values, setValues] = useState(data);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setSubmit(true);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    submit,
  };
};

export default useForm;
