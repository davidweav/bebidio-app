import styles from '../styles/title.module.css';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

// Title Screen
export default function HomePage() {
  
  return (
    
      <div class="title-page">
        <main class="title-box">
        <div class="nav-box">
          <div class="bebido-container">
            <h1 class="title">Bebidio</h1>
            
          </div>
          
        <nav class="nav-bar">
          <ul>
            <li><Link href="./">Home</Link></li>
            <li><Link href="../about">About</Link></li>
            <li><Link href="../options">Drink Maker</Link></li>
          </ul>
        </nav>
        </div>
        
          {/* Animated title container */}
          
          <div class={styles.bubbles}>
            <div class={styles.bubble}></div>
            <div class={styles.bubble}></div>
            <div class={styles.bubble}></div>
            <div class={styles.bubble}></div>
            <div class={styles.bubble}></div>
            <div class={styles.bubble}></div>
            <div class={styles.bubble}></div>
            <div class={styles.bubble}></div>
            <div class={styles.bubble}></div>
            <div class={styles.bubble}></div> 
          </div>
          <div class="title-content">
            <div class="text">
              <h2>An App Designed to Expand Your <em>Palette</em></h2>
              <h2>Discover Your Next Favorite Cocktail</h2>
              
            </div>
            <i class="fa fa-glass"></i>
            <Link class="start-button" href="../options">Get Started</Link>
          </div>
            <div class="footer-box">
              <h2>Designed and Built by David Weaver</h2>
            </div>
        </main>

    </div>
  ) 
}
