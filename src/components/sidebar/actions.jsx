import React from 'react'
import styled from 'styled-components'
import AddIcon from '../icons/AddIcon'
import MinusIcon from '../icons/MinusIcon'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
`

const Quantity = styled.span`
  display: flex;
  align-items: center;
`

const ActionsItem = ({quantity, add, less}) => {
  return (
    <Wrapper>
        <Button onClick={less}>
            <MinusIcon />
        </Button>
        <Quantity>{quantity}</Quantity>
        <Button onClick={add}>
            <AddIcon />
        </Button>
    </Wrapper>
  )
}

export default ActionsItem
