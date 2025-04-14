import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Docusaurus"
      description="Easy-to-use, highly customizable static site generator">
      <main>
        {/* Heading above the banner */}
        <div className={styles.pageHeading}>
          <h1>
            🚀 Welcome to Our Documentation 📚
          </h1>
        </div>

        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Build Docs Like a Pro</h1>
            <p className={styles.heroSubtitle}>
              Docusaurus is a modern static website generator for documentation.
            </p>
            <a href="https://docusaurus.io/docs" className={styles.ctaButton}>Get Started</a>
          </div>
          {/* Add the animated gif here */}
          <div className={styles.gifWrapper}>
            <img
              src="/img/animated.gif"  // Path to the animated GIF in the static folder
              alt="Animated Banner"
              className={styles.animatedGif}
            />
          </div>
        </div>

        {/* Features Section */}
        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>Why Choose Docusaurus?</h2>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <h3>Easy to Use</h3>
              <p>Quick setup with minimal configuration.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Highly Customizable</h3>
              <p>Tailor your website to match your brand.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Versioning</h3>
              <p>Manage multiple versions of your docs with ease.</p>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Build Your Docs?</h2>
          <a href="https://docusaurus.io/docs" className={styles.ctaButton}>Start Now</a>
        </section>
      </main>
    </Layout>
  );
}
