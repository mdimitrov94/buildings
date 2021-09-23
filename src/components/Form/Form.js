import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as buildingActions } from "../../store/Buildings/actions";
import { actions as modalActions } from "../../store/Modal/actions";
import FormInput from "../FormInput";
import useForm from "../../hooks/useForm";
//import Button from '../Button';
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";
import { generateRandom } from "../../utils/helper";
import { validate } from "../../utils/helper";

export default function Form({ formType, onEsc }) {
  const dispatch = useDispatch();
  const { type, id } = formType;
  const buildings = useSelector((state) => state.buildings);
  const findBuilding = buildings.find((e) => e.id === id);
  const getBuildingsID = buildings.map((e) => e.id);

  const defaultData = {
    id: generateRandom(getBuildingsID),
    name: "",
    area: "",
    location: "",
    image: "",
  };

  const data = type === "add" ? defaultData : findBuilding;

  const { values, errors, handleChange, handleSubmit, submit } = useForm(
    data,
    validate
  );

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

  return (
    <form>
      <FormInput
        value={values.name}
        error={errors.name}
        placeholder="Name"
        name="name"
        type="text"
        onChange={handleChange}
      />
      <FormInput
        value={values.area}
        error={errors.area}
        placeholder="Area"
        name="area"
        type="number"
        onChange={handleChange}
      />
      <FormInput
        value={values.location}
        error={errors.location}
        placeholder="Location"
        name="location"
        type="number"
        onChange={handleChange}
      />
      <FormInput
        value={values.image}
        error={errors.image}
        placeholder="Image"
        name="image"
        type="text"
        onChange={handleChange}
      />
      <Grid container justifyContent="space-between">
        <Grid item xs={5}>
          {type === "add" ? (
            <Button
              variant="contained"
              color="info"
              fullWidth={true}
              onClick={handleSubmit}
            >
              Add
            </Button>
          ) : (
            <Button
              variant="contained"
              color="info"
              fullWidth={true}
              onClick={handleSubmit}
            >
              Edit
            </Button>
          )}
        </Grid>
        <Grid item xs={5}>
          <Button
            variant="contained"
            color="error"
            fullWidth={true}
            onClick={onEsc}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
