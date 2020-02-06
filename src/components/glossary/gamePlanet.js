import Axios from 'axios';
import './GamePlanet.css';
import {Col,Row,Container} from 'reactstrap'; 
import React, { useState, useEffect } from 'react';
import { isNullOrUndefined } from 'util';

const GamePlanet = () =>{
        const [activeLetter, setActiveLetter] = useState("A")
        const [filterPlanetResult, setFilterPlanetResult] = useState('All')
        const [planets, setPlanets] = useState([])

        useEffect(() => {
        const APIfetch = async () => {
            const result = await Axios(`https://api.le-systeme-solaire.net/rest/bodies/`);
            setPlanets(result.data.bodies)
        } 
        APIfetch()
        },[]);
 
        const filterWithLetters =(letter,objects) => {
            return(
                objects.filter(planet=> filterPlanetResult==="All"?
                planet.name[0]===letter:
                planet.name[0]===letter && planet.isPlanet===filterPlanetResult )
            )
        }
        const getWithin =(object)=>{
            return(
                Object.keys(object).filter(key=>object[key] !== 0 && !isNullOrUndefined(object[key]))
                .map(keyOK=>
                typeof object[keyOK]== "object"?
                getWithin(object[keyOK])    
                :<li key={keyOK}><strong>{keyOK}</strong> : {String(object[keyOK])}  
                </li>)
            )
        } 
        const chooseLetter = () => {
            const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
            .map(letter => 
                filterWithLetters(letter,planets).length>0?
                <button className="greenLetters" key={letter} 
                        onClick={()=>setActiveLetter(letter)}li>
                           {letter}
                </button>
                :
                <button key={letter} 
                disabled={true}>
                    {letter}
        </button>)


            return(<>
                {alpha}
                </>)
            }
        
            return(
                <>
                <Container fluid className='background-glossary' id="mainContainer">
                    <Row className="activeLetter">  <h2>{activeLetter}</h2></Row>
                    <Row className="alphabet">{chooseLetter()} </Row>
                    
                    <Row className="planetListing">
                        {filterWithLetters(activeLetter,planets)
                        .map(planetOK =>  
                            <Col sm="4">
                            <ul key={planetOK.id}>
                            <h2>{planetOK.name} </h2>
                            {getWithin(planetOK)}  
                            </ul>
                            </Col>)}
                    </Row>
                </Container>
                </>
            )}

export default GamePlanet