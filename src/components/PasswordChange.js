import React from 'react'
import Avatar from 'react-avatar';
import Button from './Button'


const PasswordChange = (props) => {

return(
    <div style={{border: "1px solid black", padding: "50px", margin: "50px", height: "200px", display: "flex"}}>
        <div style={{flexDirection: "column", width: "200px"}}>
        <form>
            <label>
                Poprzednie hasło:
                <input type="text" name="oldPassword" />
            </label>
            <label>
                Nowe hasło:
                <input type="password" name="newPassword" />
            </label>
            <label>
                Powtórz hasło:
                <input type="password" name="repeatPassword" />
            </label>
        </form>
        <Button 
        marginesTop={'2vh'}
        margines={'0 auto'}
        text={"Zmień hasło"} 
        fun={() => {alert("zmiana hasła")}}
        color={"white"}/>
        </div>
    </div>
  );
}


export default PasswordChange