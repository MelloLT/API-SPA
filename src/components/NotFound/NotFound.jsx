import React from "react";
import { Link } from "react-router-dom";
import styles from "/src/components/NotFound/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <div className={styles.back}>
        <Link to="/">Go Back to Homepage</Link>
      </div>{" "}
    </div>
  );
}
