import Head from 'next/head'
import React, { useState } from "react";
import styles from '../styles/Home.module.css'

import Buttons from "./components/Buttons";
import Timer from "./components/Timer";
import CurrentSum from "./components/CurrentSum";
import Stars from "./components/Stars";

export default function Home() {
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    let currentSum = 0;
    const [total, setTotal] = useState(0);

    function getRandomInt(min, max){
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random === 0 ? getRandomInt( -5, 5 ) : random;
    }

    const start = () => {
        const number = getRandomInt( -5, 5 );
        currentSum = number;
        setTotal(number);
        console.log('totalSum: ', currentSum)

        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        if(updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        if(updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        if(updatedMs === 100){
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
    }

    const stop = () => {
        clearInterval(interv);
        setStatus(2)
    }

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0})
    }

    const resume = () => start();

    return (
        <div className={styles.container}>
            <Head>
                <title>Sarsen Yedil</title>
                <link rel="icon" href="/test.png" />
            </Head>

            <main className={styles.main}>
                <img src="/cosmos.png" alt=""/>

                <div className={styles.stopwatch}>
                    <Timer time={time}/>
                    <Buttons status={status}
                             start={start}
                             resume={resume}
                             reset={reset}
                             stop={stop}
                    />
                    <CurrentSum currentSum={currentSum}/>
                </div>

                <div className={styles.redBox}>
                    <div className={styles.relative}>
                        <div className={styles.stars}>
                            <Stars currentSum={total} />

                            <div className={styles.progress1}>
                                <img src="/star.svg" alt=""/>
                                <div className={styles.sum}>{total}</div>
                            </div>

                            <div className={styles.progress2}>
                                <img src="/star.svg" alt=""/>
                                <div className={styles.sum}>{total}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
