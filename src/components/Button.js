import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text}) => {
  return (
    <button 
        style={{backgroundColor:color, display : 'block', textAlign:'center', margin: '0 auto',marginTop: '2vh', padding:'0.5vh',fontSize:'30px'}} 
        className='btn'
    >        {text}
    </button>
  )
}

Button.defaultProps={
    color: 'steelblue'
}

Button.defaultProps={
    text: PropTypes.string,
    color: PropTypes.string,
}
export default Button