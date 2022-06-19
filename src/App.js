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
import axios from 'axios';

function App() {

  //PSEUDO BAZA DANYCH NOTATEK
  const Boards = [];
  
  const [bgColor, setBgColor] = useState('#3F3939');
  const [textColor, setTextColor] = useState('#000000');
  const [textSize, setTextSize] = useState('15');
  const [titleSize, setTitleSize] = useState('25');
  const [format, setFormat] = useState("tablica");
  const [numTask, setNumTask] = useState(1);
  const [boardId, setBoardId] = useState(0);
  const [showNav, setShowNav] = useState(true);
  

  const [boardState, setBoardState] = useState('pies');
  const [ac, setAc] = useState([]);

  const [aa, seta] = React.useState([]);

  const [tytul, setTytul] = React.useState("tytul");
  const [tresc, setTresc] = React.useState("tresc");
  const [data, setData] = React.useState("2022-05-01");
  const [priorytet, setPriorytet] = React.useState(1);
  const [tagi, setTagi] = React.useState(["abc"]);
  const [id, setId] = React.useState("");
  const [usersId, setUsersId] = React.useState([]);
  const [usersList, setUsersList] = React.useState([]);

  function findTask(tyt)
  {
    axios.get('http://localhost:8080/notes/search/findAllByTitle?title='+tyt).then(res => {
     
      setTytul(res.data["_embedded"]["notes"][0].title);
      setTresc(res.data["_embedded"]["notes"][0].contents);
      setData(res.data["_embedded"]["notes"][0].date);
      setPriorytet(res.data["_embedded"]["notes"][0].priority);
      setTagi(res.data["_embedded"]["notes"][0].tags);
      console.log(res.data["_embedded"]["notes"][0].date);
      setId(res.data["_embedded"]["notes"][0].id);
      setUsersId(res.data["_embedded"]["notes"][0].userIds);
    });

    axios.get('http://localhost:8080/users').then(res => {
     setUsersList(res.data["_embedded"]["users"]);
     console.log(usersList);
    });
  }

  function setGet(stan)
  {
      axios.get('http://localhost:8080/notes').then(res => {
      
      seta(res.data["_embedded"]["notes"]);
    });
    setBoardState(stan);
  }

  const f = (id) =>
  {
    setNumTask(id);
  }

  function proba (){
    // axios.get('http://localhost:8080/notes').then(res => {
    //   console.log(res.data["_embedded"]["notes"][0]["title"]);
    // });
    // console.log(abc[0]["title"]);
    // axios.get('http://localhost:8080/boards').then(res => {
    // console.log(res.data["_embedded"]["boards"]);
  }


  const boardStateComponent = () => {
    
    if(format==='lista')
      {
        return(
          <div className="App" style={{display:'flex', background: bgColor}}>
            {showNav && <Nav2 changeBoardState={setGet}
            notatki={aa}
            fun={(title) => {
              findTask(title);                
            }}/>}
           
          <BigTask
            tytul={tytul}
            tresc={tresc}
            data={data}
            priorytet={priorytet}
            tagi={tagi}
            id={id}
            funkcja={()=>{}}
            usersId={usersId}
            usersList={usersList}
          />
          <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh',color:'white',marginTop:'40px'}} onClick={() => {setGet('settings')}}/>
          </div>
  
        );
      }
      else{
        return (
          <div className="App" style={{background: bgColor}}>
            <Nav changeBoardState={setGet}/>
            <Board 
                  textColor={textColor}
                  textSize={textSize}
                  titleSize={titleSize}
                  isSample={false}
                  format={format}
                  //notatki={['1','b']}
                 // notatki={abc[0]}
                  notatki={aa}
                  on
                  funkcja={setShowNav}
              />
            <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh' , color:"white",marginTop:'25px'}} onClick={() => {setGet('settings')}}/>
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
      fun={() => {setGet('board')}}
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
      <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh', color:"white", marginTop:'56px'}} onClick={() => {setGet('board'); proba()}}/>
    </div>
  );

  const groupsState = () => (
    <div className="App" style={{background: bgColor}}>
      <div className="buttons" style={{margin: "50px"}}>
      <Button 
      margines={'0 auto'}
      text={"Strona główna"} 
      fun={() => {setGet('board')}}
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
      fun={() => {setGet('board')}}
      color={"white"}/>
      </div>
      <Account changeBoardState={setGet}/>
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
  <PasswordChange changeBoardState={setGet}/>
</div>)

const addTaskState = () => (
  <div className="App" style={{display: 'flex', background: bgColor}}>
  <div className="buttons" style={{margin: "50px"}}>
  <Button 
  margines={'0 auto'}
  text={"Strona główna"} 
  fun={() => {setGet('board')}}
  color={"white"}/>
  </div>
  <AddTask
    form={format}
    tytul={aa[numTask].tytul}
    tresc={aa[numTask].tresc}
    data={aa[numTask].data}
    priorytet={aa[numTask].priorytet}
    tagi={aa[numTask].tagi}
    funkcja={setGet}/>
</div>
)
const boardSetState = () => (
  <div className="App" style={{display: 'flex', background: bgColor}}>
    <div className="buttons" style={{margin: "50px"}}>
    <Button 
    margines={'0 auto'}
    text={"Strona główna"} 
    fun={() => {setGet('board')}}
    color={"white"}/>
    </div>
    <BoardSet
    boards={Boards}
    changeBoard={setBoardId}
    changeState={setGet}
    format={format}
    />
  </div>
)
const registerState = () => (
  <div className="App" style={{display:'flex', background: bgColor}}>
  <div className="buttons" style={{margin: "50px"}}>
   <Button 
   margines={'0 auto'}
   text={"Wróć do logowania"} 
   fun={() => {setGet('login')}}
   color={"white"}/>
   </div>

  <RegistrationForm/>
  </div>
)

const defaultState = () => (
  <div className="App" style={{display:'flex', background: bgColor}}>
  <LoginForm changeBoardState={setGet}/>
  </div>
)


const RenderStates = ({ val }) => {
  // console.log("xd")
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