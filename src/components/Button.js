import React from "react";
import './button.css';

export default function Button({ onClick:player, value }) {
    return ( 
        <button 
            onClick={player}
            className="button-30"
        >
            {value}
        </button>
    );
}