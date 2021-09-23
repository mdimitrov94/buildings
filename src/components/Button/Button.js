import React from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";

export default function Button({ text, onClick, color }) {
  return (
    <button
      className={classnames(styles.Button, styles[`Button--${color}`])}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
