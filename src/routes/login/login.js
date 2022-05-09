import {useEffect, useState} from "react";
import axios from "axios";

export function Login() {
    const [actionType, setActionType] = useState('');
    const [loginValue, setLoginValue] = useState();
    const [passwordValue, setPasswordValue] = useState();

    useEffect(function handleSubmit() {
        switch(actionType) {
            case '':
                break
            case 'login':
            case 'register':
                console.log(actionType)
                console.log(loginValue)
                console.log(passwordValue)
                axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
                    .then(re => {
                        console.log(re.data)
                    })
        }
    }, [actionType])

    function submitLogin(e) {
        setActionType('login')
        e.preventDefault()
    }

    function submitRegister(e) {
        setActionType('register')
        e.preventDefault()
    }

    return (
        <div className="center-div">
            <div className="box">
                <form id="login-form">
                    <label>
                        Login
                        <input type="text" id="login" onChange={e => setLoginValue(e.target.value)}/>
                    </label>
                    <label>
                        Hasło
                        <input type="password" id="password" onChange={e => setPasswordValue(e.target.value)}/>
                    </label>
                    <input type="button" value="Zaloguj" id="submit-login" className="button" onClick={submitLogin}/>
                    <input type="button" value="Rejestracja" id="submit-register" className="button" onClick={submitRegister}/>
                    <p>Current state: {actionType}, {loginValue}, {passwordValue}</p>
                </form>
            </div>
        </div>
    )
}