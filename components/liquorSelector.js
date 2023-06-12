import styles from './options.module.css';

export default function LiquorSelector(props) {
    
    return (
        <div id = {props.id} className={styles["liquor-selection-bar"]} >
            <h2>Liquor</h2>
            <p>Choose One Option Below</p>
            <input type="radio" id="radioVodka" name="radioLiquor" value="vodka" />
            <label htmlFor="radioVodka" >Vodka</label>
            <input type="radio" id="radioGin" name="radioLiquor" value="gin" />
            <label htmlFor="radioGin" >Gin</label>
            <input type="radio" id="radioRum" name="radioLiquor" value="rum" />
            <label htmlFor="radioRum" >Rum</label>
            <input type="radio" id="radioWhiskey" name="radioLiquor" value="whiskey" />
            <label htmlFor="radioWhiskey" >Whiskey</label>
            <input type="radio" id="radioTequila" name="radioLiquor" value="tequila" />
            <label htmlFor="radioTequila" >Tequila</label>
            <input type="radio" id="radioNA" name="radioLiquor" value="na" />
            <label htmlFor="radioNA" >Non-Alcoholic</label>
        </div>
    );
    
}