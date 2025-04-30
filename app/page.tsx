'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import styles from './page.module.css';
import { softwareVersions, getVersionSlug } from './softwareData';

export default function HomePage() {
  useEffect(() => {
    // Set the not_failed cookie when the main page loads
    Cookies.set('not_failed', 'true', { expires: 1 }); // Expires in 1 day
    // Ensure state_reached is removed if user navigates back
    Cookies.remove('state_reached');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Software Download Center</h1>
          <p className={styles.heroSubtitle}>Get the latest versions of premium software</p>
        </div>
      </div>

      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>Ableton Live Versions</h2>
        <p className={styles.sectionDescription}>
          Select the version that fits your music production needs. All versions include the essential tools for creating, producing, and performing music.
        </p>
        
        <div className={styles.softwareGrid}>
          {softwareVersions.map((software) => (
            <Link 
              href={`/download/${getVersionSlug(software)}`}
              key={`${software.name}-${software.version}`}
              className={styles.softwareCard}
            >
              <div className={`${styles.softwareImage} ${styles[software.imageClass]}`}>
                <span>{software.version}</span>
              </div>
              <div className={styles.softwareInfo}>
                <h3 className={styles.softwareName}>
                  {software.name} {software.version}
                </h3>
                <p className={styles.softwareDescription}>{software.description}</p>
                <div className={styles.softwareMeta}>
                  <span>Released: {software.releaseDate}</span>
                </div>
                <span className={styles.downloadLink}>Get Details</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Why Choose Our Downloads</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>✓</div>
            <h3>Verified Software</h3>
            <p>All software is thoroughly tested before being made available.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Fast Downloads</h3>
            <p>Our servers are optimized for the quickest download experience.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔄</div>
            <h3>Regular Updates</h3>
            <p>We continuously update our software library with the latest versions.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 