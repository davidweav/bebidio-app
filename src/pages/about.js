import Link from "next/link"
import styles from '../styles/title.module.css';
import React from "react"

export default function About() {


    return (
        <div>
            <main class="about-page"> 
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
            <div class="about-content">
            
                <h1> About</h1>

                <div className="notecard">
                <h2>The App</h2>
                <p>Bebidio is designed to find your ideal cocktail. For many young adults, it is hard to resist a simple "vodka soda" or "rum and coke" at a bar.
                    Although these cocktails may be easy to drink and fuel your fun night out, they are boring two ingredient mixed drinks.
                    Bebidio is designed to help you order a cocktail that is both delicious and unique. It is designed to help you drink in a classy way.
                
                    </p>
                </div>
                <div className="notecard">
                    <h2>The Creator</h2>
                    <p>
                    David Weaver is a student at the University of Georgia Pursuing a Computer Science Degree with a minor in
                    general buisiness. As a student in Computer Science, David loves creating projects that are both fun and useful.
                    On top of being a hard-working student, David is also a hard-working employee at a local Bar in his college town. 
                    He is a huge fan of cocktails and mixology, which is what inspired the idea of bebidio.
                </p>
                </div>
                    </div>
            </main>
            
        </div>
    )
}