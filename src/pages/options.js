import Link from "next/link";
import LiquorSelector from "../../components/liquorSelector";
import FlavorSelector from "../../components/flavorSelector"
import ColorSelector from "../../components/colorSelector"
import styles from '../styles/title.module.css';
import { useRouter } from "next/router";
import { useState } from "react";
export default function optionsPage() {

    const [formData, setFormData] = useState({
        liquor: '',
        flavor: '',
        color: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    
    return (
        <div className="drink-maker-page">
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
            <div className="drink-maker-content">
         
                <h1>Drink Maker</h1>
                <p>Adjust The Options Below</p>
            
            <main>
                <form method="post" action="/api/submit">
                    <div className="selection-menus">
                        <div className="menu liquor-menu">
                            <h2>Liquor</h2>
                            <LiquorSelector id="liquor-selector"/>
                        </div>
                        <div className="menu flavor-menu">
                            <h2>Flavor</h2>
                            <FlavorSelector />
                        </div>
                        <div className="menu color-menu">
                            <h2>Color</h2>
                            <ColorSelector />
                        </div>
                    </div>
                    <button className="menu-submit" type="submit">Find Drink</button>
                </form>
            </main>
            </div>
        </div>
        
    )  
}
