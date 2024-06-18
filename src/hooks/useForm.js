import { useState } from 'react'

const useForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState(0);
  const [errorName, setErrorName] = useState('');
  const [errorQuantity, setErrorQuantity] = useState('');
  const [errorPrice, setErrorPrice] = useState('');

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value)
  }

  const handleChangePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  
  const checkErrors = () => {
    if(!name) setErrorName('Ingrese nombre'); else setErrorName('')
    if(!quantity) setErrorQuantity('Ingrese cantidad'); else setErrorQuantity('')
    if(!price) setErrorPrice('Ingrese cantidad'); else setErrorQuantity('')
    
        
  }

  return {
     checkErrors,
     handleChangeQuantity,
     handleChangeName,
     handleChangePrice,
     name, 
     price,
     quantity,
     errorPrice,
     errorQuantity,
     errorName,
  }
}

export { useForm }