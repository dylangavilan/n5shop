import React from 'react'
import styled from 'styled-components';
import { lightPurple } from './constants';
const PrimaryBtn = ({children, type, ...props}) => {
  const Button = styled.button`
    background-color: ${type === 'primary' ? lightPurple : "white" };
    color: ${type === 'primary' ? 'white' : lightPurple};
    padding: 12px 24px;
    border: ${lightPurple} ${type === 'primary' ? 'none' : `1px solid `};
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