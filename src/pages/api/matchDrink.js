import { db } from '../../firebase/config';
import { collection, getDocs, where, query} from "firebase/firestore"; 

export default function handler(req, res) {

    const {liq, flav, col} = req.query;
    let drink = null;
    let ingredients = null;
    let color = null;
    async function fetchData() {
        try {
            const q = query(collection(db, "cocktails"), where("color", "==", col), where("liquor", "==", liq), where("flavor", "==", flav));
            const querySnapshot =  await getDocs(q)
            querySnapshot.forEach((doc) => {  
            drink = doc.data().name;
            ingredients = doc.data().ingredients;
            color = doc.data().color;
            });
            const responseData = {
                cocktail: drink,
                color: color,
                ingredients:  ingredients
            };
            res.status(200).json(responseData);
        }
        catch (error) {
            console.error('Error:', error);
            res.status(500).json({error: error});
        }
        
    }
    
    fetchData();

   

    
}