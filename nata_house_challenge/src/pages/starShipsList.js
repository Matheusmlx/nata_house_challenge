import React,{useEffect,useState} from 'react'
import api from '../services/api'
import {List,Title,Table,Button} from '../styles/pages/starShipsListStyled.js'


export default () => {

    const [startShipsList,setStarShipsList] = useState([])

    let [distancia,setDistancia] = useState('') 

    function mostrarTela(starShip) {
        console.log(starShip)
    }

    useEffect(async () => {
        await api.get('/starships/').then(({data}) => {
            setStarShipsList(data.results)
        })
    },[])

    return(
        <List>
            <Title>StarShipsList</Title>

            <Table>
                <span>MGLT : {distancia}</span>

                {startShipsList.map(startShip => {
                    return (
                        <p>{startShip.name}: 9 {mostrarTela(startShip)}</p>
                )})}
            </Table>

            <input type="number" value={distancia} onChange={e => setDistancia(e.target.value)} placeholder="Digite a distancia"/>
            <Button >Calcular</Button>
        </List>
    )
 } 
    
