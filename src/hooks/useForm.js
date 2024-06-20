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
    let error = false;
    if(!name) {
        setErrorName('Ingrese nombre'); 
        error = true;
    } else setErrorName('');

    if(!quantity) {
        setErrorQuantity('Ingrese cantidad');
        error= true
     } else setErrorQuantity('');

    if(!price){ 
        setErrorPrice('Ingrese precio'); 
        error = true;
    }  else setErrorPrice('')
    return error;
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