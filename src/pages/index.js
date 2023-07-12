import styles from '../styles/title.module.css';
import { useEffect } from 'react';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

// Title Screen
export default function HomePage() {
  
  return (
    
      <div class="title-page">
        <nav class="nav-bar">
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="../about">About</a></li>
            <li><a href="../options">Drink Maker</a></li>
            <li><a href="#">Drink Collection</a></li>
          </ul>
        </nav>
        <header class="title-box">
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
            <p>Designed by David Weaver</p>

          </div>
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


        </header>
      <main class="title-page-content">
        <h2>An App Designed to Expand Your <em>Taste</em></h2>
        <h2>Discover Your Next Favorite Cocktail</h2>
        <Link class="start-button" href="../options">Get Started</Link>
      </main>
      <footer class="title-page-footer">
        <h2>contact </h2>
      </footer>
    </div>
  ) 
}
