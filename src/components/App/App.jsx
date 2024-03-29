import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from 'components';

const Home = lazy(() => import('pages/Home/Home'));
const Tweets = lazy(() => import('pages/Tweets/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to={'/'} replace={true} />} />
      </Route>
    </Routes>
  );
};
