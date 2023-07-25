import styles from './options.module.css';

export default function LiquorSelector(props) {
    
    return (
        <div id = {props.id} className={styles["flavor-selection-bar"]} >
            
            <input type="radio" id="flavor-sweet" name="flavor" value="sweet" required />
            <label htmlFor="flavor-sweet" >Sweet</label>

            <input type="radio" id="flavor-salty" name="flavor" value="salty" required/>
            <label htmlFor="flavor-salty" >Salty</label>

            <input type="radio" id="flavor-bitter" name="flavor" value="bitter" required/>
            <label htmlFor="flavor-bitter" >Bitter</label>

        </div>
    );
    
}