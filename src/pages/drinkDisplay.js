import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function drinkDisplay() {
    
    const router = useRouter();
    const {liquor, flavor, color} = router.query;
    const [drinkData, setDrinkData] = useState(null);

    
 
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
        
    },[liquor]);
    
    return (
        <div class="drink-display-page">
            <nav class="nav-bar">
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="../about">About</a></li>
                    <li><a href="../options">Drink Maker</a></li>
                    <li><a href="#">Drink Collection</a></li>
                </ul>
            </nav>
            <main class="drink-display">
            {drinkData != null && drinkData.ingredients != null ?
             (
             <>
             <h1>{drinkData.cocktail}</h1>
             <ul> 
                 {drinkData.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
             </ul>
             </>)
             : (<h1>Loading...</h1>)}
            </main>
            <footer>
              <button>Add to Collection</button>
            </footer>
        </div>
    )
}
