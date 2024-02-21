import img from 'img/hansel.png';
import logo from 'img/logo.png';

import { Button } from 'components';
import s from './UserCard.module.css';

export const UserCard = () => {
  return (
    <li className={s.item}>
      <img className={s.logo} src={logo} alt="logo" />
      <div className={s.imgWrapper}>
        <img src={img} alt="avatar" />
      </div>
      <p className={s.tweets}>777 tweets</p>
      <p className={s.followers}>100,500 Followers</p>
      <Button />
    </li>
  );
};
