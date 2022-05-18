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
import Account from './components/Account';
import PasswordChange from './components/PasswordChange';
import Groups from './components/Groups';

function App() {


  //PSEUDO BAZA DANYCH NOTATEK
  const Tasks = [
    {
      id: '0',
      tytul: 'Tytuł 1',
      tresc: "Treść notatki 1",
      data: "2022-05-01",
      priorytet: 1,
      tagi:['abc',"aai"]
    },

    {
      id: '1',
      tytul: 'Tytuł 2',
      tresc: "Treść notatki 2",
      data: "2022-05-02",
      priorytet: 2,
      tagi:[]
    },

    {
      id: '2',
      tytul: 'Tytuł 3',
      tresc: "Treść notatki 3",
      data: "2022-05-03",
      priorytet: 3,
      tagi:[]
    }
  ];



  const [bgColor, setBgColor] = useState('#3F3939');
  const [textColor, setTextColor] = useState('blue');
  const [textSize, setTextSize] = useState('15');
  const [titleSize, setTitleSize] = useState('25');
  const [format, setFormat] = useState("tablica")

  const [boardState, setBoardState] = useState('board');

  if(boardState==='board')
  {
    if(format==='lista')
    {
      return(
        <div style={{display:'flex'}}>
          <Nav2 changeBoardState={setBoardState}/>
          <BigTask
            form={format}
            tytul={Tasks[0].tytul}
            tresc={Tasks[0].tresc}
            data={Tasks[0].data}
            priorytet={Tasks[0].priorytet}
            tagi={Tasks[0].tagi}
          />
          <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh',background: bgColor}} onClick={() => {setBoardState('settings')}}/>
        </div>
  
      );
    }
    else{
      return (
        <div className="App" style={{background: bgColor}}>
          <Nav changeBoardState={setBoardState}/>
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
          <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh' , color:"white"}} onClick={() => {setBoardState('settings')}}/>
        </div>
      );
    }
  }
  else if(boardState==='settings')
  {
    return (
      <div className="App" style={{background: bgColor}}>
        <div className="buttons" style={{margin: "50px"}}>
        <Button 
        margines={'0 auto'}
        text={"Strona główna"} 
        fun={() => {setBoardState('board')}}
        color={"white"}/>
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
        <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh', color:"white"}} onClick={() => {setBoardState('board')}}/>
      </div>
    );
  }
  else if(boardState==='groups'){
    return(
      <div className="App" style={{background: bgColor}}>
        <div className="buttons" style={{margin: "50px"}}>
        <Button 
        margines={'0 auto'}
        text={"Strona główna"} 
        fun={() => {setBoardState('board')}}
        color={"white"}/>
        </div>
        <Groups/>
      </div>
    );
  }
  else if(boardState==='account'){
    return(
      <div className="App" style={{background: bgColor}}>
        <div className="buttons" style={{margin: "50px"}}>
        <Button 
        margines={'0 auto'}
        text={"Strona główna"} 
        fun={() => {setBoardState('board')}}
        color={"white"}/>
        </div>
        <Account changeBoardState={setBoardState}/>
      </div>
    );
  }
  else if(boardState==='passwordChange'){
    return(
      <div className="App" style={{background: bgColor}}>
        <div className="buttons" style={{margin: "50px"}}>
        <Button 
        margines={'0 auto'}
        text={"Strona główna"} 
        fun={() => {setBoardState('board')}}
        color={"white"}/>
        <Button 
        marginesTop={'2vh'}
        margines={'0 auto'}
        text={"Konto"} 
        fun={() => {setBoardState('account')}}
        color={"white"}/>
        </div>
        <PasswordChange changeBoardState={setBoardState}/>
      </div>
    );
  }
}



export default App;
