import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Grid, Container } from '@mui/material';
import RecipeReviewCard from '/src/components/RecipeReviewCard';
import Footer from '../components/Footer';
import HorizontalAutoScrollCarousel from '/src/components/HorizontalAutoScrollCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divider from '../components/Divider';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      label: "Peers",
      text:
        "“I always struggled with documentation until I saw how clean and helpful this was. It’s like having a teammate who writes for you.”",
      author: "Aisha R.",
      role: "Peer Engineer",
      colorClass: styles.cardPurple,
    },
    {
      label: "Developers",
      text:
        "“API references are incredibly easy to follow. It saved me hours during SDK integration.”",
      author: "Devon L.",
      role: "Senior Developer",
      colorClass: styles.cardTeal,
    },
    {
      label: "Managers",
      text:
        "“As a manager, I’ve seen a direct boost in team productivity thanks to the clarity of this documentation.”",
      author: "Priya S.",
      role: "Engineering Manager",
      colorClass: styles.cardOrange,
    },
  ];

  // Determine card position for stacking and visibility
  const getPositionClass = (index) => {
    if (index === activeIndex) return styles.active;
    if (index === activeIndex - 1 || (activeIndex === 0 && index === testimonials.length - 1)) return styles.above;
    if (index === activeIndex + 1 || (activeIndex === testimonials.length - 1 && index === 0)) return styles.below;
    return styles.hidden;
  };

  return (
    <Layout>
      <header className={clsx(styles.heroBanner)}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Documentation,<br />
            why and how much!
          </h1>
          <p className={styles.subtitle}></p>
          <div className={styles.buttons}>
            <a className={clsx('button button--lg', styles.trialButton)} href="#trial">
              Try Me!
            </a>
          </div>
        </div>
      </header>

      <Divider />

      <div>
        <h2 className={styles.subtitle} align="center">
          Worked in Enterprises and Startups
        </h2>
      </div>

      <Container>
        <HorizontalAutoScrollCarousel />
      </Container>

      <main className={styles.main}>
        <Container sx={{ mt: 6, mb: 6 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <RecipeReviewCard
                title="Content Strategy"
                image={useBaseUrl('/img/header-bg.jpg')}
                description="A hearty and comforting stew perfect for cold evenings."
                expandedContent={[
                  "Brown beef chunks in a large pot.",
                  "Add vegetables and simmer with broth for 2 hours",
                  "Season with herbs and serve hot."
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <RecipeReviewCard
                title="API and SDK docs"
                image={useBaseUrl('/img/header-bg.jpg')}
                description="A hearty and comforting stew perfect for cold evenings."
                expandedContent={[
                  "Brown beef chunks in a large pot.",
                  "Add vegetables and simmer with broth for 2 hours.",
                  "Season with herbs and serve hot."
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <RecipeReviewCard
                title="Customer Engagement"
                image={useBaseUrl('/img/header-bg.jpg')}
                description="A colorful bowl full of fresh veggies and grains."
                expandedContent={[
                  "Cook quinoa and let cool.",
                  "Chop fresh veggies and roast some.",
                  "Assemble bowl with quinoa, veggies, and dressing."
                ]}
              />
            </Grid>
          </Grid>
        </Container>

        <Divider />

        <section className={styles.testimonialsSection}>
          <h2 className={styles.testimonialHeading}>Feedback Matters</h2>

          <div className={styles.tabBar} role="tablist" aria-label="Testimonial categories">
      {testimonials.map((item, index) => (
    <div
      key={item.label}
      role="tab"
      aria-selected={activeIndex === index}
      tabIndex={0}
      className={clsx(styles.tab, activeIndex === index && styles.activeTab)}
      onClick={() => setActiveIndex(index)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setActiveIndex(index);
          e.preventDefault();
        }
      }}
    >
      {item.label}
    </div>
  ))}
</div>

          <div className={styles.testimonialCards} aria-live="polite">
            {testimonials.map((item, index) => (
              <div
                key={item.label}
                role="tabpanel"
                hidden={getPositionClass(index) === styles.hidden}
                tabIndex={activeIndex === index ? 0 : -1}
                className={clsx(
                  styles.stackedCard,
                  item.colorClass,
                  getPositionClass(index)
                )}
                onClick={() => setActiveIndex(index)}
              >
                <p>{item.text}</p>
                <div className={styles.author}>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </Layout>
  );
}
