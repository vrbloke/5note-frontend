import './App.css';
import Nav from './components/Nav'
import Nav2 from './components/Nav2'
import Board from './components/Board'
import Settings from './components/Settings'
import {AiTwotoneSetting} from "react-icons/ai";
import React, { useState } from 'react';

import Button from './components/Button';
import Task from './components/Task';
import BigTask from './components/BigTask';

function App() {


  //PSEUDO BAZA DANYCH NOTATEK
  const Tasks = [
    {
      id: '0',
      tytul: 'Tytuł 1',
      tresc: "Treść notatki 1"
    },

    {
      id: '1',
      tytul: 'Tytuł 2',
      tresc: "Treść notatki 2"
    },

    {
      id: '2',
      tytul: 'Tytuł 3',
      tresc: "Treść notatki 3"
    }
  ];



  const [bgColor, setBgColor] = useState('white');
  const [textColor, setTextColor] = useState('blue');
  const [textSize, setTextSize] = useState('15');
  const [titleSize, setTitleSize] = useState('25');
  const [format, setFormat] = useState("tablica")

  const [isBoard, setBoardType] = useState(true);

  if(format==='lista')
  {
    if(isBoard)
    {
      return(
        <div style={{display:'flex'}}>
          <Nav2/>
          <BigTask
            form={format}
          />
          <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh',background: bgColor}} onClick={() => {setBoardType(!isBoard)}}/>
        </div>
  
      );
    }
    else
    {
      return (
        <div className="App" style={{background: bgColor}}>
          <div className="buttons" style={{margin: "50px"}}>
          <Button 
          margines={'0 auto'}
          text={"Strona główna"} 
          fun={() => {setBoardType(true)}}/>
          <Task
          textColor={textColor}
          textSize={textSize}
          titleSize={titleSize}
          isSample={true}/>
          </div>
          <Settings 
          bgColor={bgColor} changeBgColor={setBgColor}
          textColor={textColor} changeTextColor={setTextColor}
          textSize={textSize} changeTextSize={setTextSize}
          titleSize={titleSize} changeTitleSize={setTitleSize}
          isSample={true}
          format={format} changeFormat={setFormat}/>
          <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh'}} onClick={() => {setBoardType(!isBoard)}}/>
        </div>
      );
    }

  }
  else{
    if(isBoard){
    return (
      <div className="App" style={{background: bgColor}}>
        <Nav/>
        <Board 
                textColor={textColor}
                textSize={textSize}
                titleSize={titleSize}
                isSample={false}
                format={format}
               // notatki={['1','b']}
               notatki={Tasks}
                on
          />
        <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh'}} onClick={() => {setBoardType(!isBoard)}}/>
      </div>
    );
    }
    else{
      return (
        <div className="App" style={{background: bgColor}}>
          <div className="buttons" style={{margin: "50px"}}>
          <Button 
          margines={'0 auto'}
          text={"Strona główna"} 
          fun={() => {setBoardType(true)}}/>
          <Task
          textColor={textColor}
          textSize={textSize}
          titleSize={titleSize}
          isSample={true}/>
          </div>
          <Settings 
          bgColor={bgColor} changeBgColor={setBgColor}
          textColor={textColor} changeTextColor={setTextColor}
          textSize={textSize} changeTextSize={setTextSize}
          titleSize={titleSize} changeTitleSize={setTitleSize}
          isSample={true}
          format={format} changeFormat={setFormat}/>
          <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh'}} onClick={() => {setBoardType(!isBoard)}}/>
        </div>
      );
    }
  }
}


export default App;
