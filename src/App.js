import './App.css';
import Nav from './components/Nav'
import Board from './components/Board'
import Settings from './components/Settings'
import {AiTwotoneSetting} from "react-icons/ai";
import React, { useState } from 'react';
import Button from './components/Button';

function App() {
  const [bgColor, setBgColor] = useState('white');
  const [textColor, setTextColor] = useState('blue');
  const [textSize, setTextSize] = useState('15');
  const [titleSize, setTitleSize] = useState('25');
  const [format, setFormat] = useState("lista")

  const [isBoard, setBoardType] = useState(true);

  if(isBoard){
  return (
    <div className="App" style={{background: bgColor}}>
      <Nav/>
      <Board 
      textColor={textColor}
      textSize={textSize}
      titleSize={titleSize}
      />
      <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh'}} onClick={() => {setBoardType(!isBoard)}}/>
    </div>
  );
  }
  else{
    return (
      <div className="App" style={{background: bgColor}}>
        <Settings 
        bgColor={bgColor} changeBgColor={setBgColor}
        textColor={textColor} changeTextColor={setTextColor}
        textSize={textSize} changeTextSize={setTextSize}
        titleSize={titleSize} changeTitleSize={setTitleSize}
        format={format} changeFormat={setFormat}/>
        <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh'}} onClick={() => {setBoardType(!isBoard)}}/>
      </div>
    );
  }
}


export default App;
