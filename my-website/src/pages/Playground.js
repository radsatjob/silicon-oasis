import React, { useState } from "react";
import styles from "./index.module.css";

// Placeholder for Monaco Editor; replace with actual Monaco component later
function MonacoEditor({ language, value }) {
  return (
    <pre
      style={{
        background: "#1e1e1e",
        color: "#d4d4d4",
        padding: "1rem",
        fontFamily: "monospace",
        minHeight: "250px",
        overflowX: "auto",
      }}
    >
      {`// ${language} code editor placeholder\n${value}`}
    </pre>
  );
}

const tabs = [
  { id: "curl", label: "cURL", language: "bash", sampleCode: `curl https://api.example.com` },
  { id: "js", label: "JavaScript", language: "javascript", sampleCode: `fetch('/api').then(res => res.json()).then(console.log);` },
  { id: "python", label: "Python", language: "python", sampleCode: `import requests\nresponse = requests.get('https://api.example.com')\nprint(response.json())` },
  { id: "go", label: "Go", language: "go", sampleCode: `package main\nimport (\n\t"fmt"\n\t"net/http"\n)\nfunc main() {\n\tresp, _ := http.Get("https://api.example.com")\n\tfmt.Println(resp.Status)\n}` },
];

export default function Playground() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className={styles.playground}>
      <nav className={styles["playground-tabs"]}>
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            className={`${styles["playground-tab"]} ${
              id === activeTab ? styles.active : ""
            }`}
            onClick={() => setActiveTab(id)}
          >
            {label}
          </button>
        ))}
      </nav>
      <MonacoEditor language={currentTab.language} value={currentTab.sampleCode} />
    </div>
  );
}
