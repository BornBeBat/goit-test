import s from './Dropdown.module.css';
export const Dropdown = () => {
  return (
    <ul className={s.wrapper}>
      <li className={s.item}>all</li>
      <li className={s.item}>follow</li>
      <li className={s.item}>followings</li>
    </ul>
  );
};
