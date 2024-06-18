import React from 'react'
import ShopCar from '../icons/ShopCar';
import DarkModeIcon from '../icons/DarkModeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../../hooks/useTheme';
import { handleOpen } from '../../store/cartSlice';
import { NavLink, useLocation } from "react-router-dom";
import LightModeIcon from '../icons/LightModeIcon';

const Nav = () => {
  const { items } = useSelector((state) => state.cart);
  const { darkTheme, toggleTheme } = useTheme();
  const dispatch = useDispatch();
  const location = useLocation();

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
           {location.pathname === '/add-product' ? 
            <NavLink to='/'>
              <li>Home</li>
            </NavLink> :
            <NavLink to='/add-product'>
              <li>Agregar producto</li>
            </NavLink>
           }
        </ul>
        <ul>
            <li onClick={toggleTheme}>
              {darkTheme ? <LightModeIcon /> : <DarkModeIcon />}
            </li>
            <li onClick={openShopCart}><ShopCar/> {items.length}</li>
        </ul>
    </nav>
  )
}

export default Nav;