import { useState } from "react"
import { Link } from "react-router-dom"

var database = [80401, 10001, 60007, 90001, 81620]

export function Dashboard() {


    return (
        <>
           <div>Cities</div>
           {database.map((city, i)=>{
            return(
            <div>
                <Link className={`button-${i}`} to={`/deposit/${city}`}>{city}</Link>
            </div>
           )})
        }

        </>
    )
}