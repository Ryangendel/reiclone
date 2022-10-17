import styles from './balance.module.css'
import {useState } from "react";

export function Balance() {

    const [bal, setBal] = useState(0)

    const onBalance = (e) => {
        e.preventDefault()

        const acId = e.target.acId.value

        console.log(`Id ${acId}`)
    }
    return (
        <>
            <div className={styles.balCont}>
                <h1>Current Balance : {bal}</h1>
                <form onSubmit={onBalance}>
                    <input type='number' placeholder='Account Id' name='acId' />
                    <input type='submit' value='Balance' />
                </form>
            </div>
        </>
    )
}