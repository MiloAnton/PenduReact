import './../App.css';
import './../components/content/content.css';
import logo from './../logo.svg';
import Button from './../components/Button';
import { Link } from "react-router-dom";
import BtnToggle from '../components/BtnToggle/BtnToggle';
import { ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react";

function App() {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={theme ? 'contenu light ' : 'contenu dark'}>
        <BtnToggle />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          ✨Welcome to <b>Pendu Paradise</b>✨
        </h1>
        <Button value={"Nikoto"}>
            <Link to="/play"></Link>
        </Button>
    </div>
  );
}
export default App;