import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'class-names';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

import { Dropdown } from './Dropdown/Dropdown';
import { selectFilter } from 'myRedux';

import s from './Filter.module.css';

export const Filter = () => {
  const [checked, setChecked] = useState(false);
  const filter = useSelector(selectFilter);
  const boxRef = useRef(null);

  const handleOpen = e => {
    if (e.target.closest('ul') !== null) return;
    setChecked(!checked);
  };

  const handleClose = () => {
    setChecked(false);
  };
  const wrapperClass = classNames({
    [`${s.wrapper}`]: true,
    [`${s.wrapperChecked}`]: checked,
  });
  return (
    <div className={wrapperClass} onClick={handleOpen} ref={boxRef}>
      <p className={s.text}>{filter}</p>
      {checked && <RiArrowDropUpLine className={s.icon} size={20} />}
      {!checked && <RiArrowDropDownLine className={s.icon} size={20} />}
      {checked && <Dropdown handleClose={handleClose} boxRef={boxRef} />}
    </div>
  );
};
