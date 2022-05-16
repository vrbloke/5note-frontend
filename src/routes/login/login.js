import {useEffect, useState} from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import {api, saltN} from "../helpers";

export function Login() {
    const [actionType, setActionType] = useState('');
    const [loginValue, setLoginValue] = useState();
    const [passwordValue, setPasswordValue] = useState();
    const [message, setMessage] = useState('');

    useEffect(function handleSubmit() {
        console.log(`Action: ${actionType}\nLogin: ${loginValue}\nPassword: ${passwordValue}`)
        switch(actionType) {
            case '':
                break
            case 'login':
                setActionType('')
                axios.get(api+`/users/search/findByUsername?username=${loginValue}`)
                    .then(res => {
                        return axios.post(api+`/login?username=${loginValue}&password=${passwordValue}`)
                    })
                    .then(res => {
                        if(!(res.status === 200)) {
                            setMessage('Błędne hasło')
                        }
                        else {
                            setMessage('Logowanie udane!')
                        }
                    })
                    .catch(err => {
                        switch(err.response.status) {
                            case 404:
                                setMessage('Nie istnieje użytkownik o takiej nazwie')
                                break
                            default:
                                setMessage('Nie można przeprowadzić autentykacji')
                        }
                    })
                break
            case 'register':
                setActionType('')
                bcrypt.hash(passwordValue, saltN, (err,h) => {
                    if(err) {setMessage('Błąd w rejestracji')}
                    console.log(h);
                    axios.post(api+'/users', {username: loginValue, hash: h})
                        .then(res => {
                            console.log(res)
                        })
                        .catch(err => {
                            setMessage('Błąd w rejestracji')
                        })
                })
                break
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
                    <p>Message: {message}</p>
                </form>
            </div>
        </div>
    )
}