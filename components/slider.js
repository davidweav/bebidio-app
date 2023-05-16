import styles from './options.module.css';

export default function Slider() {
    
    return (
        <div className={styles.slidecontainer}>
            <h1>Slider Test</h1>
            <input id = {props.id} type="range" min="1" max="100"  className={styles.slider} id="myRange"/>
            <LiquorSelector/>
        </div>
    );
    
}