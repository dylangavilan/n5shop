import React from 'react'
import ShopCar from '../icons/ShopCar';
import DarkModeIcon from '../icons/DarkModeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../../hooks/useTheme';
import { handleOpen } from '../../store/cartSlice';
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { items } = useSelector((state) => state.cart);
  const { darkTheme, toggleTheme } = useTheme();
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light"
    );
  }, [darkTheme]);

  const openShopCart = () => {
    dispatch(handleOpen())
  }

  return (
    <nav className='navbar'>
        <ul>
            <NavLink to='/add-product'>
              <li>Agregar producto</li>
            </NavLink>
        </ul>
        <ul>
            <li onClick={toggleTheme}><DarkModeIcon /></li>
            <li onClick={openShopCart}><ShopCar/> {items.length}</li>
        </ul>
    </nav>
  )
}

export default Nav;