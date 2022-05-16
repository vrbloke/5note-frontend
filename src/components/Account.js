import React from 'react'
// import Avatar from 'react-avatar';
import Button from './Button'


const Account = (props) => {

return(
      <div style={{border: "1px solid black", padding: "50px", margin: "50px", height: "200px"}}>
        <div style={{display: "flex"}}>
          <div style={{display: "block", width: "50%"}}>
          {/* <Avatar name={"H"} round={true} style={{margin: "20px"}}></Avatar> */}
          </div>
          <div style={{display: "block"}}>
            <p>login</p>
            <input id="nickInput" type="text" defaultValue={"nick"} disabled={true}></input>
            <Button 
            margines={'0 auto'}
            text={"Zmień nick"} 
            fun={() => {document.getElementById("nickInput").disabled = document.getElementById("nickInput").disabled? false : true}}
            color={"white"}/>
            </div>
        </div>
      <div style={{display: "flex", margin: "20px"}}>
      <div style={{display: "block", margin: "10px"}}>
      <Button 
          margines={'0 auto'}
          text={"Zmień hasło"} 
          fun={() => {props.changeBoardState('passwordChange')}}
          color={"white"}/>
      </div>
      <div style={{display: "block", margin: "10px"}}>
      <Button 
          margines={'0 auto'}
          text={"Wyloguj"} 
          fun={() => {alert("wylogowano")}}
          color={"white"}/>
      </div>
      </div>
    </div>
  );
}


export default Account