import {FaUserPlus, FaSignOutAlt} from "react-icons/fa"
import React, {useState} from 'react'
import Avatar from 'react-avatar';
import Button from './Button'
import { margin } from "@mui/system";



const Groups = (props) => {

const [option, setOption] = useState('lista');

return(
      <div>
        <div style={{display: "flex", width: "700px", marginLeft: "50px"}}>
        <Button 
            marginesTop={'50px'}
            margines={'0 auto'}
            text={"Lista grup"} 
            fun={() => {setOption('lista')}}
            color={"white"}/>
        <Button 
            marginesTop={'50px'}
            margines={'0 auto'}
            text={"Stwórz grupę"} 
            fun={() => {setOption('create')}}
            color={"white"}/>
        <Button 
            marginesTop={'50px'}
            margines={'0 auto'}
            text={"Dołącz do grupy"} 
            fun={() => {setOption('join')}}
            color={"white"}/>
        </div>
        {option === 'lista' &&
        <div style={{border: "1px solid black", padding: "50px", margin: "50px", height: "200px", width: "100%"}}>
        <table style={{fontSize:'20px'}}>
          <tr>
            <th>Nazwa</th>
            <th>Hasło</th>
            <th>Użytkownicy</th>
            <th>Akcje</th>
          </tr>
          <tr>
            <td>grupa1</td>
            <td>&#9733;</td>
            <td><div style={{display:'flex'}}>
            <Avatar size='30px' round={true} name={"H"}/>
            <Avatar size='30px' round={true} name={"P"}/>
            <Avatar size='30px' round={true} name={"O"}/>
            </div></td>
            <td><div style={{display:'flex'}}>
            <FaUserPlus onClick={()=> alert()}/>
            <FaSignOutAlt onClick={()=> alert()}/>
            </div></td>
          </tr>
          <tr>
            <td>grupa2</td>
            <td>&#9734;</td>
            <td><div style={{display:'flex'}}>
            <Avatar size='30px' round={true} name={"J"}/>
            <Avatar size='30px' round={true} name={"T"}/>
            </div></td>
            <td><div style={{display:'flex'}}>
            <FaUserPlus onClick={()=> alert() }/>
            <FaSignOutAlt onClick={()=> alert()}/>
            </div></td>
          </tr>
          <tr>
            <td>grupa3</td>
            <td>&#9733;</td>
            <td><div style={{display:'flex'}}>
            <Avatar size='30px' round={true} name={"A"}/>
            <Avatar size='30px' round={true} name={"B"}/>
            <Avatar size='30px' round={true} name={"C"}/>
            </div></td>
            <td><div style={{display:'flex'}}>
            <FaUserPlus onClick={()=> alert()}/>
            <FaSignOutAlt onClick={()=> alert()}/>
            </div></td>
          </tr>
        </table>
        </div>}
      {option === 'create' &&
        <div style={{border: "1px solid black", padding: "50px", margin: "50px", width: "700px"}}>
          <div style={{display:'flex'}}>
            <p style={{fontSize:'20px', margin:'20px'}}>nazwa</p>
            <input 
                style={{fontSize:'20px', height:'30px', marginLeft:'20px', marginTop:'20px', width:'150px', textAlign:'center'}}
                type="text" 
                name="groupName" 
            />
           </div>
           <div style={{display:'flex'}}>
            <input 
                style={{fontSize:'20px', height:'30px', marginLeft:'20px', marginTop:'20px', width:'50px', textAlign:'center'}}
                type="checkbox" 
                name="isPassword" 
            />
            <p style={{fontSize:'20px', margin:'20px'}}>chroniona hasłem</p>
           </div>
           <div style={{display:'flex'}}>
            <p style={{fontSize:'20px', margin:'20px'}}>hasło</p>
            <input 
                style={{fontSize:'20px', height:'30px', marginLeft:'20px', marginTop:'20px', width:'150px', textAlign:'center'}}
                type="password" 
                name="password" 
            />
           </div>
           <p style={{fontSize:'20px', margin:'20px'}}>użytkownicy</p>
          <div style={{display:'flex'}}>
            <Avatar size='50px' round={true} name={"H"}/>
            <Avatar size='50px' round={true} name={"P"}/>
            <Avatar size='50px' round={true} name={"O"}/>
          </div>
          <div style={{display:'flex'}}>
            <input 
                  style={{fontSize:'20px', height:'30px', marginLeft:'20px', marginTop:'20px', width:'150px', textAlign:'center'}}
                  type="text" 
                  defaultValue="nick"
                  name="nick" 
              />
            <Button 
            marginesTop={'20px'}
            margines={'0 auto'}
            text={"Dodaj użytkownika"} 
            fun={() => {alert("dodawanie")}}
            color={"white"}/>
            <Button 
            marginesTop={'20px'}
            margines={'0 auto'}
            text={"Stwórz grupę"} 
            fun={() => {alert("tworzenie")}}
            color={"white"}/>
          </div>
      </div>}
      {option === 'join' &&
        <div style={{border: "1px solid black", padding: "50px", margin: "50px", width: "700px"}}>
          <div style={{display:'flex'}}>
            <p style={{fontSize:'20px', margin:'20px'}}>nazwa</p>
            <input 
                style={{fontSize:'20px', height:'30px', marginLeft:'20px', marginTop:'20px', width:'150px', textAlign:'center'}}
                type="text" 
                name="groupName" 
            />
           </div>
           <div style={{display:'flex'}}>
            <p style={{fontSize:'20px', margin:'20px'}}>hasło (opcjonalnie)</p>
            <input 
                style={{fontSize:'20px', height:'30px', marginLeft:'20px', marginTop:'20px', width:'150px', textAlign:'center'}}
                type="password" 
                name="password" 
            />
           </div>
           <div style={{display:'flex'}}>
            <Button 
            marginesTop={'20px'}
            margines={'0 auto'}
            text={"Dołącz do grupy"} 
            fun={() => {alert("dołączanie")}}
            color={"white"}/>
          </div>
      </div>}
    </div>
  );
}


export default Groups