import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import { useState, useEffect } from "react";
import { TwitterShareButton } from "react-share";
import styles from '../styles/title.module.css';
export default function drinkDisplay() {
    
    const router = useRouter();
    const {liquor, flavor, color} = router.query;
    const [drinkData, setDrinkData] = useState(null);
    const [domain, setDomain] = useState('');
    let accentColor = null;
    

    switch(liquor) {
        case "vodka":
            accentColor = "lightblue";
        break;
        case "gin":
            accentColor = "green";
        break;
        case "rum":
            accentColor = "white";
        break;
        case "whiskey":
            accentColor = "gold";
        break;
        case "tequila":
            accentColor = "pink";
        break;
        case "na":
            accentColor = "yellow";
        break;
    }

    const fetchData = async () => {
        try {
            
            const baseUrl = './api/matchDrink' 
            const queryParams = {
                liq: liquor,
                flav: flavor,
                col: color
            };
            
            const url = `${baseUrl}?${new URLSearchParams(queryParams)}`;
            const response = await fetch(url);
            const data = await response.json();
            if(data != null) {
                setDrinkData(data);
                setFadeIn(true);
            }
            
        } catch (error) {
            console.error('Error:', error);
        }
    };
   
    
    useEffect(() => {
        fetchData();
        setDomain(window.location.origin);
    },[liquor]);
    
    const currentUrl =  domain + router.asPath;
    if (drinkData != null && drinkData.ingredients != null) {
        return (
            <div style={drinkData.color != "yellow" ? {background: `linear-gradient(${drinkData.color},80%,${accentColor})`} : {background: `linear-gradient(${drinkData.color},80%,${accentColor})`, color: "black"}} class="drink-display" class="drink-display-page">
                
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
                <main style={drinkData.color != "yellow" ? {background: `linear-gradient(${drinkData.color},80%,${accentColor})`} : {background: `linear-gradient(${drinkData.color},80%,${accentColor})`, color: "black"}} class="drink-display">
                    <h1>{drinkData.cocktail}</h1>
                    

                    
                    <ul> 
                        {drinkData.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <div className="drink-display-buttons">
                    <TwitterShareButton
                        url={currentUrl}
                        title="Check out this drink I made on Bebidio!">

                            <button>Tweet</button>
                            </TwitterShareButton>
                        
                   

                    <Link href="../options"> <button>Make Another</button></Link>
                    </div>
             </main>
            </div>
        )
    }
    else {
        return (
    
            <main>
                <h1>Loading...</h1>
            </main>
            
           
        )
    }


    
}