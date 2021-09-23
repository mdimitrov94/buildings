import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Header from "../../components/Header";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import Spinner from "../../components/Spinner";
import { actions as buildingActions } from "../../store/Buildings/actions";
import { actions as modalActions } from "../../store/Modal/actions";
import Form from "../../components/Form";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import styles from "./Buildings.module.scss";

export default function Buildings() {
  const dispatch = useDispatch();
  const buildings = useSelector((state) => state.buildings);
  const modal = useSelector((state) => state.modal);
  const [formType, setformType] = useState({});
  const [spinner, setSpinner] = useState(false);
  const columns = ["id", "Name", "Area", "location", "image", "Action"];

  useEffect(() => {
    axios
      .get("data.json")
      .then(({ data }) => {
        setSpinner(true);
        setTimeout(() => {
          dispatch(buildingActions.setBuildings(data));
          setSpinner(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(buildingActions.deleteBuilding(id));
  };

  const handleEdit = (id) => {
    setformType({ type: "edit", id });
    dispatch(modalActions.openModal());
  };

  const handleAdd = () => {
    setformType({ type: "add" });
    dispatch(modalActions.openModal());
  };

  return (
    <div>
      <Header />
      {spinner ? (
        <Spinner />
      ) : (
        <div className={styles.Buildings__tableWrapper}>
          <Grid container justifyContent="flex-end">
            <Button
              onClick={handleAdd}
              style={{ marginBottom: "5px" }}
              variant="outlined"
            >
              Add new bulding
            </Button>
          </Grid>
          <Table
            columns={columns}
            data={buildings}
            onClick={handleDelete}
            handleEdit={handleEdit}
            handleAdd={handleAdd}
          />
        </div>
      )}
      {modal && (
        <Modal onEsc={() => dispatch(modalActions.closeModal())}>
          <Form
            formType={formType}
            data={buildings}
            onEsc={() => dispatch(modalActions.closeModal())}
          />
        </Modal>
      )}
    </div>
  );
}
