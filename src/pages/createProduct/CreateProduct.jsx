import React from 'react'
import { Form } from 'react-router-dom'
import Input from '../../components/inputs/input'
import { Label } from '../../components/inputs/label'
import PrimaryBtn from '../../components/button/primary'
import { useForm } from '../../hooks/useForm'
const CreateProduct = () => {
  const {
    handleChangePrice,
    handleChangeQuantity,
    handleChangeName,
    errorPrice,
    errorQuantity,
    errorName,
    checkErrors
  } = useForm()
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
                <PrimaryBtn onClick={checkErrors}>
                    Agregar
                </PrimaryBtn>
            </div>
        </div>
    </div>
  )
}

export default CreateProduct