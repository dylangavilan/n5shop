import React from 'react'

const Input = ({errorMessage, ...props}) => {
  return (
    <>
    <input
        {...props}
    />
     {errorMessage && <span className='error-message'>{errorMessage}</span>} 
    </>
  )
}

export default Input;