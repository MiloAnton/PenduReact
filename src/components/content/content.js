import React, { useContext, useState } from "react";
import './content.css';
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../Button";
import NavButtons from "../navButtons";

const GOOD_LETTER = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBNéèàâê";

export default function Content() {
    const {theme} = useContext(ThemeContext);
    const fetchWord = async () => {
        fetch(`https://animalfinderapi.herokuapp.com/word`)
            .then(response => response.json())
            .then(json => console.log(json.data.word));
    }
    return (
        <div className={theme ? 'contenu light ' : 'contenu dark'}>
            <h1>Trouveur d'animaux</h1>
            <p>Trouve dont l'animal qu'est caché et engrange des points</p>
            <NavButtons /><Button value={'🔁'} onClick={() => fetchWord()}/>
            {theme}
            <input 
                value="" 
                type="text" 
                placeholder="a"
                onChange={(event) => console.log(event.target.value)}
                style={{
                    width:"15px"
                }}
            ></input>
        </div>
    )
}

function countLetters() {
    
}