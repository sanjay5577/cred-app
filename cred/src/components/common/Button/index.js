import React from 'react'
import './button.css'
import '../../../common/styles/commonClasses.css'

const Button = ({buttonText , handleOnClick , customClass , prefix}) => {
  return (
    <div className= {`flex absolute-center button-wrapper ${customClass}`} onClick={handleOnClick}> 
    {prefix}{buttonText}
    </div>
  )
}

export default Button