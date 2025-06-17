import React from "react";
import styles from "./index.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles["hero-title"]}>
        Welcome to Your Gradient Animated Title
      </h1>
      {/* You can add parallax background or scroll effect here */}
    </section>
  );
}