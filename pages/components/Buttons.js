import React from "react";
import styles from '../../styles/Home.module.css'

function Buttons(props) {
    return (
        <div>
            {(props.status === 0)?
                <button className={styles.stopwatchBtn}
                        className={styles.stopwatchBtnGre}
                        onClick={props.start}
                >Запуск</button> : ""
            }

            {(props.status === 1)?
                <div>
                    <button className={styles.stopwatchBtn}
                            className={styles.stopwatchBtnRed}
                            onClick={props.stop}
                    >Пауза</button>

                    <button className={styles.stopwatchBtn}
                            className={styles.stopwatchBtnYel}
                            onClick={props.reset}
                    >Рестарт</button>
                </div> : ""
            }

            {(props.status === 2)?
                <div>
                    <button className={styles.stopwatchBtn}
                            className={styles.stopwatchBtnGre}
                            onClick={props.resume}
                    >Продолжить</button>

                    <button className={styles.stopwatchBtn}
                            className={styles.stopwatchBtnYel}
                            onClick={props.reset}
                    >Рестарт</button>
                </div> : ""
            }

        </div>
    );
}

export default Buttons;
