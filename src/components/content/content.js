import React, { useContext } from "react";
import './content.css';
import { ThemeContext } from "../../context/ThemeContext";

export default function Content() {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={theme ? 'contenu light ' : 'contenu dark'}>
            <h1>Trouveur d'animaux</h1>
            <p>Trouve dont l'animal qu'est caché et engrange des points</p>
            {theme}
        </div>
    )
}