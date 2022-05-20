import React, { useState } from 'react'
import Button from './Button'
import DraggableList from "react-draggable-lists";
import { v4 as uuidv4 } from 'uuid';
import {RiCloseFill} from "react-icons/ri";


const Nav2 = (props) => {

  const initialList = [

  ];
  

      const [isFiltr, setFiltr] = useState(false);
      const [isTag, setTag] = useState(false);
      const [list, setList] = React.useState(initialList);
      const [name, setName] = React.useState('');

      function handleChange(event) {
        setName(event.target.value);
      }

      function handleAdd() {
        const newList = list.concat({ name, id: uuidv4() });
    
        setList(newList);
    
        setName('');
      }

      function handleRemove(id){
        const newList = list.filter((item) => item.id !== id);

        setList(newList);
      }

  return (
    <div style={{marginTop:'35px'}}className='buttons' >
        <div style={{display:'flex'}}>
        <Button
          marginesTop={'2vh'}
          margines={'20px'}
          color={'white'}
          text={'Konto'}
          fun={() => props.changeBoardState('account')}
        />
        <Button
          marginesTop={'2vh'}
          margines={'20px'}
          color={'white'}
          text={'Dodaj notatkę'}
        />
        </div>
        <div style={{display:'flex'}}>
        <Button
          marginesTop={'2vh'}
          margines={'20px'}
          color={'white'}
          text={' Grupy'}
          fun={() => props.changeBoardState('groups')}
        />
        <Button
          marginesTop={'2vh'}
          margines={'20px'}
          color={'white'}
          text={'Zmień tablicę'}
        />
        </div>

        <div  style={{display:'flex'}}>
        <select style={{margin:'20px', fontSize:'20px', width:'200px', padding:'3px',marginTop:'30px'}}>
            <option selected value=''>Sortuj</option>
            <option value='data_d'>Data (od najstarszej)</option>
            <option value='data__g'>Data (od najnowszej)</option>
            <option value='priorytet_d'>Priorytet (od najmniejszego)</option>
            <option value='priorytet_g'>Priorytet (od największego)</option>
        </select>
        <Button
          marginesTop={'2vh'}
          margines={'20px'}
          color={'white'}
          text={'Filtruj'}
          fun={() => {setFiltr(!isFiltr);setTag(false)}}
        />
        </div>
       {isFiltr && <div style={{border:'1px solid black', margin:'20px', paddingBottom:'20px'}}>
           <div style={{display:'flex'}}>
                <input 
                    style={{fontSize:'20px', height:'30px', marginLeft:'20px', marginTop:'20px', width:'50px', textAlign:'center'}}
                    type="number"
                    min={1}
                    max={10}
                />
                <p style={{fontSize:'20px', margin:'20px'}}>Górny limit priorytetu</p>
           </div>
           <div style={{display:'flex'}}>
                <input 
                    style={{fontSize:'20px', height:'30px', marginLeft:'20px', marginTop:'20px', width:'50px', textAlign:'center'}}
                    type="number" 
                    min={1}
                    max={10}

                />
                <p style={{fontSize:'20px', margin:'20px'}}>Dolny limit priorytetu</p>
           </div>
            <Button
                text={'Tagi'}
                margines={'0 auto'}
                width_p={'100px'}
                fun={() => {setTag(!isTag)}}
            />
        </div>}

        {isTag && <div style={{fontSize:'20px',border:'1px solid black', margin:'20px'}}>
            <input
                style={{margin:'20px', fontSize:'20px'}}
                type="checkbox"
                //   checked={isChecked}
                //   onChange={handleOnChange}
            />
            Wszystkie wybrane tagi
            <div>        
            </div>

            <div>
                {list.map((item) => (
                  <div style={{display:'flex',marginLeft:'20px'}}>
                    <p style={{marginTop:'2px'}} key={item.id}>{item.name}</p>
                    <RiCloseFill style={{color:'red', marginTop:'2px', fontSize:'30px'}} onClick={() =>handleRemove(item.id)}/>
                  </div>
                ))}
            </div>
                <div>
                <input style={{fontSize:'20px', width:'200px', margin:'20px'}} type='text' placeholder="Dodaj Tag" value={name} onChange={handleChange}/>
                <button style={{fontSize:'20px'}} type="button" onClick={handleAdd}>
                  Dodaj
                </button>
                </div>

        </div>}
        <div>
            <div style={{marginTop:'30px'}} >

          <DraggableList width={300} height={50} rowSize={1}>
            {(props.notatki).map((item) => (
              <div key={item.id} style={{border:'1px solid black', marginLeft:"50px", fontSize:'20px',padding:'5px',textAlign:'center'}} onDoubleClick={props.fun}>{item.tytul}
            </div> ))}      
         </DraggableList>

            </div>
        </div>
    </div>

  )
}

export default Nav2