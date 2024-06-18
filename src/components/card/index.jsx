import React from 'react'

const Card = ({ name, img, price, amount, addItem }) => {
  return (
    <div className='card'>
        <div className='card-img'>
            <img src={img} alt="" />
        </div>
        <div className='card-detail'>
            <span className='price'>${price}</span>
            <h3 className='card-title'>{name}</h3>
            <button onClick={amount > 0 ? addItem : null} className='card-btn'>{amount > 0 ? 'Agregar' : 'Sin stock'}</button>
        </div>
    </div>
  )   
}

export default Card;