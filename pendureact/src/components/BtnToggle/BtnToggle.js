import React, {useContext} from "react";
import './BtnToggle.css';
import ThemeContextProvider, { ThemeContext } from "../../context/ThemeContext";

export default function BtnToggle() {

    const {toggleTheme, theme} = useContext(ThemeContext)

    return (
        <div 
        onClick={toggleTheme}
        className={theme ? 'btn-toggle light' : 'btn-toggle dark'}
        >
            {theme ? "Dark" : "Light"}
        </div>
    )
}