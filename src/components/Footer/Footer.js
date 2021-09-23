import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export default function Footer() {
  const links = [
    { page: "Home", url: "/" },
    { page: "Buildings", url: "/buildings" },
  ];
  return (
    <footer className={styles.Footer}>
      <ul className={styles.Footer__linkList}>
        {links.map((e, i) => {
          return (
            <li key={i} className={styles.Footer__listItem}>
              <Link to={e.url} className={styles.Footer__listLink}>
                {e.page}
              </Link>
            </li>
          );
        })}
      </ul>
      <p>The Buildings app</p>
    </footer>
  );
}
