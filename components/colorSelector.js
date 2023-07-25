import styles from './options.module.css';

export default function LiquorSelector(props) {
    
    return (
        <div id = {props.id} className={styles["color-selection-bar"]} >
            
            <input type="radio" id="color-brown" name="color" value="brown" required/>
            <label htmlFor="color-brown" >Brown</label>
            <input type="radio" id="color-red" name="color" value="red" required/>
            <label htmlFor="color-red" >Red</label>
            <input type="radio" id="color-orange" name="color" value="orange" required/>
            <label htmlFor="color-orange" >Orange</label>
            <input type="radio" id="color-yellow" name="color" value="yellow" required/>
            <label htmlFor="color-yellow" >Yellow</label>
            <input type="radio" id="color-green" name="color" value="green" required/>
            <label htmlFor="color-green" >Green</label>
            <input type="radio" id="color-blue" name="color" value="blue" required/>
            <label htmlFor="color-blue" >Blue</label>
            <input type="radio" id="color-purple" name="color" value="purple" required/>
            <label htmlFor="color-purple" >Purple</label>

    

        </div>
    );
    
}