import styles from '../styles/title.module.css';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

// Title Screen
export default function HomePage() {
  
  return (
    
      <div className="title-page">
        <main className="title-box">
        <div className="nav-box">
          <div className="bebido-container">
            <h1 className="title">Bebidio</h1>
            
          </div>
          
        <nav className="nav-bar">
          <ul>
            <li><Link href="./">Home</Link></li>
            <li><Link href="../about">About</Link></li>
            <li><Link href="../options">Drink Maker</Link></li>
          </ul>
        </nav>
        </div>
        
          {/* Animated title container */}
          
          <div className={styles.bubbles}>
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
          </div>
          <div className="title-content">
            
            <div className="text-box">
              <div className="text">
              <h2>An App Designed to Expand Your <em>Palette</em></h2>
              <h2>Discover Your Next Favorite Cocktail</h2>
              </div>
            <Link className="start-button" href="../options">Get Started</Link>
            </div>
          
          <div className="footer-box">
              <h3>Designed and Built by David Weaver</h3>
            </div>
            </div>
            
        </main>

    </div>
  ) 
}
