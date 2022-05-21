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
import AddTask from './components/AddTask';
import BoardSet from './components/BoardSet';
import BoardsJson from './Boards.json' 

function App() {


  //PSEUDO BAZA DANYCH NOTATEK
  const Boards = BoardsJson
  
  const [bgColor, setBgColor] = useState('#3F3939');
  const [textColor, setTextColor] = useState('#000000');
  const [textSize, setTextSize] = useState('15');
  const [titleSize, setTitleSize] = useState('25');
  const [format, setFormat] = useState("tablica");
  const [numTask, setNumTask] = useState(1);
  const [boardId, setBoardId] = useState(0);
  const [showNav, setShowNav] = React.useState(true);

  const [boardState, setBoardState] = useState('board');

  function f()
  {
    {setNumTask(1)};
    console.log(numTask);
    console.log('aaaaa');
  }

  if(boardState==='board')
  {
    if(format==='lista')
    {
      return(
        <div style={{display:'flex', background: bgColor}}>
          {showNav && <Nav2 changeBoardState={setBoardState}
           notatki={Boards[boardId].notatki}
           fun={f}/>}
           
          <BigTask
            form={format}
            tytul={Boards[boardId].notatki[numTask].tytul}
            tresc={Boards[boardId].notatki[numTask].tresc}
            data={Boards[boardId].notatki[numTask].data}
            priorytet={Boards[boardId].notatki[numTask].priorytet}
            tagi={Boards[boardId].notatki[numTask].tagi}
            funkcja={setShowNav}
          />
          <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh',marginTop:'10px'}} onClick={() => {setBoardState('settings')}}/>
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
                  notatki={Boards[boardId].notatki}
                  on
                  funkcja={setShowNav}
            />
          <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh' , color:"white",marginTop:'25px'}} onClick={() => {setBoardState('settings')}}/>
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
        onIcon={() => {}} 
        tytul={"Test"} 
        tresc={"test test"} 
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
        <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh', color:"white", marginTop:'56px'}} onClick={() => {setBoardState('board')}}/>
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
  else if(boardState==='addTask'){
    return(
      <div style={{display: 'flex', background: bgColor}}>
      <div className="buttons" style={{margin: "50px"}}>
      <Button 
      margines={'0 auto'}
      text={"Strona główna"} 
      fun={() => {setBoardState('board')}}
      color={"white"}/>
      </div>
      <AddTask
        form={format}
        tytul={Boards[boardId].notatki[numTask].tytul}
        tresc={Boards[boardId].notatki[numTask].tresc}
        data={Boards[boardId].notatki[numTask].data}
        priorytet={Boards[boardId].notatki[numTask].priorytet}
        tagi={Boards[boardId].notatki[numTask].tagi}
        funkcja={setBoardState}/>
    </div>
    );
  }
  else if(boardState==='boardSet'){
    return(
      <div style={{display: 'flex', background: bgColor}}>
        <div className="buttons" style={{margin: "50px"}}>
        <Button 
        margines={'0 auto'}
        text={"Strona główna"} 
        fun={() => {setBoardState('board')}}
        color={"white"}/>
        </div>
        <BoardSet
        boards={Boards}
        changeBoard={setBoardId}
        />
      </div>
    );
  }
}



export default App;
