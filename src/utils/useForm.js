import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions as buildingActions } from "../store/Buildings/actions";
import { actions as modalActions } from "../store/Modal/actions";
import { validate } from "./validator";

const useForm = (data, type) => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (!Object.entries(errors).length && submit) {
      if (type === "add") {
        dispatch(buildingActions.addBuilding(values));
      } else {
        dispatch(buildingActions.editBuilding(values));
      }
      dispatch(modalActions.closeModal());
    }
  }, [errors, values, dispatch, submit, type]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
