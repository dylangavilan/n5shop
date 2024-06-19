import React, { useEffect, useState } from 'react'
import styles from './sidebar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addMore, clear, handleOpen, lessOne, removeFromCart } from '../../store/cartSlice';
import Item from './item';
import IconX from '../icons/xIcon';
import { updateQuantitys } from '../../store/productsSlice';
import Button from '../button/button';
// import SecondaryBtn from '../button/secondary';

const CartSidebar = ({isOpen}) => {
  const { items } = useSelector((state) => state.cart)
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch()
  useEffect(() => {
    const total = items.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem.quantity * currentItem.price);
    }, 0);
    setTotalPrice(total)
  }, [items])
  
  const onClose = () => {
    dispatch(handleOpen())
  }
  const addItem = (id) => {
    dispatch(addMore(id))
  }
  const removeOne = (id) => {
    dispatch(lessOne(id))
  }

  const deleteItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const clearItems = () => {
    dispatch(clear())
  }

  const buyItems = () => {
    const parsedItems = items.map((el) => {
      return {id: el.id, quantity: el.quantity}
    })
    dispatch(updateQuantitys(parsedItems));
    dispatch(clear());
  }

  return (
    <div className={`${styles.sidebar} ${isOpen && styles.open}`}>
      <div className={styles.header}>
        <div></div>
        <h2 className={styles.title}>Tu Carrito</h2>
        <button onClick={onClose}><IconX /></button>
      </div>
      {items.length === 0 ? 
        <h3 className={styles.title}>No hay productos en su carrito</h3> :
        <div className={styles.container}>
          <div className={styles.cardContainer}> 
            {items?.map((el) => (
              <Item name={el.name} 
                    price={el.price} 
                    quantity={el.quantity} 
                    add={() => addItem(el.id)} 
                    less={() => removeOne(el.id)}  
                    deleteItem={() => deleteItem(el.id)}
                    key={`item ${el.id}`}/>
            ))}
          </div>
          <div className={styles.paymentContainer}>
            <div className={styles.total}>
              <span>TOTAL</span>
              <span>${totalPrice}</span>
            </div>
            <Button type='primary' onClick={buyItems}>Comprar</Button>
            <Button type='secondary' onClick={clearItems}>Limpiar</Button>
          </div>
        </div>
      }

    </div>
  )
}

export default CartSidebar;