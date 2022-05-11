import React from 'react'
import Button from './Button'


const Nav = () => {
  return (
    <div className='buttons' >
        <h1>Nazwa Tablicy</h1>
        <Button
          color={'white'}
          text={'Konto'}
        />
        <Button
          color={'white'}
          text={'Grupy'}
        />
        <Button
          color={'white'}
          text={'Dodaj notatkę'}
        />
        <Button
          color={'white'}
          text={'Zmień tablicę'}
        />
    </div>
  )
}

export default Nav