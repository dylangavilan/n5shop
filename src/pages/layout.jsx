import Nav from "../components/nav";
import CartSidebar from "../components/sidebar";
import { useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';

export default function Layout({children}) {

  const { isOpen } = useSelector(state => state.cart)

  return (
    <>
        <header>
            <Nav />
        </header>
        <main>
            <Outlet />
        </main>
        <CartSidebar isOpen={isOpen} />
        {/* <Footer /> */}
    </>
  )
}