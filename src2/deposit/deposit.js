import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"

export function Deposit() {
    const [temperature, setTemperature] = useState(0)
    const { productId } = useParams()
    console.log("-----------")
    console.log(productId)
    console.log("-----------")


    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${productId},us&appid=6cba9d01ef70f28fac514fe4db61ef58&units=imperial`)
        .then(data=>data.json())
        .then(cleanedData=>{
            //console.log(cleanedData.main.temp)
            setTemperature(cleanedData.main.temp)
        })
    },[])


    return (
        <>
            My Deposit
            <div>{temperature}</div>
        </>
    )
}