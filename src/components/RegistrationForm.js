import React from 'react'
import Button from './Button'
import axios from 'axios'

import { useState } from 'react';
export default function RegistrationForm() {


const [login, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [usersList, setUsersList] = React.useState('null');
const [usersList2, setUsersList2] = React.useState(null);
const [newUserID,setNewUserID] = useState(-27);

const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState('');


const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};


const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};


const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};


const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8080/users/search/findByUsername?username='+login).then(res => {
        setUsersList(res.data);
    });
    console.log(usersList);
    axios.get('http://localhost:8080/users').then(res => {
        setUsersList2(res.data["_embedded"]["users"]);
        console.log(res.data["_embedded"]["users"]);
    });   

    if (login === '' || email === '' || password === '') {
    setError('noData');
    }
    else if (email!==password) {
    setError('wrongPass')
    }
    else if (usersList != null) 
    {
        setError('userExists')
    }
    else
    {
    // setNewUserID(1)    
    setSubmitted(true);
    setError('noError');
}
};

const successMessage = () => {
    
    
        if(submitted) { setSubmitted(false); alert('Uzytkownik '+login.toString()+ ' został zarejestrowany!!');}
        //  axios({
        //     method: 'post',
        //     url: '/users/'+this.newUserID.toString(),
        //     data: {
        //       username: this.newUserID,
        //       password: this.password.toString()
        //     }
        //   });}
    };
    

const errorMessage = () => {

    if (error==='noData') { setError('noError'); alert("Musisz wypełnić wszystkie pola");  }
    else if(error === 'wrongPass') { setError('noError'); alert("Brak zgodności haseł");  }
    else if(error === 'userExists') { setError('noError'); alert("Login niedostepny");  }

};



return (
    
<div className="form" style={{
        border: "1px solid white",
        padding: "50px",
        marginLeft: "25%",
        marginTop: "8%",
        height: "300px",
        borderRadius: "12px",
        color: "lightgray",
      }}>
{errorMessage()}
{successMessage()}

<div  style={{ flexDirection: "column", width: "200px" }}>
<form>
{/* Labels and inputs for form data */}
<label className="label"><p>Login:</p></label>
<input onChange={handleName} className="input"
value={login} type="text" />

<label className="label"><p>Hasło:</p></label>
<input onChange={handleEmail} className="input"
value={email} type="password" />

<label className="label"><p>Powtórz hasło</p></label>
<input onChange={handlePassword} className="input"
value={password} type="password" />
<Button
          marginesTop={"2vh"}
          margines={"0 auto"}
          text={"Zarejstruj"}
          fun={handleSubmit}
          color={"white"}
        />

</form>
</div>
</div>
);
}
