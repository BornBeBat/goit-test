import { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import classNames from 'class-names';

import { Dropdown } from './Dropdown/Dropdown';
import s from './Filter.module.css';

export const Filter = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };
  const btnClass = classNames({
    [`${s.wrapper}`]: true,
    [`${s.wrapperChecked}`]: checked,
  });
  return (
    <div className={btnClass} onClick={handleClick}>
      <p className={s.text}>Filter</p>
      {checked && <RiArrowDropUpLine size={20} />}
      {!checked && <RiArrowDropDownLine size={20} />}
      {checked && <Dropdown />}
    </div>
  );
};
