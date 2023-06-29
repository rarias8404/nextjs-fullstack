import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <div className={styles.container}>{text}</div>
    </Link>
  );
};

export default Button;
