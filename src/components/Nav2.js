import React from 'react'
import Button from './Button'
import Select from 'react-select'
import DraggableList from "react-draggable-lists";

const Nav2 = () => {

      const options = [
        { value: 'data_d', label: 'Data (od najstarszej)' },
        { value: 'data_g', label: 'Data (od najnowszej)' },
        { value: 'priorytet_d', label: 'Priorytet (od największego)' },
        { value: 'priorytet_g', label: 'Priorytet (od najmniejszego)' }
      ]

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
        />
        </div>
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