import React,{useEffect,useState} from 'react'
import api from '../services/api'

export default () => {

    const [startShipsList,setStarShipsList] = useState([])

    useEffect(async () => {
        await api.get('/starships/').then(({data}) => {
            setStarShipsList(data.results)
        })
    },[])

    return(
        <>
            <h1>StarShipsList</h1>
            {startShipsList.map(startShip => {
                return (
                    <p>{startShip.name}</p>
            )})}
        </>
    )
 } 
    
