import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/auth/auth.reducer';


const Login = lazy(() => import('pages/LoginPage'));
const Register = lazy(() => import('pages/RegisterPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};


