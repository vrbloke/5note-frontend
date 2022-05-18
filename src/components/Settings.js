import React from 'react'
import { SketchPicker } from 'react-color';
import { BsYoutube } from 'react-icons/bs'
import Button from './Button'
import Task from './Task'
import Select from 'react-select'
import NumericInput from 'react-numeric-input';
import { style } from 'react-numeric-input';

const Settings = (props) => {

    const options = [
        { value: 'lista', label: 'Lista' },
        { value: 'tablica', label: 'Tablica' }
      ]
      
    function handleBgColor(color) {
        props.changeBgColor(color.hex)
    }

    function handleTextColor(color) {
        props.changeTextColor(color.hex)
    }

    return (
    <div style={{marginLeft: "20%"}} >
        <h3 style={{ color: 'lightGray' }}>Format notatek:</h3>
        <Select placeholder = "Wybierz format notatek" options={options} defaultValue={"lista"} onChange={ (value) => { props.changeFormat(value.value)} }/>
        <div>
        <div style={{float: "left", margin: "10px"}}>
        <h3 style={{ color: 'lightGray' }}>Kolor tła:</h3>
        <SketchPicker 
            color={ props.bgColor } 
            onChangeComplete={ handleBgColor }/>
        </div>
        <div style={{float: "left", margin: "10px"}}>
        <h3 style={{ color: 'lightGray' }}>Kolor tekstu:</h3>
        <SketchPicker 
            color={ props.textColor } 
            onChangeComplete={ handleTextColor }/>
        </div>
        </div>
        
        
        <h3 style={{ color: 'lightGray'}}>Wielkość tytułu:</h3>
        <NumericInput min={0} max={50} defaultValue={25} onChange={ (size) => { props.changeTitleSize(size) } }/>
        <h3 style={{ color: 'lightGray' }}>Wielkość tekstu:</h3>
        <NumericInput min={0} max={50} defaultValue={15} onChange={ (size) => { props.changeTextSize(size) } }/>
    </div>
    )
}


export default Settings



