import React, { useContext, useState, useEffect } from "react";
import './content.css';
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../Button";
import DisplayCard from "../cardScores";

export default function Content() {
    const {theme} = useContext(ThemeContext);
    const fetchWord = async () => {
        fetch(`https://animalfinderapi.herokuapp.com/word`)
            .then(response => response.json())
            .then(json => console.log(json.data.word));
    }
    const [score, setscore] = useState([])
    useEffect(() => {
        (async()=>{
            const newScore = await getScore()
            setscore(newScore.data)
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
            <p>{score.map((result, index) => 
                <div>
                    <DisplayCard position={result.position} username={result.username} score={result.score}/>
                </div>
            )}</p>
        </div>
    )
}