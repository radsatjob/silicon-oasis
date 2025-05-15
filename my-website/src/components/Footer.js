import React from 'react';
import styles from './Footer.Module.css';
import { FaBookOpen, FaCode, FaQuestionCircle, FaRainbow} from 'react-icons/fa';
import { FaInfoCircle, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><FaBookOpen className={styles.icon}/><a href="/docs/intro">Introduction</a></li>
            <li ><FaRainbow className={styles.icon}/><a href="/docs/api">API Reference</a></li>
            <li><FaQuestionCircle className={styles.icon}/><a href="/docs/faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>About Me</h4>
          <ul>
            <li><FaEnvelope className={styles.icon} /><a href="radhikatk@gmail.com">Contact</a></li>
            <li><FaLinkedin className={styles.icon} /><a href="https://www.linkedin.com/in/radhika-tk-9764a85/">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
