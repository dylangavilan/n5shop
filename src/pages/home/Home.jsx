import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/card';
import { addToCart, removeFromCart } from '../../store/cartSlice';

const Home = () => {
  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch();
  const {items } = useSelector(state => state.cart)
  const addItem = (item) => {
    dispatch(addToCart(item))
  }
  const deleteItem = (id) => {
    dispatch(removeFromCart(id))
  }
  
  return (
    <div className='home-container'>
      <h1 className='section-title'>Productos</h1>
      <div className='card-container'> 
        {products?.map((product) => {
          const isAdded = items.some((el) => el.id === product.id);
          return (
            <Card name={product.name} 
                  amount={product.amount} 
                  price={product.price} 
                  isAdded={isAdded}
                  addItem={() => addItem(product)} 
                  deleteItem={() => deleteItem(product.id)}
                  key={`product ${product.id}`}
                  img='https://acdn.mitiendanube.com/stores/002/625/145/products/vrink-original1-bdf9e4605c22415f0116790561201334-1024-1024.jpg'/>
          )
        })}

      </div>
    </div>
  )
}

export default Home;