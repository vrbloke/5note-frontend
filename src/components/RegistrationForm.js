import React, {useState} from 'react';
import '../index.css'
import Button from './Button'

function RegistrationForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="">
                  <label className="form__label" for="firstName">Login </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Haslo </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Powtorz haslo </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
          <Button
          marginesTop={'2vh'}
          margines={'0 auto'}
          color={'white'}
          text={'Zarejestruj'}
          />
          </div>
      </div>      
    )       
}
export default RegistrationForm;