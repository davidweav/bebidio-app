import Link from "next/link";
import LiquorSelector from "../../components/liquorSelector";
import Slider from "../../components/slider";
import FlavorSelector from "../../components/flavorSelector"
import ColorSelector from "../../components/colorSelector"
import styles from '../styles/title.module.css';
import { useRouter } from "next/router";
export default function optionsPage() {

    return (
        <div class="drink-maker-page">
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
            <div class="drink-maker-content">
         
                <h1>Drink Maker</h1>
                <p>Adjust The Options Below</p>
            
            <main>
                <form method="post" action="../api/submit">
                    <div class="selection-menus">
                        <div class="menu liquor-menu">
                            <h2>Liquor</h2>
                            <LiquorSelector id="liquor-selector"/>
                        </div>
                        <div class="menu flavor-menu">
                            <h2>Flavor</h2>
                            <FlavorSelector />
                        </div>
                        <div class="menu color-menu">
                            <h2>Color</h2>
                            <ColorSelector />
                        </div>
                    </div>
                    <button class="menu-submit" type="submit">Find Drink</button>
                </form>
            </main>
            </div>
        </div>
        
    )  
}
