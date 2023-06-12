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
    
      <div class="title-page">
        <nav class="nav-bar">
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="../about">About</a></li>
            <li><a href="../options">Drink Maker</a></li>
            <li><a href="#">Drink Collection</a></li>
          </ul>
        </nav>
        <header class="title-box {styles.bubbles}">
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


      </header>
      <main class="title-page-content">
        <h2>An App Designed to Expand Your Taste</h2>
        <h2>Discover Your Next Favorite Cocktail</h2>
        <Link class="start-button" href="../options">Get Started</Link>
      </main>
      <footer class="title-page-footer">
        <h2>contact </h2>
      </footer>
    </div>
  ) 
}

export function handleScroll() {
  
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;  
  var scrolled = (winScroll / height) * 100;
  


}
