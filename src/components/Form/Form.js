import React from "react";
import { useSelector } from "react-redux";
import FormInput from "../FormInput";
import useForm from "../../utils/useForm";
//import Button from '../Button';
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";
import { generateRandom } from "../../utils/validator";

export default function Form({ formType, onEsc }) {
  const { type, id } = formType;
  const buildings = useSelector((state) => state.buildings);
  const findBuilding = buildings.find((e) => e.id === id);
  const getAllID = buildings.map((e) => e.id);
  const data2 = {
    id: generateRandom(getAllID),
    name: "",
    area: "",
    location: "",
    image: "",
  };
  const data = type === "add" ? data2 : findBuilding;

  const { values, errors, handleChange, handleSubmit } = useForm(data, type);

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
