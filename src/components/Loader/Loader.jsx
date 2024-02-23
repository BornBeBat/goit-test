import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

import s from './Loader.module.css';

export const Loader = () => {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#ebd8ff"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass={s.loaderWrapper}
    />
  );
};
