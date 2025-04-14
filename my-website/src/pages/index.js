import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import Layout from '@theme/Layout';
import './index.module.css';

export default function Home() {
  const lottieLeft = useRef(null);
  const lottieRight = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieLeft.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets1.lottiefiles.com/packages/lf20_q5pk6p1k.json'
    });

    lottie.loadAnimation({
      container: lottieRight.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets6.lottiefiles.com/packages/lf20_w51pcehl.json'
    });
  }, []);

  return (
    <Layout title="Home" description="Perfectly Contained Hero Banner">
      <main>
        <section className="hero-banner">
          <div className="hero-inner">
            <div className="lottie small" ref={lottieLeft}></div>

            <div className="hero-text">
              <h1>Bring Ideas to Life</h1>
              <p>Animations that captivate. Assets that inspire. Start exploring today.</p>
              <a className="cta-button" href="/docs/intro">Get Started</a>
            </div>

            <div className="lottie small" ref={lottieRight}></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
