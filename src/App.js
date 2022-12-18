import { Route, Routes } from 'react-router-dom';
import Layout from './shared/components/Layout';
import Home from './shared/pages/Home';
import Products from './Products/pages/Products';
import Product from './Products/pages/AddProduct';
import 'App.css';
import EditProduct from 'Products/pages/EditProduct';
import Login from 'Auth/pages/Login';
import ProtectedRoute from 'shared/guards/Protected';
import GuestRoute from 'shared/guards/Guest';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialLoad } from 'Auth/store/thunks';
import NotFound from 'shared/pages/NotFound';
import Providers from 'Providers/pages/Providers';
import AddProvider from 'Providers/pages/AddProvider';
import EditProvider from 'Providers/pages/EditProvider';

const App = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(initialLoad());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/add"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/edit/:productId"
          element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/providers"
          element={
            <ProtectedRoute>
              <Providers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/providers/add"
          element={
            <ProtectedRoute>
              <AddProvider />
            </ProtectedRoute>
          }
        />
        <Route
          path="/providers/edit/:providerId"
          element={
            <ProtectedRoute>
              <EditProvider />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
