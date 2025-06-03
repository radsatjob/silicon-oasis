import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Grid, Container } from '@mui/material';
import Footer from '../components/Footer';
import HorizontalAutoScrollCarousel from '/src/components/HorizontalAutoScrollCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divider from '../components/Divider';
import CustomCard from '../components/CustomCard';

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

  const cardsData = [
    {
      backgroundImage: 'img/bg001.jpg',
      screenshotImage: 'img/api-page.png',
      text: 'Static site generators like Docusaurus, Sphunx, Slate and Theneo',
    },
    {
      backgroundImage: 'https://via.placeholder.com/300x400?text=Background+2',
      screenshotImage: 'https://via.placeholder.com/240x160?text=Screenshot+2',
      text: 'Taryttaayyayayayya aytatabatahnatabtaatabatbatabatnnttatatattattatatatat',
    },
    {
      backgroundImage: 'https://via.placeholder.com/300x400?text=Background+2',
      screenshotImage: 'https://via.placeholder.com/240x160?text=Screenshot+2',
      text: 'Taryttaayyayayayya aytatabatahnatabtaatabatbatabatnnttatatattattatatatat',
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

        <Divider />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {cardsData.map((card, idx) => (
        <CustomCard
          key={idx}
          backgroundImage={card.backgroundImage}
          screenshotImage={card.screenshotImage}
          text={card.text}
        />
      ))}
    </div>

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
