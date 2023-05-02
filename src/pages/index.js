import styles from '../styles/title.module.css';

export default function HomePage() {
  
  return (
    <div class={styles.bubbles}>
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
    
  ) 
}
