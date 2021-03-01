import React from "react";
import styles from '../../styles/Home.module.css'

function CurrentSum(props) {
    return (
        <div>
            { props.currentSum === 0 ? '' :
                <h3>Текущая сумма: {props.currentSum}</h3>}
        </div>
    )
}

export default CurrentSum;
