import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout
      title="Docusaurus"
      description="Easy-to-use, highly customizable static site generator"
    >
      <main>
        {/* Page Heading */}
        <div className={styles.pageHeading}>
          <h1>🎉 Welcome to My Site ✨</h1>
        </div>

        {/* Hero Section */}
        <header className={styles.heroBanner}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>Built Docs Like a Pro!</h1>
                <p className={styles.heroSubtitle}>
                  A culmination of expertise and interest!
                </p>
                <a
                  href="https://github.com/radsatjob/silicon-oasis"
                  className={styles.ctaButton}
                >
                  Get Started
                </a>
              </div>
              <div className={styles.heroImage}>
                <img
                  src={useBaseUrl('/img/animated.gif')}
                  alt="Hero Illustration"
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>About Me</h2>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <h3>Easy to Work with</h3>
              <p>Quick setup with minimal configuration.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Highly Passionate</h3>
              <p>Tailor your website to match your brand.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Going Beyond</h3>
              <p>Manage multiple versions of your docs with ease.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Build Your Docs?</h2>
          <a href="https://google.com" className={styles.ctaButton}>
            Start Now
          </a>
        </section>
      </main>
    </Layout>
  );
}
