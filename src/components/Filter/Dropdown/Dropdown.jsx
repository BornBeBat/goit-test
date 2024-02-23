import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setFilter } from 'myRedux/filter';

import s from './Dropdown.module.css';

const options = ['all', 'follow', 'followings'];

export const Dropdown = ({ handleClose, boxRef }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleCloseList = e => {
      if (e.target.closest('div') !== boxRef.current) {
        handleClose();
      }
    };
    document.addEventListener('click', handleCloseList);
    return () => {
      document.removeEventListener('click', handleCloseList);
    };
  }, [boxRef, handleClose]);

  const handleClick = el => {
    dispatch(setFilter(el));
    handleClose();
  };
  return (
    <ul className={s.wrapper}>
      {options.map(el => (
        <li key={el} className={s.item} onClick={() => handleClick(el)}>
          {el}
        </li>
      ))}
    </ul>
  );
};
