import React from "react";
import { Link } from "react-router-dom";
import buildings from "../../assets/buildings.png";
import Overlay from "../../components/Overlay";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <img className={styles.Home__img} src={buildings} alt="buildings" />
      <Overlay />
      <Link to="/buildings" className={styles.HeadingContainer}>
        <h1 className={styles.HeadingContainer__heading}>Buildings</h1>
        <p className={styles.HeadingContainer__text}>
          Click here to see the best buildings in town !
        </p>
      </Link>
    </div>
  );
}
