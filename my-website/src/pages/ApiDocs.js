import React, { useState } from "react";
import styles from "./index.module.css";

const endpoints = [
  {
    method: "GET",
    path: "/users",
    description: "Retrieve a list of all users.",
    example: `curl -X GET https://api.example.com/users`,
  },
  {
    method: "POST",
    path: "/users",
    description: "Create a new user.",
    example: `curl -X POST https://api.example.com/users \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Doe", "email": "john@example.com"}'`,
  },
  {
    method: "GET",
    path: "/users/{id}",
    description: "Retrieve a user by their ID.",
    example: `curl -X GET https://api.example.com/users/123`,
  },
];

export default function ApiDocs() {
  const [copySuccess, setCopySuccess] = useState(null);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(null), 2000);
    } catch {
      setCopySuccess("Failed to copy");
      setTimeout(() => setCopySuccess(null), 2000);
    }
  };

  return (
    <section className={styles["api-docs"]}>
      <h2>API Documentation</h2>
      {endpoints.map(({ method, path, description, example }) => (
        <div key={`${method}-${path}`} className={styles["api-endpoint"]}>
          <div className={styles["api-endpoint-header"]}>
            <span>
              <strong>{method}</strong> {path}
            </span>
            <button
              className={styles["copy-button"]}
              onClick={() => handleCopy(example)}
              aria-label={`Copy example for ${method} ${path}`}
            >
              Copy
            </button>
          </div>
          <div className={styles["api-description"]}>
            <p>{description}</p>
            <pre style={{ fontFamily: "monospace", whiteSpace: "pre-wrap" }}>
              {example}
            </pre>
          </div>
        </div>
      ))}
      {copySuccess && (
        <div
          style={{
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            background: "#4ade80",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          }}
        >
          {copySuccess}
        </div>
      )}
    </section>
  );
}
