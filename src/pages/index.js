import styles from '../styles/title.module.css';
import { useEffect } from 'react';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

// Title Screen
export default function HomePage() {

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  
  return (
    
      <div className="styles.bubbles title-container" >
        <Head>
          <style>{`
            body {
              padding: 0;
              margin: 0;
              min-height: 100vh;
              background: linear-gradient(to right, purple, yellow);
              background-size: 400%;
              background-position: 0%;
            }
          `}</style>
        </Head>
      {/* Animated title container */}
       <div className={styles.ten}>
        <h3 className={styles.bounce}>
          <span>B</span>
          <span>e</span>
          <span>b</span>
          <span>i</span>
          <span>d</span>
          <span>i</span>
          <span>o</span>
        </h3>
      </div>

      {/* Each individual bubble is a container */}
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>

      
      <div className="center">
        <h2>An App Designed to Expand Your Taste</h2>
        <p>Designed by David Weaver</p>
        <h2 className="bottom">
          <Link href="../options">
            Get Started!
            </Link>
        </h2>
      </div>
    </div>
  ) 
}

export function handleScroll() {
  
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;  
  var scrolled = (winScroll / height) * 100;
  


}
