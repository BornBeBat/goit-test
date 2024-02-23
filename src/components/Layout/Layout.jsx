import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loader, NavList } from 'components';

import s from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={s.container}>
        <NavList />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
    </>
  );
};
