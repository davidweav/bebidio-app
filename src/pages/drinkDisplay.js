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
            <div style={drinkData.color != "yellow" ? {background: `linear-gradient(${drinkData.color},80%,${accentColor})`} : {background: `linear-gradient(${drinkData.color},80%,${accentColor})`, color: "black"}} className="drink-display" className="drink-display-page">
                
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
               
                <main style={drinkData.color != "yellow" ? {background: `linear-gradient(${drinkData.color},80%,${accentColor})`} : {background: `linear-gradient(${drinkData.color},80%,${accentColor})`, color: "black"}} className="drink-display">
                    <h1>{drinkData.cocktail}</h1>
                    <ul> 
                        {drinkData.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <div className="drink-display-buttons">
                    <TwitterShareButton
                        url={currentUrl}
                        title="Check out this drink I made on Bebidio!"
                        className="button">
                        
                            Tweet
                            </TwitterShareButton>
                        
                   

                    <Link href="../options"> <button className="button">Make Another</button></Link>
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