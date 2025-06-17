import React from "react";
import styles from "./index.module.css";

const testimonials = [
  {
    quote: "This platform transformed how we interact with APIs — super intuitive and fast!",
    author: "Alex R.",
  },
  {
    quote: "The community support and tools make development a breeze.",
    author: "Maya T.",
  },
  {
    quote: "Reliable, fast, and full of useful integrations.",
    author: "Jamal K.",
  },
];

const stats = [
  { label: "Active Users", value: "12,345" },
  { label: "APIs Integrated", value: "432" },
  { label: "Community Posts", value: "1,234" },
];

const socialProofIcons = [
  { name: "GitHub", url: "https://github.com", svg: <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.45 7.9 10.98.58.1.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.22.7-3.9-1.55-3.9-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.96.1-.75.4-1.26.72-1.55-2.57-.3-5.27-1.28-5.27-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.16 0 0 .98-.32 3.2 1.18a11.1 11.1 0 012.92-.4c.99 0 2 .13 2.92.4 2.2-1.5 3.18-1.18 3.18-1.18.65 1.64.25 2.86.12 3.16.75.8 1.2 1.85 1.2 3.11 0 4.43-2.7 5.4-5.28 5.7.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.2.67.8.56A10.52 10.52 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z"/></svg> },
  { name: "Twitter", url: "https://twitter.com", svg: <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.724c-.95.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.67 3.15a4.822 4.822 0 001.524 6.574 4.9 4.9 0 01-2.229-.616v.06a4.922 4.922 0 003.946 4.827 4.996 4.996 0 01-2.224.085 4.936 4.936 0 004.6 3.417 9.867 9.867 0 01-6.1 2.105c-.396 0-.79-.023-1.175-.069a13.945 13.945 0 007.548 2.213c9.056 0 14.004-7.496 14.004-13.986 0-.21 0-.423-.015-.633A10.012 10.012 0 0024 4.59z"/></svg> },
  { name: "LinkedIn", url: "https://linkedin.com", svg: <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.27h-3v-5.5c0-1.32-.03-3.01-1.83-3.01-1.83 0-2.11 1.43-2.11 2.91v5.6h-3v-10h2.88v1.37h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58v5.59z"/></svg> },
];

export default function CommunityHub() {
  return (
    <section className={styles["community-hub"]}>
      <h2>What Our Community Says</h2>
      {testimonials.map(({ quote, author }, i) => (
        <blockquote key={i} className={styles.testimonial}>
          “{quote}” — <strong>{author}</strong>
        </blockquote>
      ))}
      <div className={styles.stats}>
        {stats.map(({ label, value }) => (
          <div key={label}>
            <div style={{ fontSize: "2rem", color: "#4ade80" }}>{value}</div>
            <div>{label}</div>
          </div>
        ))}
      </div>
      <div className={styles["social-proof-icons"]}>
        {socialProofIcons.map(({ name, url, svg }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            style={{ color: "#333" }}
          >
            {svg}
          </a>
        ))}
      </div>
    </section>
  );
}
