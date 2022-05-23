import React from 'react'
import Button from './Button'


const RegistrationForm = (props) => {

return(
    <div style={{border: "1px solid white", padding: "50px", marginLeft: "20%",marginTop: "8%",height: "300px",borderRadius: "12px",color: "lightgray"}}>
        <div style={{flexDirection: "column", width: "200px"}}>
        <form>
            <label>
                <p>Login:</p>
                <input type="text" name="login" />
            </label>
            <label>
                <p>Hasło:</p>
                <input type="password" name="Password" />
            </label>
            <label>
                <p>Powtórz hasło:</p>
                <input type="password" name="repeatPassword" />
            </label>
        </form>
        <Button 
        marginesTop={'2vh'}
        margines={'0 auto'}
        text={"Zarejstruj"} 
        fun={() => {alert("Uzytkownik został zarejestrowany")}}
        color={"white"}/>
        </div>
    </div>
  );
}


export default RegistrationForm