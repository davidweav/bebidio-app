import Link from "next/link";
import LiquorSelector from "../../components/liquorSelector";
import Slider from "../../components/slider";

export default function optionsPage() {
    
    
    return (
        <div>
            
            <Link href="../">Go Back</Link>
            <h1>Drink Selector</h1>
            <p>Adjust the options to find your new favorite drink!</p>
            <form method="post" action="../api/submit">
                <LiquorSelector id="liquor-selector"/>
                <button type="submit">Submit</button>
                
            </form>
            
        </div>
        
    )  
}
