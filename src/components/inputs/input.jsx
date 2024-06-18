import React from 'react'

const Input = ({errorMessage, ...props}) => {
  return (
    <>
    <input
        // className={}
        {...props}
    />
     {errorMessage && <span>{errorMessage}</span>} 
    </>
  )
}

export default Input;