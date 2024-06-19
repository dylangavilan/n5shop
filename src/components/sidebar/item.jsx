import React from 'react'
import style from './sidebar.module.scss'
import TrashIcon from '../icons/TrashIcon'
import ActionsItem from './actions'
import IconBtn from './button-icons'
const Item = ({ name, cover, price, amount, id, add, quantity, less, deleteItem }) => {

  return (
    <div className={style.item}>
        <div>
            <img className={style.cover} alt='item' src='https://acdn.mitiendanube.com/stores/002/625/145/products/vrink-original1-bdf9e4605c22415f0116790561201334-1024-1024.jpg'/>
        </div>
        <div className={style.description}>
            <span>{name}</span>
            <span>{price}</span>
        </div>
        <div className={style.options}>
            <IconBtn onClick={deleteItem}>
                <TrashIcon />
            </IconBtn>
            <ActionsItem less={less} add={add} quantity={quantity}/>
        </div>
    </div>
  )
}

export default Item