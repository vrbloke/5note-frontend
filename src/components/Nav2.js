import React, { useState } from 'react'
import Button from './Button'
import Select from 'react-select'
import DraggableList from "react-draggable-lists";
import TextField from "@material-ui/core/TextField";


const Nav2 = (props) => {

      const [isFiltr, setFiltr] = useState(false);
      const [isTag, setTag] = useState(false);
      const [tag, settag] = useState("");

      const options = [
        { value: 'data_d', label: 'Data (od najstarszej)' },
        { value: 'data_g', label: 'Data (od najnowszej)' },
        { value: 'priorytet_d', label: 'Priorytet (od największego)' },
        { value: 'priorytet_g', label: 'Priorytet (od najmniejszego)' }
      ]

      const onSubmit = (e) => {
        e.preventDefault()
    
        if(!tag){
            alert('Dodaj tag')
            return
        }
        return(
          <div>Tag</div>
        );
    }

      const listItems = [
        "Entertainment",
        "Private Time",
        "Rest",
        "Meal",
        "Exercise",
        "Work",
        "Home Projects",
        "Family"
      ];


  return (
    <div style={{marginTop:'35px'}}className='buttons' >
        <div style={{display:'flex'}}>
        <Button
          marginesTop={'2vh'}
          margines={'20px'}
          color={'white'}
          text={'Konto'}
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
            <option value='data__g'>Data (od najnowszejj)</option>
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
                    name="age" 
                />
                <p style={{fontSize:'20px', margin:'20px'}}>Górny limit priorytetu</p>
           </div>
           <div style={{display:'flex'}}>
                <input 
                    style={{fontSize:'20px', height:'30px', marginLeft:'20px', marginTop:'20px', width:'50px', textAlign:'center'}}
                    type="number" 
                    name="age" 
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
                id="topping"
                name="topping"
                value="Paneer"
                //   checked={isChecked}
                //   onChange={handleOnChange}
            />
            Wszystkie wybrane tagi
            <div>        
            </div>
            <form style={{marginLeft:'20px', marginBottom:'10px'}} onSubmit={onSubmit}>
                <label>
                <input style={{fontSize:'20px', width:'200px'}} type='text' placeholder="Dodaj Tag" value={tag} onChange={(e) => settag(e.target.value)}/> </label>
                <input style={{fontSize:'20px'}} type="submit" value="Dodaj" />
            </form>

        </div>}
        <div>
            <div style={{marginTop:'30px'}}>
                <DraggableList width={300} height={50} rowSize={1}>
                    <div style={{border:'1px solid black', marginLeft:"50px", fontSize:'20px',padding:'5px',textAlign:'center'}}>Task1</div>
                    <div style={{border:'1px solid black', marginLeft:"50px", fontSize:'20px',padding:'5px',textAlign:'center'}}>Task2</div>
                    <div style={{border:'1px solid black', marginLeft:"50px", fontSize:'20px',padding:'5px',textAlign:'center'}}>Task3</div>
                    <div style={{border:'1px solid black', marginLeft:"50px", fontSize:'20px',padding:'5px',textAlign:'center'}}>Task4</div>
                    <div style={{border:'1px solid black', marginLeft:"50px", fontSize:'20px',padding:'5px',textAlign:'center'}}>Task5</div>
                </DraggableList>
            </div>
        </div>
    </div>

  )
}

export default Nav2