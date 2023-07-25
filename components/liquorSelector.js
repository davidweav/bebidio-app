import styles from './options.module.css';

export default function LiquorSelector(props) {
    
    return (
        <div id = {props.id} className={styles["liquor-selection-bar"]} >

            <input type="radio" id="radioVodka" name="liquor" value="vodka" required />
            <label htmlFor="radioVodka" >Vodka</label>

            <input type="radio" id="radioGin" name="liquor" value="gin" required />
            <label htmlFor="radioGin" >Gin</label>

            <input type="radio" id="radioRum" name="liquor" value="rum" required />
            <label htmlFor="radioRum" >Rum</label>

            <input type="radio" id="radioWhiskey" name="liquor" value="whiskey" required/>
            <label htmlFor="radioWhiskey" >Whiskey</label>

            <input type="radio" id="radioTequila" name="liquor" value="tequila" required />
            <label htmlFor="radioTequila" >Tequila</label>
        </div>
    );
    
}