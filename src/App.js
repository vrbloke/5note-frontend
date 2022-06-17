import './App.css';
import Nav from './components/Nav'
import Nav2 from './components/Nav2'
import Board from './components/Board'
import Settings from './components/Settings'
import {AiTwotoneSetting} from "react-icons/ai";
import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";

import Button from './components/Button';
import Task from './components/Task';
import BigTask from './components/BigTask';
import Account from './components/Account';
import PasswordChange from './components/PasswordChange';
import Groups from './components/Groups';
import AddTask from './components/AddTask';
import BoardSet from './components/BoardSet';
import NewBoard from './components/NewBoard';
import BoardsJson from './Boards.json' 
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import axios from 'axios';

function App() {
  console.log("bbbb");
  var abc;
  
  //PSEUDO BAZA DANYCH NOTATEK
  const Boards = abc;
  
  const [bgColor, setBgColor] = useState('#3F3939');
  const [textColor, setTextColor] = useState('#000000');
  const [textSize, setTextSize] = useState('15');
  const [titleSize, setTitleSize] = useState('25');
  const [format, setFormat] = useState("tablica");
  const [numTask, setNumTask] = useState(1);
  const [boardId, setBoardId] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const [boardState, setBoardState] = useState('start');



  const f = (id) =>
  {
    setNumTask(id);
    console.log(id);
    console.log('aaaaas');
  }

  function proba (){
    axios.get('http://localhost:8080/boards').then(res => {
      console.log(res.data["_embedded"]["boards"]);
    });
  }


  const boardStateComponent = () => {
    if(format==='lista')
      {
        return(
          <div className="App" style={{display:'flex', background: bgColor}}>
            {showNav && <Nav2 changeBoardState={setBoardState}
            notatki={Boards[boardId].notatki}
            fun={(id)=>f(id)}/>}
           
          <BigTask
            form={format}
            tytul={Boards[boardId].notatki[numTask].tytul}
            tresc={Boards[boardId].notatki[numTask].tresc}
            data={Boards[boardId].notatki[numTask].data}
            priorytet={Boards[boardId].notatki[numTask].priorytet}
            tagi={Boards[boardId].notatki[numTask].tagi}
            funkcja={setShowNav}
            numTask={numTask}
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
                  notatki={['1','b']}
                  //notatki={Boards[boardId].notatki}
                  on
                  funkcja={setShowNav}
              />
            <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh' , color:"white",marginTop:'25px'}} onClick={() => {setBoardState('settings')}}/>
          </div>
        );
      }
  }

  const settingsState = () => (
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
      <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh', color:"white", marginTop:'56px'}} onClick={() => {setBoardState('board'); proba()}}/>
    </div>
  );

  const groupsState = () => (
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
  )

  const accountState = () => (
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
  )

  const passwordChangeState = () => (<div className="App" style={{background: bgColor}}>
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
</div>)

const addTaskState = () => (
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
)
const boardSetState = () => (
  <div className="App" style={{display: 'flex', background: bgColor}}>
    <div className="buttons" style={{margin: "50px"}}>
    <Button 
    marginesTop={"2vh"}
    margines={'0 auto'}
    text={"Strona główna"} 
    fun={() => {setBoardState('board')}}
    color={"white"}/>
    <Button 
    marginesTop={"2vh"}
    margines={'0 auto'}
    text={"Nowa tablica"} 
    fun={() => {setBoardState('newBoard')}}
    color={"white"}/>
    <input style={{marginTop: "2vh", width: "180px", height: "30px"}} id='search' />
    <h3 style={{textAlign: "center", color: "white", marginTop: "2vh", width: "180px", height: "30px"}}>{searchInput === "" ? "Wszystkie tablice" : "Tablice zawierające: "+searchInput}</h3>
    <Button 
    marginesTop={"2vh"}
    margines={'0 auto'}
    text={"Szukaj"} 
    fun={() => {
      var lowerCase = document.getElementById('search').value.toLowerCase();
      setSearchInput(lowerCase);
    }}
    color={"white"}/>
    </div>
    <BoardSet
    boards={Boards}
    changeBoard={setBoardId}
    changeState={setBoardState}
    format={format}
    search={searchInput}
    setSearch={setSearchInput}
    />
  </div>
)
const newBoardState = () => (
  <div className="App" style={{display: 'flex', background: bgColor}}>
    <div className="buttons" style={{margin: "50px"}}>
    <Button 
    marginesTop={"2vh"}
    margines={'0 auto'}
    text={"Strona główna"} 
    fun={() => {setBoardState('board')}}
    color={"white"}/>
    </div>
    <NewBoard
    changeBoardState={setBoardState}
    />
  </div>
)
const registerState = () => (
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

const defaultState = () => (
  <div className="App" style={{display:'flex', background: bgColor}}>
  <LoginForm changeBoardState={setBoardState}/>
  </div>
)


const RenderStates = ({ val }) => {
  console.log("xd")
  switch(val) {
    case 'board': 
      return boardStateComponent();
    case 'settings':
      return settingsState();
    case 'groups':
      return groupsState();
    case 'account':
      return accountState();
    case 'passwordChange': 
      return passwordChangeState();
    case 'addTask': 
      return addTaskState();
    case 'boardSet': 
      return boardSetState();
    case 'newBoard': 
      return newBoardState();
    case 'register': 
      return registerState();
    default: 
      return defaultState();
  }
}

  return (
   <>
    <RenderStates val={boardState} />
   </>
  )

 
}



export default App;