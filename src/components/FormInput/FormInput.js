import React from "react";
import styles from "./FormInput.module.scss";

export default function FormInput({
  value,
  onChange,
  name,
  error,
  placeholder,
  type
}) {
  return (
    <div className={styles.FormInput}>
      <input
        type={type}
        style={{ borderColor: error && "red" }}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
      {error && <p className={styles.FormInput__text}>{error}</p>}
    </div>
  );
}
