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
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

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

  const [boardState, setBoardState] = useState('pies');

  function f()
  {
    setNumTask(1);
    console.log(numTask);
    console.log('aaaaa');
  }

  switch(boardState)
  {
    case 'board':
      if(format==='lista')
      {
        return(
          <div className="App" style={{display:'flex', background: bgColor}}>
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
          <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh',color:'white',marginTop:'40px'}} onClick={() => {setBoardState('settings')}}/>
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
    case  'settings':
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
      
    case 'groups':
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
    case 'account':
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
    case 'passwordChange':
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
    case 'addTask': 
    return(
      <div className="App" style={{display: 'flex', background: bgColor}}>
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
    case 'boardSet':
      return(
        <div className="App" style={{display: 'flex', background: bgColor}}>
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
          changeState={setBoardState}
          format={format}
          />
        </div>
      );
      case 'register':
       return(
         <div className="App" style={{display:'flex', background: bgColor}}>
         <div className="buttons" style={{margin: "50px"}}>
          <Button 
          margines={'0 auto'}
          text={"Wróć do logowania"} 
          fun={() => {setBoardState('login')}}
          color={"white"}/>
          </div>

         <RegistrationForm/>
         </div>
       )
      default:
        return(
          <div className="App" style={{display:'flex', background: bgColor}}>
          <LoginForm changeBoardState={setBoardState}/>
          </div>
        )

  }

 
}



export default App;
