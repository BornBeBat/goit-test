import React, { Suspense } from 'react';
import s from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Home from 'pages/Home/Home';
import { NavList } from 'components';

export const Layout = () => {
  return (
    <>
      <header className={s.container}>
        <NavList />
      </header>
      <main className={s.container}>
        <Suspense fallback={<Home />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
