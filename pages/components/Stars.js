import React from "react";
import styles from '../../styles/Home.module.css'

function Stars(props) {
    return (
        <div className={styles.progress}>
            <img src="/star.svg" alt=""/>
            <div className={styles.sum}>{props.currentSum}</div>
        </div>
    )
}

export default Stars;
