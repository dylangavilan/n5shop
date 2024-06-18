import React from 'react'
import styled from 'styled-components';
import { darkPurple, lightPurple, mediumPurple } from './constants';
const PrimaryBtn = ({children, ...props}) => {
  const Button = styled.button`
    background-color: ${lightPurple};
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  `
  return (
    <Button {...props}>
        {children}
    </Button>
  )
}

export default PrimaryBtn;