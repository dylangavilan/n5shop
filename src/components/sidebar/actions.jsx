import React from 'react'
import styled from 'styled-components'
import AddIcon from '../icons/AddIcon'
import MinusIcon from '../icons/MinusIcon'
import IconBtn from './button-icons'


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`


const Quantity = styled.span`
  display: flex;
  align-items: center;
`

const ActionsItem = ({quantity, add, less}) => {
  return (
    <Wrapper>
        <IconBtn onClick={less}>
            <MinusIcon />
        </IconBtn>
        <Quantity>{quantity}</Quantity>
        <IconBtn onClick={add}>
            <AddIcon />
        </IconBtn>
    </Wrapper>
  )
}

export default ActionsItem
