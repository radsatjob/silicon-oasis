import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Grid, Container } from '@mui/material';
import RecipeReviewCard from '/src/components/RecipeReviewCard';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Footer from '../components/Footer';

export default function Home() {

  const footerImageUrl = useBaseUrl('/img/animated.gif'); // footer image

  return (
    <Layout>
      <header className={clsx(styles.heroBanner)}>
        <div className={styles.heroContent}>
          <div className={styles.tag}>Help Center</div>
          <h1 className={styles.title}>
            Documentation,<br />
            why and how much!
          </h1>
          <p className={styles.subtitle}>
          </p>
          <div className={styles.buttons}>
            <a className={clsx('button button--lg', styles.demoButton)} href="#demo">
              View demo
            </a>
            <a className={clsx('button button--lg', styles.trialButton)} href="#trial">
              Start free trial
            </a>
          </div>
        </div>
      </header>

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
      </main>    
        <Footer />
    </Layout>
  );
}
