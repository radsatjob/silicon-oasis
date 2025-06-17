import React from "react";
import styles from "./index.module.css";

const tools = [
  { name: "Swagger", description: "API documentation & testing" },
  { name: "Postman", description: "API development environment" },
  { name: "Insomnia", description: "REST client with GraphQL support" },
  { name: "VS Code", description: "Code editor with great extensions" },
  { name: "GitHub", description: "Version control & collaboration" },
  { name: "Docker", description: "Containerization platform" },
];

export default function DeveloperTools() {
  return (
    <section className={styles["developer-tools-grid"]}>
      {tools.map(({ name, description }) => (
        <div key={name} className={styles["tool-card"]}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
}
