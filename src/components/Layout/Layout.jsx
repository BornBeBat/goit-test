import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';

import { NavList } from 'components';

import 'react-toastify/dist/ReactToastify.css';
import s from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={s.container}>
        <NavList />
      </header>
      <main className={s.container}>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
    </>
  );
};
