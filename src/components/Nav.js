import React from 'react'
import Button from './Button'
import axios from 'axios';

const Nav = (props) => {
  return (
    <div className='buttons' >
        <h1 style={{ color: 'lightGray' }}>Nazwa Tablicy</h1>
        <Button
          marginesTop={'2vh'}
          margines={'0 auto'}
          color={'white'}
          text={'Test POST'}
          //text={'Konto'}
          fun={//() => props.changeBoardState('account')}
            () => axios.post('http://localhost:8080/boards', {
              "title": "Testowa notatka",
              "contents": "Zawartość testowej notatki",
              "userIds": ["sd123gssli12j", "1209sdjklsdngr4p"],
              "groupIds": ["2131asdafspiqfwikwp"]
              }).then(res => {
              console.log(res);
            })}
        />
        <Button
          marginesTop={'2vh'}
          margines={'0 auto'}
          color={'white'}
          //text={'Grupy'}
          text={'Test GET'}
          fun={//() => props.changeBoardState('groups')}

          () => 
          axios.get('http://localhost:8080/boards').then(res => {

            console.log(res.data["_embedded"]["boards"]);
          })}

        />
        <Button
          marginesTop={'2vh'}
          margines={'0 auto'}
          color={'white'}
          text={'Dodaj notatkę'}
          fun={() => props.changeBoardState('addTask')}
        />
        <Button
          marginesTop={'2vh'}
          margines={'0 auto'}
          color={'white'}
          text={'Zmień tablicę'}
          fun={() => props.changeBoardState('boardSet')}
        />
    </div>
  )
}

export default Nav