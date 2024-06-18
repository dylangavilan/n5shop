import Home from './pages/home/Home';
import './styles/styles.scss';
import productsData from './items.json'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './store/productsSlice';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './pages/layout';
import CreateProduct from './pages/createProduct/CreateProduct';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(productsData.products))
  }, []);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Navigate replace to='/' />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/add-product',
          element: <CreateProduct />
        }

      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
