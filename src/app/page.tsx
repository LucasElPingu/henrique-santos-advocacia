// ./src/app/page.tsx

import React from 'react';
import { Banner } from './components/Banner';
import { Specialties } from './components/Specialties';
import { AboutUs } from './components/AboutUs';
import { Team } from './components/Team';
import { InstagramCarousel } from './components/InstagramCarousel';
import { Footer } from './components/Footer';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <>
      <Banner />
      <div className={styles.decorativeSectionDivider} />
      <Specialties />
      <div className={styles.decorativeSectionDivider} />
      <AboutUs />
      <Team />
      <InstagramCarousel />
      <Footer />
    </>
  );
}
