import React from 'react'
import styled from 'styled-components'

const IconBtn = ({children, ...props }) => {
    const Button = styled.button`
    border: 0;
    outline: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    `
  return (
    <Button {...props}>
        {children}
    </Button>
  )
}

export default IconBtn