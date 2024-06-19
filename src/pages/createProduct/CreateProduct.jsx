import React from 'react'
import { Form, useNavigate } from 'react-router-dom'
import Input from '../../components/inputs/input'
import { Label } from '../../components/inputs/label'
import Button from '../../components/button/button'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/productsSlice'
const CreateProduct = () => {
  const {
    handleChangePrice,
    handleChangeQuantity,
    handleChangeName,
    errorPrice,
    errorQuantity,
    errorName,
    checkErrors, 
    quantity, 
    name, 
    price
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const createP = () => {
    const error = checkErrors();
    
    if(!error) {
        dispatch(addProduct({ name, amount:quantity, price }));
        navigate('/')
    }
  }
  return (
    <div className='form-container'>
        <h2>Crear producto</h2>
        <div>
            <Form>
                <div className='input-container'>
                    <Label>
                        Nombre
                    </Label>
                    <Input placeholder='Ingrese el nombre del producto' errorMessage={errorName} onChange={handleChangeName}/>
                </div>
                <div className='price-section'>
                    <div className='input-container'>
                        <Label>
                            Precio
                        </Label>
                        <Input placeholder='Precio' type='number' errorMessage={errorPrice} onChange={handleChangePrice}/>
                    </div>
                    <div className='input-container'>
                        <Label>
                            Cantidad
                        </Label>
                        <Input placeholder='Cantidad' type='number' errorMessage={errorQuantity} onChange={handleChangeQuantity}/>
                    </div>
                </div>

            </Form>
            <div className='btn-container'>
                <Button type='primary' onClick={createP}>
                    Agregar
                </Button>
            </div>
        </div>
    </div>
  )
}

export default CreateProduct