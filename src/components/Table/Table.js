import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./Table.module.scss";

export default function Table({ data, columns, onClick, handleEdit }) {
  const setData = data.map((e) => {
    const id = e.id;
    const format = Object.entries(e);
    return (
      <tr key={e.id}>
        {format.map(([key, value], i) => {
          if (key !== "image") {
            return <td key={i}>{value}</td>;
          } else {
            return (
              <td key={i}>
                <div
                  style={{ backgroundImage: `url(${value})` }}
                  className={styles.Table__image}
                ></div>
              </td>
            );
          }
        })}
        <td>
          <IconButton color="error" onClick={() => onClick(id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton color="info" onClick={() => handleEdit(id)}>
            <EditIcon />
          </IconButton>
        </td>
      </tr>
    );
  });
  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          {columns.map((e, i) => (
            <th key={i}>{e}</th>
          ))}
        </tr>
      </thead>
      <tbody>{setData}</tbody>
    </table>
  );
}
