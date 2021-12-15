import React, { useContext, useState, useEffect } from "react";
import './content.css';
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../Button";

export default function Content() {
    const {theme} = useContext(ThemeContext);
    const fetchWord = async () => {
        fetch(`https://animalfinderapi.herokuapp.com/word`)
            .then(response => response.json())
            .then(json => console.log(json.data.word));
    }
    // const fetchScore = async () => {
    //     fetch(`https://animalfinderapi.herokuapp.com/score`)
    //         .then(response => response.json())
    //         .then(json => console.log(json.data));
    // }
    const [score, setscore] = useState(undefined)
    useEffect(() => {
        (async()=>{
            const newScore = await getScore()
            setscore(newScore)
        })()
        return () => {}
    },[])
    const getScore = async () => {
        const scoreJson = await fetch ('https://animalfinderapi.herokuapp.com/score');
        return await scoreJson.json();
    }
    if (!score){

        return <p>Waiting</p>
    }
    console.log(score)
    return (
        <div className={theme ? 'contenu light ' : 'contenu dark'}>
            <h1>Trouveur d'animaux</h1>
            <p>Trouve dont l'animal qu'est caché et engrange des points</p>
            {theme}
            <div 
                className="button-row"
            >
                <Button value={'Fetch new word'} onClick={() => fetchWord()}/>
            </div>
            <p>{score.data.map(result => 
                <div>
                    <p>#{result.position}</p>
                    <p>{result.username}</p>
                    <p>{result.score}</p> 
                    <img src= {result.avatar}/>
                </div>
            )}</p>
        </div>
    )
}