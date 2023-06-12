import Link from "next/link";
import LiquorSelector from "../../components/liquorSelector";
import Slider from "../../components/slider";

export default function optionsPage() {
    
    
    return (
        <div class="drink-maker-page">
            <nav class="nav-bar">
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="../about">About</a></li>
                    <li><a href="../options">Drink Maker</a></li>
                    <li><a href="#">Drink Collection</a></li>
                </ul>
            </nav>
            <header>
                <h1>Drink Maker</h1>
                <p>Adjust the options to find your new favorite drink!</p>
            </header>
            <main>
                <form method="post" action="../api/submit">
                    <div class="menu liquor-menu">
                        <LiquorSelector id="liquor-selector"/>
                    </div>
                    <div class="menu flavor-menu">
                        <h2>Flavor</h2>
                    </div>
                    <div class="menu color-menu">
                        <h2>Color</h2>
                    </div>
                    <button class="menu-submit" type="submit">Find Drink</button>
                </form>
            </main>
        </div>
        
    )  
}
